// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import countries from '../data/countries';

// Image Slider Data
const sliderImages = [
  {
    src: '/images/products/Cardamom1.jpg',
    caption: 'Cardamom',
    slug: 'cardomon',
  },
  {
    src: '/images/products/flax-1seeds1.jpg',
    caption: 'Flax Seeds',
    slug: 'flax',
  },
  {
    src: '/images/products/blackPepper1.jpg',
    caption: 'Black Pepper',
    slug: 'blackPepper',
  },
  {
    src: '/images/products/SoyabeanMeal1.jpg',
    caption: 'Soyabean Meal',
    slug: 'soyabeanMeal',
  },
  { src: '/images/products/clove1.jpg', caption: 'Clove', slug: 'clove' },
  {
    src: '/images/products/lotusSeeds1.jpg',
    caption: 'Makhana',
    slug: 'lotusSeeds',
  },
  {
    src: '/images/products/SoyabeanFlakes1.jpg',
    caption: 'Soyabean Flakes',
    slug: 'Soyabeen',
  },
  {
    src: '/images/products/Granite1.jpg',
    caption: 'Natural Granite',
    slug: 'granite',
  },
];

const latestProducts = [
  {
    src: '/images/products/blackPepper.png',
    name: 'Black Pepper',
    slug: 'blackPepper',
  },
  {
    src: '/images/products/SoyabeanMeal.png',
    name: 'Soyabean Meal',
    slug: 'soyabeanMeal',
  },
  {
    src: '/images/products/SoyabeanFlakes.png',
    name: 'Soyabean Flakes',
    slug: 'Soyabeen',
  },
  { src: '/images/products/clove.png', name: 'Clove', slug: 'clove' },
];

const popularProducts = [
  {
    src: '/images/products/granite.png',
    name: 'Natural Granite',
    slug: 'granite',
  },
  { src: '/images/products/cardamom.png', name: 'Cardamom', slug: 'cardomon' },
  { src: '/images/products/flax-seeds.png', name: 'Flax Seeds', slug: 'flax' },
  {
    src: '/images/products/lotusSeeds.png',
    name: 'Makhana',
    slug: 'lotusSeeds',
  },
];

// Image Slider Component
function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className='relative w-full h-[calc(100vh-100px)] bg-black overflow-hidden'>
      {/* Prev Button */}
      <button
        onClick={() =>
          setCurrent(
            (prev) => (prev - 1 + sliderImages.length) % sliderImages.length,
          )
        }
        className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center z-10'
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % sliderImages.length)}
        className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center z-10'
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 5l7 7-7 7'
          />
        </svg>
      </button>

      {/* Image */}
      <Link to={`/products/${sliderImages[current].slug}`}>
        <img
          src={sliderImages[current].src}
          alt={sliderImages[current].caption}
          className='w-full h-full object-cover aspect-[16/9] cursor-pointer transition-transform duration-500'
        />
      </Link>

      {/* Indicators */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10'>
        {sliderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>

      {/* Caption */}
      <div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-8 py-4 rounded shadow-lg text-2xl font-semibold text-gray-900'>
        <Link
          to={`/products/${sliderImages[current].slug}`}
          className='hover:text-yellow-600'
        >
          {sliderImages[current].caption}
        </Link>
      </div>
    </div>
  );
}

// Main Home Page Component
export default function Home() {
  const [formData, setFormData] = useState({
    product: '',
    country: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  // handle input change
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'Quick Enquiry',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          productName: formData.product,
          pageUrl: window.location.pathname,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({
          loading: false,
          success: 'Form submitted successfully!',
          error: null,
        });
        setFormData({
          product: '',
          country: '',
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <main>
      {/* Slider */}
      <section className='bg-gray-100'>
        <ImageSlider />
      </section>

      {/* Latest Products */}
      <section className='py-12 bg-white text-center'>
        <h2 className='text-3xl font-bold mb-8 text-gray-800'>
          Latest Products
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {latestProducts.map((p) => (
            <Link key={p.name} to={`/products/${p.slug}`} className='group'>
              <div className='bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition-all border border-gray-200'>
                <div className='overflow-hidden rounded-md mb-3'>
                  <img
                    src={p.src}
                    alt={p.name}
                    className='w-full h-32 object-cover group-hover:scale-110 transition-transform'
                  />
                </div>
                <div className='font-semibold text-gray-700 group-hover:text-yellow-600'>
                  {p.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className='py-12 bg-gray-50 text-center'>
        <h2 className='text-3xl font-bold mb-8 text-gray-800'>
          Popular Products
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {popularProducts.map((p) => (
            <Link key={p.name} to={`/products/${p.slug}`} className='group'>
              <div className='bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition-all border border-gray-200'>
                <div className='overflow-hidden rounded-md mb-3'>
                  <img
                    src={p.src}
                    alt={p.name}
                    className='w-full h-32 object-cover group-hover:scale-110 transition-transform'
                  />
                </div>
                <div className='font-semibold text-gray-700 group-hover:text-yellow-600'>
                  {p.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Enquiry */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>
            Quick Enquiry
          </h2>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto'>
            {/* Image */}
            <div className='lg:w-1/2 w-full'>
              <img
                src='/images/products/enquiry.png'
                alt='Enquiry'
                className='rounded-lg shadow-xl w-full h-64 lg:h-96 object-cover'
              />
            </div>

            {/* Form */}
            <div className='lg:w-1/2 w-full'>
              <form
                onSubmit={handleSubmit}
                className='space-y-6 bg-white p-6 rounded-xl shadow-md'
              >
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Product / Service Looking for{' '}
                    <span className='text-red-500'>*</span>
                  </label>
                  <input
                    name='product'
                    type='text'
                    value={formData.product}
                    onChange={handleChange}
                    placeholder='E.g. Clove, Granite, Flax Seeds...'
                    className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 bg-gray-50 hover:bg-white'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Select Country <span className='text-red-500'>*</span>
                  </label>
                  <select
                    name='country'
                    value={formData.country}
                    onChange={handleChange}
                    className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 bg-gray-50 hover:bg-white'
                    required
                  >
                    <option value=''>-- Select Country --</option>
                    {countries.map((c, i) => (
                      <option key={i} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Your Name <span className='text-red-500'>*</span>
                    </label>
                    <input
                      name='name'
                      type='text'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='John Doe'
                      className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 bg-gray-50 hover:bg-white'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Email <span className='text-red-500'>*</span>
                    </label>
                    <input
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='john@example.com'
                      className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 bg-gray-50 hover:bg-white'
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Mobile Number <span className='text-red-500'>*</span>
                  </label>
                  <input
                    name='phone'
                    type='tel'
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='+91 98765 43210'
                    className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 bg-gray-50 hover:bg-white'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Message <span className='text-red-500'>*</span>
                  </label>
                  <textarea
                    name='message'
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Please provide details about your requirements...'
                    className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 bg-gray-50 hover:bg-white resize-none'
                    required
                  />
                </div>

                <button
                  type='submit'
                  disabled={status.loading}
                  className='w-full bg-gradient-to-r from-green-700 to-green-600 text-white py-4 rounded-xl font-semibold hover:from-green-800 hover:to-green-700 transition-all shadow-lg'
                >
                  {status.loading ? 'Sending...' : 'Send Enquiry'}
                </button>

                {status.success && (
                  <p className='text-green-600 font-medium text-center'>
                    {status.success}
                  </p>
                )}
                {status.error && (
                  <p className='text-red-600 font-medium text-center'>
                    {status.error}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
