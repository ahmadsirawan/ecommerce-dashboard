import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div className="flex bg-gray-100 dark:bg-gray-950 min-h-screen">
            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
            {/* Sidebar - Passed the open state */}
            <div className={`fixed left-0 top-0 h-full z-50 transition-transform duration-300 md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } md:relative md:block`}>
                <Sidebar onClose={() => setIsSidebarOpen(false)} />
            </div>
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col transition-all w-full">
                {/* Header */}
                <header className="bg-white dark:bg-gray-900 border-b border-transparent dark:border-gray-800 shadow-sm h-16 flex items-center px-6 sticky top-0 z-30">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="mr-4 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg md:hidden"
                    >
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">AdminPanel</h1>
                    <div className="ml-auto flex items-center gap-4">
                        <button onClick={toggleTheme} className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors">
                            {isDarkMode ? <Sun size={20} className="dark:text-gray-400" /> : <Moon size={20} className="dark:text-gray-400" />}
                        </button>
                    </div>
                </header>
                {/* Page Content */}
                <main className="p-6 md:p-6 flex-1 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
export default MainLayout;