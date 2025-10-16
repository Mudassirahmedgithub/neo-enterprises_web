import React, { useState } from 'react';
// Place this ABOVE your component
import { countryCodes } from '@/utils/countryCodes';

export async function submitForm(formType, formData, setStatus, resetForm) {
  setStatus({ loading: true, success: null, error: null });

  try {
    const res = await fetch('http://localhost:3001/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formType, formData }),
    });

    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error('Server returned invalid JSON. Check backend route.');
    }

    if (data.success) {
      setStatus({
        loading: false,
        success: 'Form submitted successfully!',
        error: null,
      });
      resetForm();
    } else {
      throw new Error(data.message || 'Submission failed');
    }
  } catch (err) {
    console.error('Form submission error:', err);
    setStatus({
      loading: false,
      success: null,
      error: err.message || 'Something went wrong while submitting.',
    });
  }
}
// Now your component starts below

export default function Clove() {
  const phone = '+91 88866 68873';
  const email = 'neoenterprises1979@gmail.com';

  const [form, setForm] = useState({
    name: '',
    email: '',
    countryCode: '91',
    mobile: '',
    quantity: '',
    container: '',
    purpose: 'Reselling',
    requirement: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      ...form,
      mobile: `${form.countryCode} ${form.mobile}`,
    };
    submitForm('LotusEnquiry', formData, setStatus, () =>
      setForm({
        name: '',
        email: '',
        countryCode: '91',
        mobile: '',
        quantity: '',
        container: '',
        purpose: 'Reselling',
        requirement: '',
      })
    );
  };

  const moreProducts = [
    {
      title: 'Flax Seeds',
      href: '/products/flax',
      img: '/images/products/flax-seeds.png',
    },
    {
      title: 'Soyabean Flakes',
      href: '/products/Soyabeen',
      img: '/images/products/SoyabeanFlakes.png',
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
              src='/images/products/lotusSeeds.png'
              alt='Makhana (Fox Nuts)'
              className='w-full h-full object-cover md:h-[400px] transform transition-transform duration-500 hover:scale-110 cursor-pointer'
            />
          </div>

          {/* Right: Details */}
          <div className='md:w-1/2 w-full p-8'>
            <h1 className='text-2xl font-semibold text-green-900'>
              Makhana (Fox Nuts)
            </h1>
            <p className='text-sm text-gray-600 mt-2'>
              Premium Quality Indian Fox Nuts — Graded, Sorted, and Export Ready
            </p>

            {/* Product Info */}
            <div className='mt-6 grid grid-cols-2 gap-4 text-sm'>
              <div>
                <p className='text-gray-500'>Availability</p>
                <p className='font-medium'>All Year (Bulk Orders)</p>
              </div>
              <div>
                <p className='text-gray-500'>Container</p>
                <p className='font-medium'>20 ft / 40 ft / Bulk</p>
              </div>
              <div>
                <p className='text-gray-500'>Business Type</p>
                <p className='font-medium'>Manufacturer, Exporter, Supplier</p>
              </div>
              <div>
                <p className='text-gray-500'>Origin</p>
                <p className='font-medium'>Bihar, India</p>
              </div>
              <div>
                <p className='text-gray-500'>Packaging Type</p>
                <p className='font-medium'>PP Bags / Jute Bags / Custom</p>
              </div>
              <div>
                <p className='text-gray-500'>Moisture Content</p>
                <p className='font-medium'>&lt; 12%</p>
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
                href={`mailto:${email}?subject=Enquiry%20-%20Makhana%20(Fox%20Nuts)`}
                className='inline-block flex-1 text-center py-3 rounded-lg border border-green-600 text-green-700 font-semibold'
              >
                Send Enquiry
              </a>
            </div>
          </div>
        </div>

        {/* Categorization Section */}
        <div className='p-8 border-t bg-gray-50'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl font-semibold text-green-800 mb-6'>
              Makhana (Fox Nuts) – Categorization
            </h2>

            {/* 1. By Quality / Grade */}
            <div className='bg-white p-8 border-2 border-gray-200 rounded-xl shadow-md mb-6'>
              <h3 className='text-lg font-semibold text-green-700 mb-4 pb-2 border-b border-gray-200'>
                1. By Quality / Grade
              </h3>

              {/* Premium Quality */}
              <div className='mb-6'>
                <h4 className='font-semibold text-green-800 mb-2'>
                  Premium Quality
                </h4>
                <ul className='list-disc list-inside text-gray-700 text-sm space-y-1'>
                  <li>Premium Fox Nuts (Top grade, $23.17)</li>
                  <li>6 Plus Suta (High grade, $22.47)</li>
                  <li>6 Suta (Standard high grade, $22.18)</li>
                </ul>
              </div>

              {/* Standard Quality */}
              <div className='mb-6'>
                <h4 className='font-semibold text-green-800 mb-2'>
                  Standard Quality
                </h4>
                <ul className='list-disc list-inside text-gray-700 text-sm space-y-1'>
                  <li>5 Plus Suta (International grade, $20.36)</li>
                  <li>5 Suta (Custom packing option, $19.78)</li>
                  <li>4 Suta Plus Export Quality ($18.72)</li>
                  <li>4 Suta (Multiple variants under $16.15)</li>
                </ul>
              </div>

              {/* Economy Quality */}
              <div>
                <h4 className='font-semibold text-green-800 mb-2'>
                  Economy Quality
                </h4>
                <ul className='list-disc list-inside text-gray-700 text-sm space-y-1'>
                  <li>3 Suta (Bulk / multipurpose, $6.67)</li>
                  <li>1 Suta (Entry level, $3.51)</li>
                </ul>
              </div>
            </div>

            {/* 2. By Use Case */}
            <div className='bg-white p-8 border-2 border-gray-200 rounded-xl shadow-md mb-6'>
              <h3 className='text-lg font-semibold text-green-700 mb-4 pb-2 border-b border-gray-200'>
                2. By Use Case (Secondary Filters)
              </h3>
              <ul className='text-gray-700 text-sm space-y-3'>
                <li>
                  <span className='font-semibold text-gray-800'>
                    Snacking (Healthy Superfood):
                  </span>{' '}
                  Includes Premium, 6 Plus, 6, 5, and 4 Suta grades — ideal for
                  roasted and flavored snack products.
                </li>
                <li>
                  <span className='font-semibold text-gray-800'>
                    Export / Wholesale:
                  </span>{' '}
                  5 Plus, 5, and 4 Plus Suta — processed, graded, and packed for
                  international shipment with strict moisture and uniformity
                  control.
                </li>
                <li>
                  <span className='font-semibold text-gray-800'>
                    Medicinal / Culinary Uses:
                  </span>{' '}
                  3 and 1 Suta — commonly used in Ayurvedic preparations, baby
                  food mixes, and temple offerings.
                </li>
                <li>
                  <span className='font-semibold text-gray-800'>
                    Custom Packing Options:
                  </span>{' '}
                  Available for 5 Suta and higher grades, including vacuum or
                  nitrogen-sealed pouches and export PP bags.
                </li>
              </ul>
            </div>

            {/* 3. By Price Range */}
            <div className='bg-white p-8 border-2 border-gray-200 rounded-xl shadow-md mb-6'>
              <h3 className='text-lg font-semibold text-green-700 mb-4 pb-2 border-b border-gray-200'>
                3. By Price Range (Optional Filter)
              </h3>
              <div className='grid md:grid-cols-3 gap-6 text-sm text-gray-700'>
                <div>
                  <h4 className='font-semibold text-green-800 mb-2'>
                    High Range ($20+)
                  </h4>
                  <ul className='list-disc list-inside space-y-1'>
                    <li>Premium Quality</li>
                    <li>6 Plus Suta</li>
                    <li>6 Suta</li>
                  </ul>
                </div>
                <div>
                  <h4 className='font-semibold text-green-800 mb-2'>
                    Mid Range ($15–20)
                  </h4>
                  <ul className='list-disc list-inside space-y-1'>
                    <li>5 Plus Suta</li>
                    <li>5 Suta</li>
                    <li>4 Plus / 4 Suta</li>
                  </ul>
                </div>
                <div>
                  <h4 className='font-semibold text-green-800 mb-2'>
                    Budget (&lt;$10)
                  </h4>
                  <ul className='list-disc list-inside space-y-1'>
                    <li>3 Suta</li>
                    <li>1 Suta</li>
                  </ul>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        {/* Enquiry Form */}
        <div className='p-8 border-t'>
          <div className='max-w-4xl mx-auto'>
            <h3 className='text-xl font-semibold text-green-900'>
              Looking for "Makhana" ?
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

              {/* Country Code + Mobile */}
              <div className='flex gap-2 md:col-span-2'>
                <div className='w-32'>
                  <label className='block text-sm text-gray-700'>Country Code</label>
                  <select
                    name='countryCode'
                    value={form.countryCode}
                    onChange={handleChange}
                    className='mt-1 w-full rounded border px-3 py-2'
                    required
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code} ({c.name})
                      </option>
                    ))}
                  </select>
                </div>

                <div className='flex-1'>
                  <label className='block text-sm text-gray-700'>Mobile No.</label>
                  <input
                    name='mobile'
                    value={form.mobile}
                    onChange={handleChange}
                    required
                    className='mt-1 w-full rounded border px-3 py-2'
                    type='tel'
                    placeholder='Enter mobile number'
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm text-gray-700'>Estimated Quantity</label>
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
                <label className='block text-sm text-gray-700'>Purpose of Requirement</label>
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
                <label className='block text-sm text-gray-700'>Requirement Details</label>
                <textarea
                  name='requirement'
                  value={form.requirement}
                  onChange={handleChange}
                  rows={4}
                  className='mt-1 w-full rounded border px-3 py-2'
                  placeholder='I am interested. Kindly send the quotation for the same.'
                />
              </div>

              <div className='md:col-span-2 text-right'>
                <button
                  type='submit'
                  disabled={status.loading}
                  className={`py-2 px-6 rounded font-semibold ${
                    status.loading
                      ? 'bg-green-400 cursor-not-allowed'
                      : 'bg-green-700 text-white'
                  }`}
                >
                  {status.loading ? 'Submitting...' : 'Send Enquiry'}
                </button>

                {status.loading && (
                  <p className='mt-3 text-sm text-blue-600'>Submitting...</p>
                )}
                {status.success && (
                  <p className='mt-3 text-sm text-green-600 font-medium'>
                    {status.success}
                  </p>
                )}
                {status.error && (
                  <p className='mt-3 text-sm text-red-600 font-medium'>
                    {status.error}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>




        {/* Explore More Products */}
        <div className='p-8 border-t'>
          <h3 className='text-xl font-semibold text-green-900 mb-4'>Explore More Products</h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
            {moreProducts.map((p) => (
              <a key={p.title} href={p.href} className='group bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md'>
                <div className='h-32 w-full overflow-hidden'>
                  <img src={p.img} alt={p.title} className='w-full h-full object-cover transform group-hover:scale-105 transition' />
                </div>
                <div className='p-3'>
                  <h4 className='text-sm font-medium text-gray-800'>{p.title}</h4>
                  <div className='mt-2 flex justify-between items-center'>
                    <span className='text-xs text-green-700 font-semibold'>Get Best Quote</span>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-green-700' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
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

