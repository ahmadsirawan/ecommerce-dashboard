import { LayoutDashboard, ShoppingBag, ShoppingCart, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
const Sidebar = ({ onClose }) => {
    const navItems = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/" },
        { icon: ShoppingBag, label: "Products", path: "/products" },
        { icon: ShoppingCart, label: "Orders", path: "/orders" },
        { icon: Settings, label: "Settings", path: "/settings" },
    ];
    return (
        <div className="w-64 bg-gray-900 dark:bg-gray-950 text-white h-screen flex flex-col shadow-xl">
            <div className="p-6 text-2xl font-bold border-b border-gray-800 flex justify-between items-center">
                <span>AdminPanel</span>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={onClose} // Close sidebar on mobile when link clicked
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
                            }`
                        }
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};
export default Sidebar;