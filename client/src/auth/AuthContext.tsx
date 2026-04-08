import { createContext, useContext, useEffect, useState } from 'react';
import {
    signIn,
    signUp,
    confirmSignUp,
    resendSignUpCode,
    signOut,
    getCurrentUser,
    fetchAuthSession,
    fetchUserAttributes,
} from 'aws-amplify/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const fetchCurrentUser = async () => {
        try {
            const [currentUser, attributes, session] = await Promise.all([
                getCurrentUser(),
                fetchUserAttributes(),
                fetchAuthSession(),
            ]);

            const groups = session.tokens?.idToken?.payload['cognito:groups'] as string[] || [];

            setUser({
                userId: currentUser.userId,
                username: currentUser.username,
                name: attributes.name || '',
                email: attributes.email || '',
                isSuperAdmin: groups.includes('superadmin'),
            });

        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };


    const login = async (email: string, password: string) => {
        await signIn({ username: email, password });

        const session = await fetchAuthSession();
        const groups = (session.tokens?.idToken?.payload["cognito:groups"] as string[]) || [];

        await fetchCurrentUser();
        return groups.includes('superadmin') ? '/dashboard' : '/';
    };

    const register = async (email: string, password: string, name: string) => {
        await signUp({
            username: email,
            password,
            options: {
                userAttributes: {
                    email,
                    name,
                },
            },
        });
        // cognito will send a verification code to their email after this
    };

    // verify the otp code that cognito sent to email
    const confirmOtp = async (email: string, code: string) => {
        await confirmSignUp({
            username: email,
            confirmationCode: code,
        });
    };

    // if user didn't get the code or it expired
    const resendOtp = async (email: string) => {
        await resendSignUpCode({ username: email });
    };

    const logout = async () => {
        await signOut();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, register, confirmOtp, resendOtp }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used inside AuthProvider');
    return context;
}