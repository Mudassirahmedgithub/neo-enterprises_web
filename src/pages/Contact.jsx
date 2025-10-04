import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Package } from 'lucide-react';

export default function Contact() {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    granite: '',
    details: '',
  });

  const graniteCategories = [
    'Neo Chocolate Lapotra',
    'Neo Tiger Shade',
    'Neo Tomato Red',
    'Neo Galaxy Black',
    'Neo K Tize',
    'Star Blue',
    'Neo Tan Blue',
    'Neo Tan Red',
  ];

  const products = [
    "Natural Stone's (Granites)",
    'Clove',
    'Cardamom',
    'Black Pepper (Kali Mirch)',
    'Flax Seeds',
    'Soyabean Flakes',
    'Soyabean Meal',
    'Makhana (Lotus Seeds)',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, product: selectedProduct });
    alert('Thank you for your enquiry! We will contact you shortly.');
  };

  return (
    <div className='font-sans text-gray-800 bg-gray-50'>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-br from-green-900 via-green-800 to-green-950 py-24 px-6 overflow-hidden'>
        {/* Decorative background blur shapes */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl'></div>
          <div className='absolute bottom-10 right-20 w-96 h-96 bg-green-400 rounded-full blur-3xl'></div>
        </div>

        {/* Content */}
        <div className='container mx-auto text-center relative z-10'>
          <h1 className='text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight'>
            Get In Touch
          </h1>
          <p className='text-xl text-green-100 max-w-3xl mx-auto leading-relaxed'>
            Let's discuss how we can help you with premium natural stones and
            quality spices
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='container mx-auto px-6 py-16'>
        <div className='grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto'>
          {/* Contact Information Sidebar */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Company Card */}
            <div className='bg-white rounded-2xl shadow-lg p-8 border border-green-100'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                NEO ENTERPRISES
              </h2>
              <p className='text-sm text-green-700 font-semibold mb-4'>
                PRIVATE LIMITED
              </p>

              <div className='space-y-5'>
                <div className='flex items-start gap-4 group'>
                  <div className='bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors'>
                    <Package className='w-5 h-5 text-green-700' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      Contact Person
                    </h3>
                    <p className='text-gray-600'>Mr. Wahed Nawaz</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 group'>
                  <div className='bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors'>
                    <MapPin className='w-5 h-5 text-green-700' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      Address
                    </h3>
                    <p className='text-gray-600'>Karimnagar, India - 505001</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 group'>
                  <div className='bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors'>
                    <Phone className='w-5 h-5 text-green-700' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      Call Us
                    </h3>
                    <a
                      href='tel:+918886668873'
                      className='text-green-700 hover:text-green-800 font-medium'
                    >
                      +91 88866 68873
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-4 group'>
                  <div className='bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors'>
                    <Mail className='w-5 h-5 text-green-700' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      Alibaba Store
                    </h3>
                    <a
                      href='https://x.alibaba.com/17LMn6?ck=minisite'
                      className='text-green-700 hover:text-green-800 font-medium hover:underline'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Visit Our Page →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className='bg-gradient-to-br from-green-700 to-green-600 rounded-2xl shadow-lg p-8 text-white'>
              <h3 className='text-xl font-bold mb-4'>Why Choose Us?</h3>
              <ul className='space-y-3 text-green-50'>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-white rounded-full'></span>
                  Premium Quality Products
                </li>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-white rounded-full'></span>
                  Competitive Pricing
                </li>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-white rounded-full'></span>
                  Reliable Delivery
                </li>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-white rounded-full'></span>
                  Expert Support
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-3'>
            <div className='bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-green-100'>
              <div className='mb-8'>
                <h2 className='text-3xl font-bold text-gray-900 mb-2'>
                  Send an Enquiry
                </h2>
                <p className='text-gray-600'>
                  Fill out the form below and we'll get back to you shortly
                </p>
              </div>

              <div className='space-y-6'>
                {/* Product Selection */}
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Product / Service Looking for{' '}
                    <span className='text-red-500'>*</span>
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 hover:bg-white'
                  >
                    <option value=''>-- Select Product --</option>
                    {products.map((prod, idx) => (
                      <option key={idx} value={prod}>
                        {prod}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Granite Sub-category */}
                {selectedProduct === "Natural Stone's (Granites)" && (
                  <div className='animate-fadeIn'>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Granite Category <span className='text-red-500'>*</span>
                    </label>
                    <select
                      value={formData.granite}
                      onChange={(e) =>
                        setFormData({ ...formData, granite: e.target.value })
                      }
                      className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 hover:bg-white'
                    >
                      <option value=''>-- Select Granite Type --</option>
                      {graniteCategories.map((cat, idx) => (
                        <option key={idx} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Name and Email Row */}
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Your Name <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='text'
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder='John Doe'
                      className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 hover:bg-white'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Email <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='email'
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder='john@example.com'
                      className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 hover:bg-white'
                    />
                  </div>
                </div>

                {/* Mobile */}
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Mobile Number <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='tel'
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    placeholder='+91 98765 43210'
                    className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 hover:bg-white'
                  />
                </div>

                {/* Enquiry Details */}
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Enquiry Details <span className='text-red-500'>*</span>
                  </label>
                  <textarea
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    placeholder='Please provide details about your requirements...'
                    className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 hover:bg-white resize-none'
                    rows='5'
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className='w-full bg-gradient-to-r from-green-700 to-green-600 text-white py-4 rounded-xl font-semibold hover:from-green-800 hover:to-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group'
                >
                  <span>Send Enquiry</span>
                  <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
