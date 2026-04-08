import { useAuth } from '../../auth/AuthContext';

export default function Dashboard() {
    const { user } = useAuth();

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
                Welcome back, {user?.name || 'Super Admin'}
            </h1>
            <p className="text-sm text-gray-500 mb-8">{user?.email}</p>

            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                    { label: 'Total Listings', value: '—' },
                    { label: 'Total Users', value: '—' },
                    { label: 'Reviews', value: '—' },
                ].map(stat => (
                    <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <p className="text-sm text-gray-500">{stat.label}</p>
                        <p className="text-3xl font-bold text-green-700 mt-1">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-gray-400 text-sm">
                Business listings CRUD coming next.
            </div>
        </div>
    );
}