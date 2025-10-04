// src/pages/Home.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import countries from '../data/countries';
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
  {
    src: '/images/products/clove1.jpg',
    caption: 'Clove',
    slug: 'clove',
  },
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
  {
    src: '/images/products/clove.png',
    name: 'Clove',
    slug: 'clove',
  },
];

const popularProducts = [
  {
    src: '/images/products/granite.png',
    name: 'Natural Granite',
    slug: 'granite',
  },
  {
    src: '/images/products/cardamom.png',
    name: 'Cardamom',
    slug: 'cardomon',
  },
  {
    src: '/images/products/flax-seeds.png',
    name: 'Flax Seeds',
    slug: 'flax',
  },
  {
    src: '/images/products/lotusSeeds.png',
    name: 'Makhana',
    slug: 'lotusSeeds',
  },
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length,
    );
  };

  return (
    <div className='relative w-full h-[calc(100vh-100px)] bg-black overflow-hidden'>
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300'
        aria-label='Previous image'
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

      <button
        onClick={nextSlide}
        className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300'
        aria-label='Next image'
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

      {/* Clickable Image that navigates to product page */}
      <Link to={`/products/${sliderImages[current].slug}`}>
        <img
          src={sliderImages[current].src}
          alt={`Banner ${current + 1}`}
          className='w-full h-full object-cover aspect-[16/9] cursor-pointer transition-transform duration-500'
        />
      </Link>

      {/* Slide Indicators */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10'>
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Caption */}
      <div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-8 py-4 rounded shadow-lg text-2xl font-semibold text-gray-900 transition-opacity duration-500'>
        <Link
          to={`/products/${sliderImages[current].slug}`}
          className='hover:text-yellow-600 transition-colors duration-300'
        >
          {sliderImages[current].caption}
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Slider Section - This will be right below the header */}
      <section className='bg-gray-100'>
        <ImageSlider />
      </section>

      {/* Latest Products */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8 text-gray-800'>
            Latest Products
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {latestProducts.map((product) => (
              <Link
                key={product.name}
                to={`/products/${product.slug}`}
                className='group'
              >
                <div className='bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200'>
                  <div className='overflow-hidden rounded-md mb-3'>
                    <img
                      src={product.src}
                      alt={product.name}
                      className='w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                  </div>
                  <div className='font-semibold text-gray-700 group-hover:text-yellow-600 transition-colors duration-300'>
                    {product.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8 text-gray-800'>
            Popular Products
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {popularProducts.map((product) => (
              <Link
                key={product.name}
                to={`/products/${product.slug}`}
                className='group'
              >
                <div className='bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200'>
                  <div className='overflow-hidden rounded-md mb-3'>
                    <img
                      src={product.src}
                      alt={product.name}
                      className='w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                  </div>
                  <div className='font-semibold text-gray-700 group-hover:text-yellow-600 transition-colors duration-300'>
                    {product.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Glimpse Section */}
      <section className='bg-gradient-to-r from-yellow-100 to-white py-12'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8 border-b-4 border-yellow-500 inline-block pb-2 text-gray-800'>
            Glimpse of Our Company
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-dark'>
            <div className='p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl'>
              <span className='font-bold text-yellow-600'>
                Nature of Business:
              </span>
              <br className='md:hidden' />
              Manufacturers, Supplier, Exporters
            </div>
            <div className='p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl'>
              <span className='font-bold text-yellow-600'>Employees:</span>
              <br className='md:hidden' />
              60 Employees
            </div>
            <div className='p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl'>
              <span className='font-bold text-yellow-600'>
                Year Established:
              </span>
              <br className='md:hidden' />
              2022
            </div>
            <div className='p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl'>
              <span className='font-bold text-yellow-600'>Market Covered:</span>
              <br className='md:hidden' />
              Worldwide
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-12 bg-yellow-100'>
        <div className='container mx-auto text-center'>
          <p className='mb-6 text-xl font-semibold text-gray-700 max-w-4xl mx-auto'>
            In promotion and advertising, a testimonial consists of a person's
            experience in a written statement extolling the integrity of a
            product or services.
          </p>
          <Link to='/testimonials'>
            <button className='bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 shadow-md'>
              Post Your Testimonials
            </button>
          </Link>
        </div>
      </section>

      {/* Quick Enquiry Form */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>
            Quick Enquiry
          </h2>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto'>
            {/* Image Section */}
            <div className='lg:w-1/2 w-full'>
              <div className='rounded-lg overflow-hidden shadow-xl'>
                <img
                  src='/images/products/enquiry.png'
                  alt='Enquiry'
                  className='w-full h-64 lg:h-96 object-cover transition-transform duration-300 hover:scale-105'
                />
              </div>
            </div>

            {/* Form Section */}
            <div className='lg:w-1/2 w-full'>
              <form className='space-y-6 bg-white p-6 rounded-xl shadow-md'>
                {/* Product Input */}
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Product / Service Looking for{' '}
                    <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    placeholder='E.g. Clove, Granite, Flax Seeds...'
                    className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 hover:bg-white'
                    required
                  />
                </div>

                {/* Country Dropdown */}
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Select Country <span className='text-red-500'>*</span>
                  </label>
                  <select
                    className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 hover:bg-white'
                    required
                  >
                    <option value=''>-- Select Country --</option>
                    {countries.map((c, idx) => (
                      <option key={idx} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Email */}
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Your Name <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='text'
                      placeholder='John Doe'
                      className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 hover:bg-white'
                      required
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Email <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='email'
                      placeholder='john@example.com'
                      className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 hover:bg-white'
                      required
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
                    placeholder='+91 98765 43210'
                    className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 hover:bg-white'
                    required
                  />
                </div>

                {/* Enquiry Details */}
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Message <span className='text-red-500'>*</span>
                  </label>
                  <textarea
                    placeholder='Please provide details about your requirements...'
                    rows={5}
                    className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-green-500 focus:outline-none transition-colors bg-gray-50 hover:bg-white resize-none'
                  />
                </div>

                {/* Submit */}
                <button
                  type='submit'
                  className='w-full bg-gradient-to-r from-green-700 to-green-600 text-white py-4 rounded-xl font-semibold hover:from-green-800 hover:to-green-700 transition-all shadow-lg hover:shadow-xl'
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
