import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields',
        isError: true,
      });
      return;
    }

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just show a success message
      setFormStatus({
        message: 'Thanks for contacting us! We will get back to you soon.',
        isError: false,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      setFormStatus({
        message: 'Something went wrong. Please try again later.',
        isError: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formStatus && (
        <div
          className={`p-4 mb-4 rounded-md ${
            formStatus.isError ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
          }`}
        >
          {formStatus.message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full btn btn-primary"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;