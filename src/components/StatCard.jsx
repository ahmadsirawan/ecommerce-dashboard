const StatCard = ({ title, value, icon: Icon, color }) => {
    return (
        <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{value}</h3>
            </div>
            <div className={`p-3 rounded-lg ${color}`}>
                <Icon className="text-white" size={24} />
            </div>
        </div>
    );
};
export default StatCard;