import { Eye, Search } from "lucide-react";
import { useState } from "react";
const orders = [
    { id: "ORD-001", customer: "Alex Morgan", date: "2023-10-15", total: 124.00, status: "Completed", items: 3 },
    { id: "ORD-002", customer: "Sarah Connor", date: "2023-10-16", total: 45.50, status: "Processing", items: 1 },
    { id: "ORD-003", customer: "James Bond", date: "2023-10-16", total: 299.99, status: "Shipped", items: 2 },
    { id: "ORD-004", customer: "Indiana Jones", date: "2023-10-17", total: 15.00, status: "Pending", items: 1 },
    { id: "ORD-005", customer: "Marty McFly", date: "2023-10-17", total: 89.99, status: "Completed", items: 4 },
];
const Orders = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredOrders, setFilteredOrders] = useState(orders);
    const getStatusColor = (status) => {
        switch (status) {
            case "Completed": return "bg-green-100 text-green-700";
            case "Processing": return "bg-blue-100 text-blue-700";
            case "Shipped": return "bg-purple-100 text-purple-700";
            case "Pending": return "bg-orange-100 text-orange-700";
            default: return "bg-gray-100 text-gray-700";
        }
    };
    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = orders.filter((order) =>
            order.customer.toLowerCase().includes(query.toLowerCase()) ||
            order.id.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredOrders(filtered);
    };
    const handleStatusChange = (status) => {
        const filtered = orders.filter((order) => order.status === status);
        if (status === "All Status") {
            setFilteredOrders(orders);
        } else {
            setFilteredOrders(filtered);
        }
    };
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Recent Orders</h2>
            {/* Toolbar */}
            <div className="flex justify-between items-center bg-white dark:bg-gray-950 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search orders..."
                        className="pl-10 pr-4 py-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-200"
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <select className="border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none text-gray-600 dark:text-gray-300 dark:bg-gray-900" onChange={(e) => handleStatusChange(e.target.value)}>
                        <option>All Status</option>
                        <option>Completed</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                    </select>
                </div>
            </div>
            {/* Orders Table */}
            <div className="bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Order ID</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Customer</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Items</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Total</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {filteredOrders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-800 dark:text-white">{order.id}</td>
                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{order.customer}</td>
                                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{order.date}</td>
                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{order.items}</td>
                                <td className="px-6 py-4 font-medium text-gray-800 dark:text-white">${order.total.toFixed(2)}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-blue-600 transition-colors p-1 rounded hover:bg-blue-50">
                                        <Eye size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Orders;