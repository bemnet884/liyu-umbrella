import { useState } from 'react';

export const OrderModal = ({ isOpen, onClose }) => {
  const [orderType, setOrderType] = useState('single'); // "single" for individual, "bulk" for bulk orders

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Place Your Order</h2>

        {/* Order Type Toggle */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setOrderType('single')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              orderType === 'single' ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Single Order
          </button>
          <button
            onClick={() => setOrderType('bulk')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              orderType === 'bulk' ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Bulk Order
          </button>
        </div>

        {/* Single Order Form */}
        {orderType === 'single' && (
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Umbrella Model"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              placeholder="Quantity"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-6 py-3">
              Submit Single Order
            </button>
          </form>
        )}

        {/* Bulk Order Form */}
        {orderType === 'bulk' && (
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Shop Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Shop Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Umbrella Model"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            {/* Quantity per Zone */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Quantity by Zone</h3>
              <input
                type="number"
                placeholder="Quantity for Zone A"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="number"
                placeholder="Quantity for Zone B"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="number"
                placeholder="Quantity for Zone C"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              {/* Add more zones as needed */}
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-6 py-3">
              Submit Bulk Order
            </button>
          </form>
        )}

        {/* Close Button */}
        <button className="mt-4 text-blue-600 hover:underline" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
