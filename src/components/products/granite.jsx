import React, { useState } from 'react';

export default function Granite() {
  const phone = '+91 88866 68873';
  const email = 'neoenterprises1979@gmail.com';

  const [form, setForm] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    mobile: '',
    quantity: '',
    container: '',
    purpose: 'Reselling',
    requirement: '',
    graniteType: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Granite enquiry:', form);
    alert('Thank you! Your enquiry has been submitted.');
    setForm({
      name: '',
      email: '',
      countryCode: '+91',
      mobile: '',
      quantity: '',
      container: '',
      purpose: 'Reselling',
      requirement: '',
      graniteType: '',
    });
  }

  const graniteTypes = [
    {
      title: 'Neo Chocolate Lapotra',
      img: '/images/products/chocolata-lapota.JPG',
    },
    { title: 'Neo Tiger Shade', img: '/images/products/tiger.JPG' },
    { title: 'Neo Tomato Red', img: '/images/products/tomato-red.JPG' },
    { title: 'Neo Galaxy Black', img: '/images/products/black_shade.JPG' },
    { title: 'Neo K Tize', img: '/images/products/k_tize.JPG' },
    { title: 'Star Blue', img: '/images/products/star_blue.JPG' },
    { title: 'Neo Tan Blue', img: '/images/products/tan_blue.JPG' },
    { title: 'Neo Tan Red', img: '/images/products/tan_red.JPG' },
  ];

  const moreProducts = [
    {
      title: 'Soyabean Flakes',
      href: '/products/Soyabeen',
      img: '/images/products/SoyabeanFlakes.png',
    },
    {
      title: 'Soyabean Meals',
      href: '/products/soyabeanMeal',
      img: '/images/products/SoyabeanMeal.png',
    },
    {
      title: 'Black Pepper',
      href: '/products/blackPepper',
      img: '/images/products/blackPepper.png',
    },
    {
      title: 'Clove',
      href: '/products/clove',
      img: '/images/products/clove.png',
    },
    {
      title: 'Cardamom',
      href: '/products/cardomon',
      img: '/images/products/cardamom.png',
    },
    {
      title: 'Makhana',
      href: '/products/lotusSeeds',
      img: '/images/products/lotusSeeds.png',
    },
    {
      title: 'Flax Seeds',
      href: '/products/flax',
      img: '/images/products/flax-seeds.png',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50 py-10 px-4'>
      <div className='max-w-6xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden'>
        {/* --- Product Header --- */}
        <div className='md:flex'>
          <div className='md:w-1/2 w-full overflow-hidden'>
            <img
              src='/images/products/Granite1.jpg'
              alt='Natural Granite'
              className='w-full h-full object-cover md:h-[400px] transform transition-transform duration-500 hover:scale-110 cursor-pointer'
            />
          </div>

          <div className='md:w-1/2 w-full p-8'>
            <h1 className='text-2xl font-semibold text-gray-900'>
              Natural Granite
            </h1>
            <p className='text-sm text-gray-600 mt-2'>
              Premium quality Granite slabs and tiles for architectural and
              interior excellence.
            </p>

            <div className='mt-6 grid grid-cols-2 gap-4 text-sm'>
              <div>
                <p className='text-gray-500'>Stone Type</p>
                <p className='font-medium'>Granite</p>
              </div>
              <div>
                <p className='text-gray-500'>Surface Finishing</p>
                <p className='font-medium'>Polished (High Gloss)</p>
              </div>
              <div>
                <p className='text-gray-500'>Application</p>
                <p className='font-medium'>
                  Floor, Countertop, Facade, Kitchen
                </p>
              </div>
              <div>
                <p className='text-gray-500'>Country of Origin</p>
                <p className='font-medium'>Telangana, India</p>
              </div>
              <div>
                <p className='text-gray-500'>Brand</p>
                <p className='font-medium'>NEO ENTERPRISES</p>
              </div>
              <div>
                <p className='text-gray-500'>Lead Time</p>
                <p className='font-medium'>20 days (&lt;400 sqm)</p>
              </div>
            </div>

            <div className='mt-6 flex gap-3'>
              <a
                href={`tel:${phone}`}
                className='inline-block flex-1 text-center py-3 rounded-lg border border-gray-700 bg-gray-800 text-white font-semibold'
              >
                Request Quote
              </a>
              <a
                href={`mailto:${email}?subject=Enquiry%20-%20Granite`}
                className='inline-block flex-1 text-center py-3 rounded-lg border border-gray-700 text-gray-800 font-semibold'
              >
                Send Enquiry
              </a>
            </div>
          </div>
        </div>

        {/* --- Product Details --- */}
        <div className='p-8 border-t bg-gray-50'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
            Product Details
          </h2>

          <div className='bg-white p-8 border-2 border-gray-200 rounded-xl shadow-md mb-6'>
            <h3 className='text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200'>
              Specifications
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-sm'>
              <div className='flex justify-between py-2 border-b border-gray-100'>
                <span className='font-medium text-gray-600'>
                  Surface Finishing:
                </span>
                <span className='text-gray-800 text-right'>
                  Polished (High Gloss)
                </span>
              </div>
              <div className='flex justify-between py-2 border-b border-gray-100'>
                <span className='font-medium text-gray-600'>Application:</span>
                <span className='text-gray-800 text-right'>
                  Floor, Countertop, Building Facade, Hotel, Apartment,
                  Hospital, School, Kitchen, Staircase, Wall Cladding
                </span>
              </div>
              <div className='flex justify-between py-2 border-b border-gray-100'>
                <span className='font-medium text-gray-600'>Thickness:</span>
                <span className='text-gray-800 text-right'>17mm</span>
              </div>
              <div className='flex justify-between py-2 border-b border-gray-100'>
                <span className='font-medium text-gray-600'>Sizes:</span>
                <span className='text-gray-800 text-right'>
                  Slabs 240x120 cm, Tiles 60x60 cm, 60x30 cm, Custom Sizes
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* --- Granite Types Showcase --- */}
          <div className='bg-white p-8 border-2 border-gray-200 rounded-xl shadow-md mb-6'>
            <h3 className='text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200'>
              Available Granite Types
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
              {graniteTypes.map((g) => (
                <div
                  key={g.title}
                  className='text-center border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-gray-50'
                >
                  <img
                    src={g.img}
                    alt={g.title}
                    className='w-full h-32 object-cover'
                  />
                  <div className='p-3'>
                    <h4 className='font-medium text-gray-800'>{g.title}</h4>
                    <a
                      href={`mailto:${email}?subject=Enquiry%20-%20${encodeURIComponent(g.title)}%20Granite`}
                      className='mt-2 inline-block text-sm font-semibold text-gray-700 border border-gray-700 rounded px-3 py-1 hover:bg-gray-700 hover:text-white transition'
                    >
                      Request Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Enquiry Form (Integrated) --- */}
          <div className='p-8 border-t bg-white rounded-xl shadow-md'>
            <div className='max-w-4xl mx-auto'>
              <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                Send an Enquiry for Granite
              </h3>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Select Granite Type <span className='text-red-500'>*</span>
                  </label>
                  <select
                    name='graniteType'
                    value={form.graniteType}
                    onChange={handleChange}
                    required
                    className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-gray-800 focus:outline-none bg-gray-50 hover:bg-white'
                  >
                    <option value=''>-- Select Granite Type --</option>
                    {graniteTypes.map((g, idx) => (
                      <option key={idx} value={g.title}>
                        {g.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Name
                    </label>
                    <input
                      name='name'
                      value={form.name}
                      onChange={handleChange}
                      required
                      className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-gray-800 focus:outline-none bg-gray-50 hover:bg-white'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Email
                    </label>
                    <input
                      name='email'
                      type='email'
                      value={form.email}
                      onChange={handleChange}
                      required
                      className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-gray-800 focus:outline-none bg-gray-50 hover:bg-white'
                    />
                  </div>
                </div>

                <div className='flex gap-2'>
                  <div className='w-28'>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Code
                    </label>
                    <select
                      name='countryCode'
                      value={form.countryCode}
                      onChange={handleChange}
                      className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-gray-800 focus:outline-none bg-gray-50 hover:bg-white'
                    >
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                  </div>
                  <div className='flex-1'>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Mobile No.
                    </label>
                    <input
                      name='mobile'
                      value={form.mobile}
                      onChange={handleChange}
                      required
                      className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-gray-800 focus:outline-none bg-gray-50 hover:bg-white'
                    />
                  </div>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Estimated Quantity
                    </label>
                    <input
                      name='quantity'
                      value={form.quantity}
                      onChange={handleChange}
                      className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-gray-800 focus:outline-none bg-gray-50 hover:bg-white'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                      Container
                    </label>
                    <input
                      name='container'
                      value={form.container}
                      onChange={handleChange}
                      placeholder='e.g. 20 ft'
                      className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-gray-800 focus:outline-none bg-gray-50 hover:bg-white'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Purpose
                  </label>
                  <select
                    name='purpose'
                    value={form.purpose}
                    onChange={handleChange}
                    className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-gray-800 focus:outline-none bg-gray-50 hover:bg-white'
                  >
                    <option>Reselling</option>
                    <option>End Use</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Requirement Details
                  </label>
                  <textarea
                    name='requirement'
                    value={form.requirement}
                    onChange={handleChange}
                    rows={4}
                    placeholder='I am interested. Kindly send the quotation for the same.'
                    className='w-full border-2 border-gray-200 p-3.5 rounded-xl focus:border-gray-800 focus:outline-none bg-gray-50 hover:bg-white resize-none'
                  />
                </div>

                <div className='text-right'>
                  <button
                    type='submit'
                    className='py-3 px-10 rounded-xl bg-gray-800 text-white font-semibold hover:bg-black transition shadow-lg'
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* --- Explore More --- */}
          <div className='p-8 border-t'>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>
              Explore More Products
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
              {moreProducts.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  className='group bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md'
                >
                  <div className='h-32 w-full overflow-hidden'>
                    <img
                      src={p.img}
                      alt={p.title}
                      className='w-full h-full object-cover transform group-hover:scale-105 transition'
                    />
                  </div>
                  <div className='p-3'>
                    <h4 className='text-sm font-medium text-gray-800'>
                      {p.title}
                    </h4>
                    <div className='mt-2 flex justify-between items-center'>
                      <span className='text-xs text-gray-800 font-semibold'>
                        Get Best Quote
                      </span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 text-gray-800'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
