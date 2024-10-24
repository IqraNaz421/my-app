"use client"
import React, { useState } from 'react';

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to an API)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-300 py-10">
      <div className="max-w-lg mx-auto px-4">
        <div className="bg-gray-200 shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-bold text-[#1e3a8a] mb-4">Contact Me</h1>
          <p className="text-gray-600 text-lg mb-6">
            I’d love to hear from you! Please fill out the form below to get in touch.
          </p>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-lg py-2 px-4 w-full focus:outline-none focus:ring focus:ring-[#1e3a8a]"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg py-2 px-4 w-full focus:outline-none focus:ring focus:ring-[#1e3a8a]"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="border rounded-lg py-2 px-4 w-full focus:outline-none focus:ring focus:ring-[#1e3a8a]"
                required
              ></textarea>
            </div>

            <button type="submit" className="bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-900 w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
