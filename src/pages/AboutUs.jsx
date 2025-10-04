import React from 'react';

export default function About() {
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
            About Us
          </h1>
          <p className='text-xl text-green-100 max-w-3xl mx-auto leading-relaxed'>
            Building bridges between quality products and global markets since
            2022
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className='container mx-auto px-6 py-20'>
        <div className='max-w-4xl mx-auto'>
          <div className='inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
            Our Story
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight'>
            A Journey of Quality & Trust
          </h2>

          <div className='space-y-6 text-lg text-gray-700 leading-relaxed'>
            <p>
              Founded in 2022, <strong>NEO ENTERPRISES PRIVATE LIMITED</strong>{' '}
              has rapidly established itself as a trusted name in manufacturing,
              supplying, and exporting premium natural stones and agricultural
              products. Our commitment to excellence has positioned us as a
              preferred partner for businesses worldwide.
            </p>

            <p>
              Our diverse portfolio spans{' '}
              <strong>Natural Stone's (Granites)</strong> including Neo
              Chocolate Lapotra, Neo Tiger Shade, Neo Tomato Red, Neo Galaxy
              Black, and more—alongside premium{' '}
              <strong>spices and agricultural products</strong> like Clove,
              Cardamom, Black Pepper, Flax Seeds, Soyabean products, and
              Makhana.
            </p>

            <p>
              Every product we offer is sourced with meticulous care and
              manufactured using modern technology under the guidance of our
              experienced team. This ensures that each item meets rigorous
              international quality standards, delivering reliability and
              authenticity to our global clientele.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='bg-white py-16 px-6 border-y border-gray-200'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div className='group'>
              <div className='text-5xl font-bold text-green-800 mb-2 group-hover:scale-110 transition-transform'>
                2022
              </div>
              <div className='text-gray-600 font-medium'>Established</div>
            </div>
            <div className='group'>
              <div className='text-5xl font-bold text-green-800 mb-2 group-hover:scale-110 transition-transform'>
                60+
              </div>
              <div className='text-gray-600 font-medium'>Team Members</div>
            </div>
            <div className='group'>
              <div className='text-5xl font-bold text-green-800 mb-2 group-hover:scale-110 transition-transform'>
                8+
              </div>
              <div className='text-gray-600 font-medium'>Product Lines</div>
            </div>
            <div className='group'>
              <div className='text-5xl font-bold text-green-800 mb-2 group-hover:scale-110 transition-transform'>
                ∞
              </div>
              <div className='text-gray-600 font-medium'>Global Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className='container mx-auto py-20 px-6'>
        <div className='text-center mb-16'>
          <div className='inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
            Leadership
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Visionary Leadership
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Guided by experience, driven by excellence
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          {/* CEO */}
          <div className='bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow'>
            <div className='h-64 bg-gradient-to-br from-green-700 to-green-900 relative'>
              <img
                src='/images/products/ceo.jpg'
                alt='Mr. M.A. Wahed Nawaz'
                className='w-48 h-48 object-cover rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-8 border-white shadow-lg'
              />
            </div>
            <div className='pt-32 pb-8 px-8 text-center'>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                Mr. M.A. Wahed Nawaz
              </h3>
              <p className='text-green-800 font-semibold text-lg mb-6'>
                Chief Executive Officer
              </p>
              <div className='text-left space-y-3 text-gray-700'>
                <div className='flex items-start'>
                  <span className='text-green-600 mr-3 mt-1'>✦</span>
                  <span>
                    Expert in international trade and business networking
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-green-600 mr-3 mt-1'>✦</span>
                  <span>
                    Develops strong supplier-buyer relationships globally
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-green-600 mr-3 mt-1'>✦</span>
                  <span>
                    Expanding Neo Enterprises into international markets
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-green-600 mr-3 mt-1'>✦</span>
                  <span>Building trust through long-term partnerships</span>
                </div>
              </div>
            </div>
          </div>

          {/* Managing Director */}
          <div className='bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow'>
            <div className='h-64 bg-gradient-to-br from-green-700 to-green-900 relative'>
              <img
                src='/images/products/director.jpg'
                alt='Mr. Shaik Mazharuddin'
                className='w-48 h-48 object-cover rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-8 border-white shadow-lg'
              />
            </div>
            <div className='pt-32 pb-8 px-8 text-center'>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                Mr. Shaik Mazharuddin
              </h3>
              <p className='text-green-800 font-semibold text-lg mb-6'>
                Managing Director
              </p>
              <div className='text-left space-y-3 text-gray-700'>
                <div className='flex items-start'>
                  <span className='text-green-600 mr-3 mt-1'>✦</span>
                  <span>Specialist in premium granites and agro products</span>
                </div>
                <div className='flex items-start'>
                  <span className='text-green-600 mr-3 mt-1'>✦</span>
                  <span>Expert in operations and supply chain management</span>
                </div>
                <div className='flex items-start'>
                  <span className='text-green-600 mr-3 mt-1'>✦</span>
                  <span>Ensures product quality and timely delivery</span>
                </div>
                <div className='flex items-start'>
                  <span className='text-green-600 mr-3 mt-1'>✦</span>
                  <span>Connecting Indian products to world markets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className='bg-green-900 text-white py-16 px-6'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-12 text-center'>
            Company Information
          </h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            <div className='text-center p-6 bg-white/10 rounded-xl backdrop-blur'>
              <h3 className='font-bold text-lg mb-2 text-green-300'>
                Nature of Business
              </h3>
              <p className='text-green-50'>
                Manufacturers, Supplier, Exporters
              </p>
            </div>
            <div className='text-center p-6 bg-white/10 rounded-xl backdrop-blur'>
              <h3 className='font-bold text-lg mb-2 text-green-300'>
                Team Size
              </h3>
              <p className='text-green-50'>60 Employees</p>
            </div>
            <div className='text-center p-6 bg-white/10 rounded-xl backdrop-blur'>
              <h3 className='font-bold text-lg mb-2 text-green-300'>
                Established
              </h3>
              <p className='text-green-50'>2022</p>
            </div>
            <div className='text-center p-6 bg-white/10 rounded-xl backdrop-blur'>
              <h3 className='font-bold text-lg mb-2 text-green-300'>
                Market Coverage
              </h3>
              <p className='text-green-50'>Worldwide</p>
            </div>
            <div className='text-center p-6 bg-white/10 rounded-xl backdrop-blur'>
              <h3 className='font-bold text-lg mb-2 text-green-300'>
                Founders
              </h3>
              <p className='text-green-50'>Mr. Wahed Nawaz and Brothers</p>
            </div>
            <div className='text-center p-6 bg-white/10 rounded-xl backdrop-blur'>
              <h3 className='font-bold text-lg mb-2 text-green-300'>
                Legal Status
              </h3>
              <p className='text-green-50'>Private Limited Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className='bg-gradient-to-b from-gray-50 to-white py-20 px-6'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
              Our Products
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Premium Product Range
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Discover our carefully curated selection of natural stones and
              agricultural products
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                name: "Natural Stone's (Granites)",
                img: '/images/products/granite.png',
                link: '/products/granite',
              },
              {
                name: 'Clove',
                img: '/images/products/clove.png',
                link: '/products/clove',
              },
              {
                name: 'Cardamom',
                img: '/images/products/cardamom.png',
                link: '/products/cardomon',
              },
              {
                name: 'Black Pepper',
                img: '/images/products/blackPepper.png',
                link: '/products/blackPepper',
              },
              {
                name: 'Flax Seeds',
                img: '/images/products/flax-seeds.png',
                link: '/products/flax',
              },
              {
                name: 'Soyabean Flakes',
                img: '/images/products/SoyabeanFlakes.png',
                link: '/products/Soyabeen',
              },
              {
                name: 'Soyabean Meal',
                img: '/images/products/SoyabeanMeal.png',
                link: '/products/soyabeanMeal',
              },
              {
                name: 'Makhana',
                img: '/images/products/lotusSeeds.png',
                link: '/products/lotusSeeds',
              },
            ].map((product, idx) => (
              <a
                key={idx}
                href={product.link}
                className='group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
              >
                <div className='h-56 bg-gray-100 overflow-hidden relative'>
                  <img
                    src={product.img}
                    alt={product.name}
                    className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                </div>
                <div className='p-6'>
                  <h4 className='font-bold text-lg text-gray-900 group-hover:text-green-800 transition-colors'>
                    {product.name}
                  </h4>
                  <p className='text-sm text-green-700 font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                    Explore →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
