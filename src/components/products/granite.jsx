import React from 'react';
import { Link } from 'react-router-dom';

const graniteCategories = [
  {
    name: 'Neo Chocolate Lapotra',
    img: '/images/products/chocolata-lapota1.JPG',
    link: '/products/granite/NeoChocolate',
    desc: 'Rich chocolate tone with subtle texture and premium finish.',
  },
  {
    name: 'Neo Tiger Shade',
    img: '/images/products/tiger1.JPG',
    link: '/products/granite/NeoTigerShade',
    desc: 'Distinctive tiger pattern granite that adds boldness to interiors.',
  },
  {
    name: 'Neo Tomato Red',
    img: '/images/products/tomato-red.JPG',
    link: '/products/granite/NeoTomato',
    desc: 'Vibrant red granite perfect for statement designs.',
  },
  {
    name: 'Neo Galaxy Black',
    img: '/images/products/black_shade1.JPG',
    link: '/products/granite/NeoGalaxy',
    desc: 'Elegant black granite with shimmering silver specks.',
  },
  {
    name: 'Neo K Tize',
    img: '/images/products/k_tize1.JPG',
    link: '/products/granite/NeokTize',
    desc: 'Stylish modern granite with a unique speckled texture.',
  },
  {
    name: 'Star Blue',
    img: '/images/products/star_blue1.JPG',
    link: '/products/granite/StarBlue',
    desc: 'Deep blue granite that radiates sophistication and depth.',
  },
  {
    name: 'Neo Tan Blue',
    img: '/images/products/tan_blue1.JPG',
    link: '/products/granite/NeoTanBlue',
    desc: 'Soft bluish-tan granite ideal for calm and elegant spaces.',
  },
  {
    name: 'Neo Tan Red',
    img: '/images/products/tan_red1.JPG',
    link: '/products/granite/NeoTanRed',
    desc: 'Warm reddish granite offering a timeless natural appeal.',
  },
];

export default function GranitePage() {
  return (
    <div className='font-sans text-gray-800 bg-gray-50'>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-br from-gray-800 via-gray-700 to-black py-24 px-6 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl'></div>
          <div className='absolute bottom-10 right-20 w-96 h-96 bg-gray-400 rounded-full blur-3xl'></div>
        </div>
        <div className='container mx-auto text-center relative z-10'>
          <h1 className='text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight'>
            Granite Collection
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed'>
            Explore our finest granite selections — strength meets elegance.
          </p>
        </div>
      </div>

      {/* Granite Categories Grid */}
      <section className='container mx-auto py-12 px-6'>
        <h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>
          Explore Our Granite Range
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {graniteCategories.map((item, idx) => (
            <Link
              to={item.link}
              key={idx}
              className='block border rounded-xl shadow hover:shadow-lg transition bg-white overflow-hidden'
            >
              <img
                src={item.img}
                alt={item.name}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-gray-800'>
                  {item.name}
                </h3>
                <p className='text-gray-600 text-sm mt-2'>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
