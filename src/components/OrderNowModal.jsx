"use client";
import { useState } from 'react';

const OrderModal = ({ isOpen, onClose }) => {
  const [orderType, setOrderType] = useState('single');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    quantity: '',
    shopName: '',
    zones: { ZoneA: '', ZoneB: '', ZoneC: '' },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleZoneChange = (zone, value) => {
    setFormData((prev) => ({
      ...prev,
      zones: {
        ...prev.zones,
        [zone]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderType,
          ...formData,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        onClose();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit order');
    }
  };

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
              orderType === 'single' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Single Order
          </button>
          <button
            onClick={() => setOrderType('bulk')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              orderType === 'bulk' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Bulk Order
          </button>
        </div>

        {/* Form Submission */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {orderType === 'single' ? (
            <>
              <input type="text" name="name" placeholder="Your Name" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="email" name="email" placeholder="Your Email" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="number" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="text" name="model" placeholder="Umbrella Model" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
            </>
          ) : (
            <>
              <input type="text" name="shopName" placeholder="Shop Name" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="email" name="email" placeholder="Shop Email" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="number" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="text" name="model" placeholder="Umbrella Model" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />

              {/* Zone Quantities */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Quantity by Zone</h3>
                {Object.keys(formData.zones).map((zone) => (
                  <input
                    key={zone}
                    type="number"
                    placeholder={`Quantity for ${zone}`}
                    value={formData.zones[zone]}
                    onChange={(e) => handleZoneChange(zone, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                ))}
              </div>
            </>
          )}
          <button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-6 py-3">
            Submit {orderType === 'single' ? 'Single Order' : 'Bulk Order'}
          </button>
        </form>

        <button className="mt-4 text-blue-600 hover:underline" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
