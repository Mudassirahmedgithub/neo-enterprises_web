import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

export default function Products() {
  return (
    <div className='font-sans text-gray-800 bg-gray-50'>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-br from-green-900 via-green-800 to-green-950 py-24 px-6 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl'></div>
          <div className='absolute bottom-10 right-20 w-96 h-96 bg-green-400 rounded-full blur-3xl'></div>
        </div>
        <div className='container mx-auto text-center relative z-10'>
          <h1 className='text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight'>
            Our Products
          </h1>
          <p className='text-xl text-green-100 max-w-3xl mx-auto leading-relaxed'>
            Delivering premium quality, trusted worldwide
          </p>
        </div>
      </div>

      {/* Products Grid Section */}
      <section className='container mx-auto py-12 px-6'>
        <h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>
          Explore Our Range
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {products.map((product, idx) => (
            <Link
              to={product.link}
              key={idx}
              className='block border rounded-xl shadow hover:shadow-lg transition bg-white overflow-hidden'
            >
              <img
                src={product.img}
                alt={product.name}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-gray-800'>
                  {product.name}
                </h3>
                <p className='text-gray-600 text-sm mt-2'>{product.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
