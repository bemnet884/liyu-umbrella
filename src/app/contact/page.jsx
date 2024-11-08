'use client'
import { useState } from 'react';
import emailjs from 'emailjs-com';

// Success and Error Modals for User Feedback
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      sender_name: formData.name,
      sender_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        'service_woj3sk9',     // Replace with your EmailJS Service ID
        'template_4rfivlc',    // Replace with your EmailJS Template ID for the Contact page
        templateParams,
        '5njePOeA6jKl3xD86'    // Replace with your EmailJS User ID
      )
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setSuccessMessage('Your message was sent successfully!');
        setFormData({ name: '', email: '', message: '' });  // Clear form on success
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        setErrorMessage('Failed to send your message. Please try again.');
      });
  };

  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Contact Us</h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Have questions or need assistance? Get in touch with us.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows="6"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Success and Error Modals */}
      {successMessage && <SuccessModal message={successMessage} onClose={() => setSuccessMessage('')} />}
      {errorMessage && <ErrorModal message={errorMessage} onClose={() => setErrorMessage('')} />}
    </main>
  );
}
