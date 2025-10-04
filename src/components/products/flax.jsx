import React, { useState } from 'react';

export default function Flax() {
  const phone = '+91 88866 68873'; // replace with actual number
  const email = 'neoenterprises1979@gmail.com'; // replace with actual email

  const [form, setForm] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    mobile: '',
    quantity: '',
    container: '',
    purpose: 'Reselling',
    requirement: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Flax Seeds enquiry:', form);
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
    });
  }

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
      title: 'Natural Granite',
      href: '/products/granite',
      img: '/images/products/granite.png',
    },
  ];

  return (
    <div className='min-h-screen bg-green-50 py-10 px-4'>
      <div className='max-w-6xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden'>
        <div className='md:flex'>
          {/* Left: Image */}
          <div className='md:w-1/2 w-full overflow-hidden'>
            <img
              src='/images/products/flax-seeds.png'
              alt='Flax Seeds'
              className='w-full h-full object-cover md:h-[400px] transform transition-transform duration-500 hover:scale-110 cursor-pointer'
            />
          </div>

          {/* Right: Details */}
          <div className='md:w-1/2 w-full p-8'>
            <h1 className='text-2xl font-semibold text-green-900'>
              Flax Seeds
            </h1>
            <p className='text-sm text-gray-600 mt-2'>
              Premium quality Flax Seeds (Linseed)
            </p>

            {/* Product Info */}
            <div className='mt-6 grid grid-cols-2 gap-4 text-sm'>
              <div>
                <p className='text-gray-500'>Quantity</p>
                <p className='font-medium'>Available on Request</p>
              </div>
              <div>
                <p className='text-gray-500'>Container</p>
                <p className='font-medium'>20 ft / Bulk</p>
              </div>
              <div>
                <p className='text-gray-500'>Business Type</p>
                <p className='font-medium'>Manufacturer, Exporter, Supplier</p>
              </div>
              <div>
                <p className='text-gray-500'>Color</p>
                <p className='font-medium'>Golden Brown</p>
              </div>
              <div>
                <p className='text-gray-500'>Packaging Type</p>
                <p className='font-medium'>PP Bags / Jute Bags</p>
              </div>
              <div>
                <p className='text-gray-500'>Country of Origin</p>
                <p className='font-medium'>India</p>
              </div>
            </div>

            {/* Call/Enquiry */}
            <div className='mt-6 flex gap-3'>
              <a
                href={`tel:${phone}`}
                className='inline-block flex-1 text-center py-3 rounded-lg border border-green-700 bg-green-600 text-white font-semibold'
              >
                Request to Call
              </a>
              <a
                href={`mailto:${email}?subject=Enquiry%20-%20Flax%20Seeds`}
                className='inline-block flex-1 text-center py-3 rounded-lg border border-green-600 text-green-700 font-semibold'
              >
                Send Enquiry
              </a>
            </div>
          </div>
        </div>

        {/* Product Details - Full Width Section */}
        <div className='p-8 border-t bg-gray-50'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl font-semibold text-green-800 mb-6'>
              Product Details
            </h2>

            {/* Specifications Box */}
            <div className='bg-white p-8 border-2 border-gray-200 rounded-xl shadow-md mb-6'>
              <h3 className='text-lg font-semibold text-green-700 mb-4 pb-2 border-b border-gray-200'>
                Specifications
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 text-sm'>
                <div className='flex justify-between py-3 border-b border-gray-100'>
                  <span className='font-medium text-gray-600'>
                    Cultivation Type:
                  </span>
                  <span className='text-gray-800 text-right'>Natural</span>
                </div>
                <div className='flex justify-between py-3 border-b border-gray-100'>
                  <span className='font-medium text-gray-600'>
                    Fat (Omega-3):
                  </span>
                  <span className='text-gray-800 text-right'>40% (approx)</span>
                </div>
                <div className='flex justify-between py-3 border-b border-gray-100'>
                  <span className='font-medium text-gray-600'>Protein:</span>
                  <span className='text-gray-800 text-right'>18% (approx)</span>
                </div>
                <div className='flex justify-between py-3 border-b border-gray-100'>
                  <span className='font-medium text-gray-600'>
                    Crude Fiber:
                  </span>
                  <span className='text-gray-800 text-right'>6% Maximum</span>
                </div>
                <div className='flex justify-between py-3 border-b border-gray-100'>
                  <span className='font-medium text-gray-600'>
                    Physical Form:
                  </span>
                  <span className='text-gray-800 text-right'>
                    Whole seeds / Powder on request
                  </span>
                </div>
                <div className='flex justify-between py-3 border-b border-gray-100'>
                  <span className='font-medium text-gray-600'>Density:</span>
                  <span className='text-gray-800 text-right'>
                    0.70 gm/cc (approx)
                  </span>
                </div>
                <div className='flex justify-between py-3 border-b border-gray-100 md:border-b-0'>
                  <span className='font-medium text-gray-600'>
                    Container Size:
                  </span>
                  <span className='text-gray-800 text-right'>20 Feet</span>
                </div>
              </div>
            </div>

            {/* Applications Box */}
            <div className='bg-white p-8 border-2 border-gray-200 rounded-xl shadow-md mb-6'>
              <h3 className='text-lg font-semibold text-green-700 mb-4 pb-2 border-b border-gray-200'>
                Product Applications
              </h3>
              <ul className='space-y-4 text-sm text-gray-700'>
                <li className='flex gap-3'>
                  <span className='text-green-600 font-bold mt-1'>•</span>
                  <div>
                    <span className='font-semibold text-gray-800'>
                      Bakery & Confectionery:
                    </span>{' '}
                    Used in bread, cookies, muffins, and crackers to add crunch,
                    flavor, and nutritional value. Flax seeds are often
                    incorporated in gluten-free products.
                  </div>
                </li>
                <li className='flex gap-3'>
                  <span className='text-green-600 font-bold mt-1'>•</span>
                  <div>
                    <span className='font-semibold text-gray-800'>
                      Cereals & Breakfast Foods:
                    </span>{' '}
                    Commonly added to granola, muesli, and oats for enhanced
                    omega-3 and fiber intake.
                  </div>
                </li>
                <li className='flex gap-3'>
                  <span className='text-green-600 font-bold mt-1'>•</span>
                  <div>
                    <span className='font-semibold text-gray-800'>
                      Nutritional Supplements:
                    </span>{' '}
                    Rich in alpha-linolenic acid (ALA), making them a vital
                    component in dietary supplements and capsules.
                  </div>
                </li>
                <li className='flex gap-3'>
                  <span className='text-green-600 font-bold mt-1'>•</span>
                  <div>
                    <span className='font-semibold text-gray-800'>
                      Oil Extraction:
                    </span>{' '}
                    Source of flaxseed oil, widely used for culinary, cosmetic,
                    and medicinal purposes.
                  </div>
                </li>
                <li className='flex gap-3'>
                  <span className='text-green-600 font-bold mt-1'>•</span>
                  <div>
                    <span className='font-semibold text-gray-800'>
                      Animal Feed:
                    </span>{' '}
                    Added in livestock and poultry feed formulations to improve
                    health and enrich omega-3 content in animal products.
                  </div>
                </li>
                <li className='flex gap-3'>
                  <span className='text-green-600 font-bold mt-1'>•</span>
                  <div>
                    <span className='font-semibold text-gray-800'>
                      Functional Foods & Health Drinks:
                    </span>{' '}
                    Used in powders, smoothies, protein shakes, and energy bars
                    for boosting nutrition.
                  </div>
                </li>
                <li className='flex gap-3'>
                  <span className='text-green-600 font-bold mt-1'>•</span>
                  <div>
                    <span className='font-semibold text-gray-800'>
                      Pharmaceutical Applications:
                    </span>{' '}
                    Beneficial in formulations aimed at cardiovascular health,
                    digestive health, and weight management.
                  </div>
                </li>
              </ul>
            </div>

            {/* Packing, Storage, Shelf Life Box */}
            <div className='bg-white p-8 border-2 border-gray-200 rounded-xl shadow-md mb-6'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div>
                  <h3 className='text-lg font-semibold text-green-700 mb-3 pb-2 border-b border-gray-200'>
                    Packing
                  </h3>
                  <p className='text-sm text-gray-700'>
                    Available in 25 kg / 50 kg food-grade laminated PP bags, 500
                    kg jumbo bags, or as per buyer's customized requirements.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-green-700 mb-3 pb-2 border-b border-gray-200'>
                    Storage
                  </h3>
                  <p className='text-sm text-gray-700'>
                    Store in clean, dry, infestation-free places on pallets.
                    Keep away from direct sunlight and moisture to maintain
                    freshness.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-green-700 mb-3 pb-2 border-b border-gray-200'>
                    Shelf Life
                  </h3>
                  <p className='text-sm text-gray-700'>
                    12 months from the date of manufacturing when stored under
                    recommended conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className='text-center'>
              <button
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth',
                  })
                }
                className='py-4 px-10 rounded-lg bg-green-700 text-white font-semibold hover:bg-green-800 transition shadow-lg text-lg'
              >
                Yes! I am interested
              </button>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className='p-8 border-t'>
          <div className='max-w-4xl mx-auto'>
            <h3 className='text-xl font-semibold text-green-900'>
              Looking for "Flax Seeds" ?
            </h3>
            <form
              onSubmit={handleSubmit}
              className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'
            >
              <div>
                <label className='block text-sm text-gray-700'>Name</label>
                <input
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  required
                  className='mt-1 w-full rounded border px-3 py-2'
                />
              </div>
              <div>
                <label className='block text-sm text-gray-700'>Email</label>
                <input
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  type='email'
                  required
                  className='mt-1 w-full rounded border px-3 py-2'
                />
              </div>

              <div className='flex gap-2'>
                <div className='w-28'>
                  <label className='block text-sm text-gray-700'>
                    Mobile No.
                  </label>
                  <select
                    name='countryCode'
                    value={form.countryCode}
                    onChange={handleChange}
                    className='mt-1 w-full rounded border px-3 py-2'
                  >
                    <option>+91</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                </div>
                <div className='flex-1'>
                  <label className='block text-sm text-gray-700 hidden md:block'>
                    Enter Mobile No.
                  </label>
                  <input
                    name='mobile'
                    value={form.mobile}
                    onChange={handleChange}
                    required
                    className='mt-1 w-full rounded border px-3 py-2'
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm text-gray-700'>
                  Estimated Quantity
                </label>
                <input
                  name='quantity'
                  value={form.quantity}
                  onChange={handleChange}
                  className='mt-1 w-full rounded border px-3 py-2'
                />
              </div>

              <div>
                <label className='block text-sm text-gray-700'>Container</label>
                <input
                  name='container'
                  value={form.container}
                  onChange={handleChange}
                  placeholder='e.g. 20 ft'
                  className='mt-1 w-full rounded border px-3 py-2'
                />
              </div>

              <div>
                <label className='block text-sm text-gray-700'>
                  Purpose of Requirement
                </label>
                <select
                  name='purpose'
                  value={form.purpose}
                  onChange={handleChange}
                  className='mt-1 w-full rounded border px-3 py-2'
                >
                  <option>Reselling</option>
                  <option>End Use</option>
                </select>
              </div>

              <div className='md:col-span-2'>
                <label className='block text-sm text-gray-700'>
                  Requirement Details
                </label>
                <textarea
                  name='requirement'
                  value={form.requirement}
                  onChange={handleChange}
                  rows={4}
                  className='mt-1 w-full rounded border px-3 py-2'
                >
                  I am interested. Kindly send the quotation for the same.
                </textarea>
              </div>

              <div className='md:col-span-2 text-right'>
                <button
                  type='submit'
                  className='py-2 px-6 rounded bg-green-700 text-white font-semibold'
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Explore More Products */}
        <div className='p-8 border-t'>
          <h3 className='text-xl font-semibold text-green-900 mb-4'>
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
                    <span className='text-xs text-green-700 font-semibold'>
                      Get Best Quote
                    </span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-green-700'
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
  );
}
