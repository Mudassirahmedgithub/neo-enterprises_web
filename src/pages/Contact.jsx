// contact.js
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    product: '',
    details: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = ['name', 'email', 'mobile', 'product', 'details'];
    const missingFields = requiredFields.filter(
      (field) => !formData[field]?.trim(),
    );

    if (missingFields.length > 0) {
      setStatus({
        submitting: false,
        submitted: false,
        error: `Please fill in: ${missingFields.join(', ')}`,
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      console.log('Sending request to /api/submit with:', {
        formType: 'contact',
        formData: formData,
      });

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contact',
          formData: formData,
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      // Check if response has content before parsing
      const text = await response.text();
      console.log('Response text:', text);

      let result;
      try {
        result = JSON.parse(text);
      } catch (e) {
        throw new Error(`Invalid JSON response: ${text.substring(0, 100)}`);
      }

      if (response.ok && result.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null,
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          mobile: '',
          product: '',
          details: '',
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, submitted: false }));
        }, 5000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message || 'Failed to submit form. Please try again.',
      });
    }
  };

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <h2 className='text-3xl font-bold mb-6'>Contact Us</h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Name */}
        <div>
          <label htmlFor='name' className='block text-sm font-medium mb-2'>
            Name *
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor='email' className='block text-sm font-medium mb-2'>
            Email *
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            required
          />
        </div>

        {/* Mobile */}
        <div>
          <label htmlFor='mobile' className='block text-sm font-medium mb-2'>
            Mobile *
          </label>
          <input
            type='tel'
            id='mobile'
            name='mobile'
            value={formData.mobile}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            required
          />
        </div>

        {/* Product */}
        <div>
          <label htmlFor='product' className='block text-sm font-medium mb-2'>
            Product Interest *
          </label>
          <input
            type='text'
            id='product'
            name='product'
            value={formData.product}
            onChange={handleChange}
            placeholder='Which product are you interested in?'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            required
          />
        </div>

        {/* Details */}
        <div>
          <label htmlFor='details' className='block text-sm font-medium mb-2'>
            Details *
          </label>
          <textarea
            id='details'
            name='details'
            value={formData.details}
            onChange={handleChange}
            rows='5'
            placeholder='Please provide more details about your enquiry...'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            required
          />
        </div>

        {/* Status Messages */}
        {status.error && (
          <div className='p-4 bg-red-50 border border-red-200 rounded-lg text-red-700'>
            {status.error}
          </div>
        )}

        {status.submitted && (
          <div className='p-4 bg-green-50 border border-green-200 rounded-lg text-green-700'>
            ✓ Your message has been sent successfully! We'll get back to you
            soon.
          </div>
        )}

        {/* Submit Button */}
        <button
          type='submit'
          disabled={status.submitting}
          className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-colors ${
            status.submitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {status.submitting ? 'Sending...' : 'Submit Enquiry'}
        </button>
      </form>
    </div>
  );
}
