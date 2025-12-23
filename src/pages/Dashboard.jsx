import { Users, DollarSign, ShoppingBag, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import StatCard from "../components/StatCard";
// Mock Data for the chart
const salesData = [
    { name: 'Mon', sales: 4000, orders: 24 },
    { name: 'Tue', sales: 3000, orders: 13 },
    { name: 'Wed', sales: 2000, orders: 98 },
    { name: 'Thu', sales: 2780, orders: 39 },
    { name: 'Fri', sales: 1890, orders: 48 },
    { name: 'Sat', sales: 2390, orders: 38 },
    { name: 'Sun', sales: 3490, orders: 43 },
];
const Dashboard = () => {
    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
                <p className="text-gray-500">Welcome back, here's what's happening today.</p>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Sales" value="$12,426" icon={DollarSign} color="bg-blue-500" />
                <StatCard title="Total Orders" value="1,245" icon={ShoppingBag} color="bg-purple-500" />
                <StatCard title="New Customers" value="48" icon={Users} color="bg-green-500" />
                <StatCard title="Growth" value="+12.5%" icon={TrendingUp} color="bg-orange-500" />
            </div>
            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sales Chart */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Trends</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={salesData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} prefix="$" />
                                <Tooltip />
                                <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                {/* Recent Activity (Placeholder) */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                    <ShoppingBag size={18} className="text-gray-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800">New Order #{1000 + i}</p>
                                    <p className="text-xs text-gray-400">2 minutes ago</p>
                                </div>
                                <span className="ml-auto text-sm font-semibold text-green-600">+$120.00</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;