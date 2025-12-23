import { User, Bell, Lock } from "lucide-react";
const Settings = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h2>
            {/* Profile Section */}
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <User size={20} /> Profile Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                        <input type="text" className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-900 dark:text-white" defaultValue="Alex Johnson" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                        <input type="email" className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-900 dark:text-white" defaultValue="alex@example.com" />
                    </div>
                </div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Save Changes</button>
            </div>
            {/* Notifications Section */}
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <Bell size={20} /> Notifications
                </h3>
                <div className="space-y-3">
                    <label className="flex items-center gap-3">
                        <input type="checkbox" className="w-5 h-5 text-blue-600 rounded dark:bg-gray-900 dark:border-gray-700" defaultChecked />
                        <span className="text-gray-700 dark:text-gray-300">Email me when a new order comes in</span>
                    </label>
                    <label className="flex items-center gap-3">
                        <input type="checkbox" className="w-5 h-5 text-blue-600 rounded dark:bg-gray-900 dark:border-gray-700" />
                        <span className="text-gray-700 dark:text-gray-300">Weekly reports/newsletters</span>
                    </label>
                </div>
            </div>
        </div>
    );
};
export default Settings;