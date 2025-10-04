// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const location = useLocation();

  const products = [
    { name: 'Granites', path: '/products/granite' },
    { name: 'Clove', path: '/products/clove' },
    { name: 'Cardamom', path: '/products/cardomon' },
    { name: 'Black Pepper (Kali Mirch)', path: '/products/blackPepper' },
    { name: 'Flax Seeds', path: '/products/flax' },
    { name: 'Soyabean Flakes', path: '/products/soyabeen' },
    { name: 'Soyabean Meal', path: '/products/soyabeanMeal' },
    { name: 'Makhana (Lotus Seeds)', path: '/products/lotusSeeds' },
  ];

  // Check if current path matches
  const isActive = (path) => location.pathname === path;
  const isProductsActive = () => location.pathname.startsWith('/products');

  // Handle dropdown open/close with delay for desktop
  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setOpen(false);
    }, 250);
    setTimeoutId(id);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <>
      {/* Fixed Header */}
      <header className='fixed top-0 left-0 right-0 bg-white shadow-md z-50'>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16 md:h-20'>
            {/* Logo + Brand */}
            {/* Logo + Brand */}
            <Link
              to='/'
              className='flex items-center space-x-2 sm:space-x-3 flex-shrink-0'
            >
              <img
                src='/images/products/logo1.png'
                alt='Neo Enterprises Logo'
                className='h-12 sm:h-16 w-auto object-contain'
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center space-x-8'>
              <Link
                to='/'
                className={`relative pb-1 font-medium transition-colors duration-200 ${
                  isActive('/')
                    ? 'text-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Home
                {isActive('/') && (
                  <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-green-600'></span>
                )}
              </Link>

              {/* Products dropdown */}
              <div
                className='relative'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to='/products'
                  className={`flex items-center space-x-1 pb-1 font-medium transition-colors duration-200 ${
                    isProductsActive()
                      ? 'text-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                  />
                </Link>
                {isProductsActive() && (
                  <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-green-600'></span>
                )}

                {open && (
                  <div className='absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden'>
                    <ul className='py-2'>
                      {products.map((product) => (
                        <li key={product.path}>
                          <Link
                            to={product.path}
                            className={`block px-4 py-2.5 transition-colors duration-150 ${
                              isActive(product.path)
                                ? 'bg-green-50 text-green-700 font-medium'
                                : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                            }`}
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Link
                to='/about'
                className={`relative pb-1 font-medium transition-colors duration-200 ${
                  isActive('/about')
                    ? 'text-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                About
                {isActive('/about') && (
                  <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-green-600'></span>
                )}
              </Link>

              <Link
                to='/contact'
                className={`relative pb-1 font-medium transition-colors duration-200 ${
                  isActive('/contact')
                    ? 'text-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Contact
                {isActive('/contact') && (
                  <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-green-600'></span>
                )}
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none'
              aria-label='Toggle menu'
            >
              {mobileMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className='md:hidden py-4 border-t border-gray-200'>
              <nav className='flex flex-col space-y-1'>
                <Link
                  to='/'
                  onClick={closeMobileMenu}
                  className={`px-4 py-3 rounded-lg transition-colors duration-200 font-medium ${
                    isActive('/')
                      ? 'bg-green-50 text-green-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Home
                  {isActive('/') && (
                    <span className='block w-full h-0.5 bg-green-600 mt-1'></span>
                  )}
                </Link>

                {/* Mobile Products Accordion */}
                <div>
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 font-medium focus:outline-none ${
                      isProductsActive()
                        ? 'bg-green-50 text-green-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>Products</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isProductsActive() && (
                    <span className='block w-full h-0.5 bg-green-600 mt-1 px-4'></span>
                  )}

                  {mobileProductsOpen && (
                    <div className='mt-1 ml-4 space-y-1'>
                      {products.map((product) => (
                        <Link
                          key={product.path}
                          to={product.path}
                          onClick={closeMobileMenu}
                          className={`block px-4 py-2.5 text-sm rounded-lg transition-colors duration-200 ${
                            isActive(product.path)
                              ? 'bg-green-100 text-green-700 font-medium'
                              : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                          }`}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to='/about'
                  onClick={closeMobileMenu}
                  className={`px-4 py-3 rounded-lg transition-colors duration-200 font-medium ${
                    isActive('/about')
                      ? 'bg-green-50 text-green-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  About
                  {isActive('/about') && (
                    <span className='block w-full h-0.5 bg-green-600 mt-1'></span>
                  )}
                </Link>

                <Link
                  to='/contact'
                  onClick={closeMobileMenu}
                  className={`px-4 py-3 rounded-lg transition-colors duration-200 font-medium ${
                    isActive('/contact')
                      ? 'bg-green-50 text-green-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Contact
                  {isActive('/contact') && (
                    <span className='block w-full h-0.5 bg-green-600 mt-1'></span>
                  )}
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className='h-16 md:h-20'></div>
    </>
  );
}
