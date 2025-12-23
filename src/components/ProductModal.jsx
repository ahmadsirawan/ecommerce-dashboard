import { X } from "lucide-react";

const ProductModal = ({ isOpen, onClose, product, onSave }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {product ? "Edit Product" : "Add Product"}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    >
                        <X size={24} />
                    </button>
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const productData = {
                            name: formData.get("name"),
                            category: formData.get("category"),
                            price: parseFloat(formData.get("price")),
                            stock: parseInt(formData.get("stock")),
                            status: formData.get("status"),
                        };
                        onSave(productData);
                    }}
                    className="p-6 space-y-4"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={product?.name}
                            required
                            className="w-full border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                        <input
                            type="text"
                            name="category"
                            defaultValue={product?.category}
                            required
                            className="w-full border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price</label>
                            <input
                                type="number"
                                name="price"
                                step="0.01"
                                defaultValue={product?.price}
                                required
                                className="w-full border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Stock</label>
                            <input
                                type="number"
                                name="stock"
                                defaultValue={product?.stock}
                                required
                                className="w-full border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
                        <select
                            name="status"
                            defaultValue={product?.status || "Active"}
                            className="w-full border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        >
                            <option value="Active">Active</option>
                            <option value="Low Stock">Low Stock</option>
                            <option value="Out of Stock">Out of Stock</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            {product ? "Save Changes" : "Add Product"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductModal;
