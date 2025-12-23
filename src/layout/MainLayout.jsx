import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="flex bg-gray-100 min-h-screen">
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
                <header className="bg-white shadow-sm h-16 flex items-center px-6 sticky top-0 z-30">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="mr-4 p-2 text-gray-600 hover:bg-gray-100 rounded-lg md:hidden"
                    >
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <h1 className="text-xl font-semibold text-gray-800">AdminPanel</h1>
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