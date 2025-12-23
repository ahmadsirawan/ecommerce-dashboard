import { useState } from "react";
import { Plus, Search, Pencil, Trash2, Filter } from "lucide-react";
const initialProducts = [
    { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 124, status: "Active" },
    { id: 2, name: "Leather Wallet", category: "Accessories", price: 39.50, stock: 56, status: "Active" },
    { id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 0, status: "Out of Stock" },
    { id: 4, name: "Running Shoes", category: "Footwear", price: 89.00, stock: 23, status: "Active" },
    { id: 5, name: "Coffee Maker", category: "Home", price: 45.00, stock: 12, status: "Low Stock" },
];
const Products = () => {
    const [products, setProducts] = useState(initialProducts);
    const [searchTerm, setSearchTerm] = useState("");
    // Filtering logic
    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            setProducts(products.filter(p => p.id !== id));
        }
    };
    const handleEdit = (id) => {
        if (window.confirm("Are you sure you want to edit this product?")) {
            setProducts(products.map(p => p.id === id ? { ...p, stock: p.stock + 1 } : p));
        }
    };
    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Products</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
                    <Plus size={20} />
                    <span>Add Product</span>
                </button>
            </div>
            {/* Search and Filter Bar */}
            <div className="flex gap-4 bg-white dark:bg-gray-950 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="pl-10 pr-4 py-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-200"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-600 dark:text-gray-300">
                    <Filter size={20} />
                    <span>Filter</span>
                </button>
            </div>
            {/* Products Table */}
            <div className="bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Product Name</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Category</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Price</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Stock</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {filteredProducts.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-800 dark:text-white">{product.name}</td>
                                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{product.category}</td>
                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">${product.price.toFixed(2)}</td>
                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{product.stock}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${product.stock === 0
                                            ? "bg-red-100 text-red-700"
                                            : product.stock < 15
                                                ? "bg-orange-100 text-orange-700"
                                                : "bg-green-100 text-green-700"
                                            }`}
                                    >
                                        {product.stock === 0 ? "Out of Stock" : product.stock < 15 ? "Low Stock" : "Active"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => handleEdit(product.id)}
                                            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                            <Pencil size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="p-12 text-center text-gray-500">
                        No products found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};
export default Products;