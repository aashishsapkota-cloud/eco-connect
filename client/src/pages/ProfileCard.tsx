import { Mail, User } from "lucide-react"
import CommentsBox from "../components/CommentsBox"
import { useAuth } from "../auth/AuthContext"
import Button from "../components/Button"
import { Navigate } from "react-router-dom"

const dummyCommment = [
    {
        id: 1,
        businessId: "1A",
        businessName: "EcoLife Store",
        rating: 4,
        text: "Good",
        date: "2026-03-08",
    },
    {
        id: 2,
        businessId: "2B",
        businessName: "Green Grocer Market",
        rating: 5,
        text: "Very Good",
        date: "2026-02-08",
    },
    {
        id: 3,
        businessId: "3C",
        businessName: "Repair & Restore workshop",
        rating: 3,
        text: "Average",
        date: "2026-04-08",
    }
]

const ProfileCard = () => {

    const { user, logout } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <div className='bg-white mx-10 p-8 rounded-lg shadow-lg flex justify-between items-start w-1/2'>
                <div className='flex gap-6'>
                    <User className="bg-green-900 shadow-lg rounded-full p-2 text-white" size={80} />
                    <div>
                        <h1 className="text-2xl font-bold">{user?.name || "User"}</h1>
                        <p className="text-gray-600 flex gap-2 text-green-900 items-center"> <Mail size={16} />{user?.email || "Email"}</p>
                    </div>
                </div>
                <Button onClick={logout}>Logout</Button>
            </div>
            <div className='bg-white m-10 p-8 rounded-lg shadow-lg justify-between w-1/2'>
                <h1 className="text-xl font-semibold">My Reviews</h1>
                {/* @ts-expect-error */}
                <CommentsBox comments={dummyCommment} userId={user?.id} />
            </div>
        </>
    )
}

export default ProfileCard