import { useState } from 'react';
import emailjs from 'emailjs-com';

export const OrderModal = ({ isOpen, onClose }) => {
  const [orderType, setOrderType] = useState('single');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    quantity: '',
    shopName: '',
    zones: { zoneA: '', zoneB: '', zoneC: '' },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleZoneChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      zones: { ...prev.zones, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   const templateParams = {
      owner_name: 'Liyu Umbrella Manufacturer', // Can be a static value
      order_type: orderType === 'single' ? 'Single Order' : 'Bulk Order',
      sender_name: formData.name || formData.shopName,
      sender_email: formData.email,
      phone: formData.phone,
      umbrella_model: formData.model,
      quantity: formData.quantity,
      zone_a: formData.zones.zoneA,
      zone_b: formData.zones.zoneB,
      zone_c: formData.zones.zoneC,
};


    emailjs
      .send(
        'service_woj3sk9',    // Replace with your EmailJS Service ID
        'template_fbcq5pt',    // Replace with your EmailJS Template ID
        templateParams,
        '5njePOeA6jKl3xD86'         // Replace with your EmailJS User ID
      )
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        alert('Order submitted successfully!');
        onClose();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to submit order. Please try again.');
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Place Your Order</h2>
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

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Single Order Form Fields */}
          {orderType === 'single' ? (
            <>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="number" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="text" name="model" placeholder="Umbrella Model" value={formData.model} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
            </>
          ) : (
            <>
              {/* Bulk Order Form Fields */}
              <input type="text" name="shopName" placeholder="Shop Name" value={formData.shopName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="email" name="email" placeholder="Shop Email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="number" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="text" name="model" placeholder="Umbrella Model" value={formData.model} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Quantity by Zone</h3>
                <input type="number" name="zoneA" placeholder="Quantity for Zone A" value={formData.zones.zoneA} onChange={handleZoneChange} className="w-full p-3 border border-gray-300 rounded-lg" />
                <input type="number" name="zoneB" placeholder="Quantity for Zone B" value={formData.zones.zoneB} onChange={handleZoneChange} className="w-full p-3 border border-gray-300 rounded-lg" />
                <input type="number" name="zoneC" placeholder="Quantity for Zone C" value={formData.zones.zoneC} onChange={handleZoneChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
            </>
          )}
          <button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-6 py-3">
            Submit {orderType === 'single' ? 'Single' : 'Bulk'} Order
          </button>
        </form>

        <button className="mt-4 text-blue-600 hover:underline" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};
