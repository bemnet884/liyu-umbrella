import { useState } from 'react';
import emailjs from 'emailjs-com';

const SuccessModal = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
      <h3 className="text-2xl font-bold text-green-600 mb-4">Success</h3>
      <p className="text-gray-700 mb-6">{message}</p>
      <button onClick={onClose} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Close
      </button>
    </div>
  </div>
);

const ErrorModal = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
      <h3 className="text-2xl font-bold text-red-600 mb-4">Error</h3>
      <p className="text-gray-700 mb-6">{message}</p>
      <button onClick={onClose} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Close
      </button>
    </div>
  </div>
);

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
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      owner_name: 'Liyu Umbrella Manufacturer',
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
        'service_woj3sk9',   // Your EmailJS Service ID
        'template_fbcq5pt',   // Your EmailJS Template ID
        templateParams,
        '5njePOeA6jKl3xD86'   // Your EmailJS User ID
      )
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setSuccessMessage('Your order was submitted successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setErrorMessage('Failed to submit your order. Please try again.');
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
          {orderType === 'single' ? (
            <>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 border text-black border-gray-300 rounded-lg" />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 border text-black border-gray-300 rounded-lg" />
              <input type="number" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-3 border text-black border-gray-300 rounded-lg" />
              <input type="text" name="model" placeholder="Umbrella Model" value={formData.model} onChange={handleChange} className="w-full p-3 border text-black border-gray-300 rounded-lg" />
              <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="w-full p-3 border text-black border-gray-300 rounded-lg" />
            </>
          ) : (
            <>
              <input type="text" name="shopName" placeholder="Shop Name" value={formData.shopName} onChange={handleChange} className="w-full p-3 border text-black border-gray-300 rounded-lg" />
              <input type="email" name="email" placeholder="Shop Email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="number" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-3 border text-black border-gray-300 rounded-lg" />
              <input type="text" name="model" placeholder="Umbrella Model" value={formData.model} onChange={handleChange} className="w-full p-3 border text-black border-gray-300 rounded-lg" />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Quantity by Zone</h3>
                <input type="number" name="zoneA" placeholder="Quantity for Zone A" value={formData.zones.zoneA} onChange={handleZoneChange} className="w-full p-3 border text-black border-gray-300 rounded-lg" />
                <input type="number" name="zoneB" placeholder="Quantity for Zone B" value={formData.zones.zoneB} onChange={handleZoneChange} className="w-full p-3 border  text-black border-gray-300 rounded-lg" />
                <input type="number" name="zoneC" placeholder="Quantity for Zone C" value={formData.zones.zoneC} onChange={handleZoneChange} className="w-full p-3 border text-black border-gray-300 rounded-lg" />
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

      {successMessage && <SuccessModal message={successMessage} onClose={() => setSuccessMessage('')} />}
      {errorMessage && <ErrorModal message={errorMessage} onClose={() => setErrorMessage('')} />}
    </div>
  );
};

export default OrderModal;
