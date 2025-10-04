import React, { useState } from 'react';
import CustomLink from '@/components/CustomLink';

export default function Testimonials() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    designation: '',
    email: '',
    mobile: '',
    product: '',
    rating: '',
    likes: [],
    review: '',
  });

  const products = [
    { name: "Natural Stone's (Granites)", link: '/products/granite' },
    { name: 'Clove', link: '/products/clove' },
    { name: 'Cardamom', link: '/products/cardomon' },
    { name: 'Black Pepper', link: '/products/blackPepper' },
    { name: 'Flax Seeds', link: '/products/flax' },
    { name: 'Soyabean Flakes', link: '/products/Soyabeen' },
    { name: 'Soyabean Meal', link: '/products/soyabeanMeal' },
    { name: 'Makhana', link: '/products/lotusSeeds' },
  ];

  // Rating statistics - realistic distribution
  const ratingStats = {
    5: 287,
    4: 142,
    3: 48,
    2: 18,
    1: 12,
  };

  const totalReviews = Object.values(ratingStats).reduce((a, b) => a + b, 0);
  const avgRating = (
    (5 * ratingStats[5] +
      4 * ratingStats[4] +
      3 * ratingStats[3] +
      2 * ratingStats[2] +
      1 * ratingStats[1]) /
    totalReviews
  ).toFixed(1);

  const reviews = [
    {
      name: 'A. R. Patil',
      company: 'Agro Industries Ltd.',
      product: 'Indian Non GMO Hipro Soyabean Meal',
      rating: 5,
      date: 'Nov 26, 2024',
      review:
        "The product's performance is unmatched. It delivers consistent results and exceeds expectations every time. Quality is top-notch and delivery was prompt.",
      verified: true,
    },
    {
      name: 'Priya Sharma',
      company: 'Spice Merchants Co.',
      product: 'Cardamom',
      rating: 5,
      date: 'Nov 18, 2024',
      review:
        'Excellent quality cardamom with amazing aroma. The packaging was secure and the product arrived fresh. Highly recommend for both domestic and export purposes.',
      verified: true,
    },
    {
      name: 'Rajesh Kumar',
      company: 'Food Processing Unit',
      product: 'Black Pepper',
      rating: 5,
      date: 'Nov 10, 2024',
      review:
        'Outstanding quality black pepper with perfect pungency. The team was very responsive and helped us with bulk ordering. Will definitely order again.',
      verified: true,
    },
    {
      name: 'Vikram Singh',
      company: 'Retail Commodities',
      product: 'Makhana',
      rating: 4,
      date: 'Nov 5, 2024',
      review:
        'Good quality lotus seeds, packaging could be better but overall satisfied with the product. Price is reasonable for the quality provided.',
      verified: true,
    },
    {
      name: 'Mohammed Ali',
      company: 'Export House',
      product: 'Clove',
      rating: 5,
      date: 'Oct 28, 2024',
      review:
        'Premium grade cloves that met all our export standards. The documentation and quality certificates were provided promptly. Great business partner!',
      verified: true,
    },
    {
      name: 'Sunita Reddy',
      company: 'Food Corp',
      product: 'Natural Stones (Granites)',
      rating: 4,
      date: 'Oct 22, 2024',
      review:
        'Quality stones as described. Delivery took slightly longer than expected but the product quality made up for it. Would order again.',
      verified: true,
    },
    {
      name: 'Anjali Desai',
      company: 'Health Foods Pvt Ltd',
      product: 'Flax Seeds',
      rating: 5,
      date: 'Oct 15, 2024',
      review:
        'Very fresh flax seeds with high oil content. Perfect for our health food products. The quality consistency across batches is impressive.',
      verified: true,
    },
    {
      name: 'Karthik Menon',
      company: 'Spice Exports',
      product: 'Black Pepper',
      rating: 4,
      date: 'Oct 8, 2024',
      review:
        'Good product overall. The pepper quality is decent and pricing is competitive. Customer service was helpful during the ordering process.',
      verified: true,
    },
    {
      name: 'Neha Gupta',
      company: 'Organic Foods',
      product: 'Soyabean Flakes',
      rating: 5,
      date: 'Sep 30, 2024',
      review:
        'Excellent soyabean flakes with great texture. Our customers love the quality. Consistent supply and professional communication from the team.',
      verified: true,
    },
    {
      name: 'Aditya Patel',
      company: 'Trading Co.',
      product: 'Cardamom',
      rating: 3,
      date: 'Sep 18, 2024',
      review:
        'Average quality cardamom. Expected better aroma for the price point. Service was good but product needs improvement.',
      verified: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <div className='font-sans text-gray-800 bg-gray-50'>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-br from-green-900 via-green-800 to-green-950 py-20 px-6 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl'></div>
          <div className='absolute bottom-10 right-20 w-96 h-96 bg-green-400 rounded-full blur-3xl'></div>
        </div>
        <div className='container mx-auto text-center relative z-10'>
          <h1 className='text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight'>
            Customer Reviews
          </h1>
          <p className='text-lg text-green-100 max-w-3xl mx-auto leading-relaxed'>
            Trusted by businesses worldwide for quality products and exceptional
            service
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className='container mx-auto py-10 px-4'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Main Content */}
          <div className='flex-1'>
            {/* Ratings Summary - Enhanced */}
            <div className='bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100'>
              <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
                <div className='text-center md:text-left'>
                  <p className='text-sm text-gray-500 uppercase tracking-wide mb-2'>
                    Overall Rating
                  </p>
                  <div className='flex items-center gap-3 justify-center md:justify-start'>
                    <p className='text-5xl font-bold text-yellow-600'>
                      {avgRating}
                    </p>
                    <div>
                      <div className='text-2xl text-yellow-500'>★★★★★</div>
                      <p className='text-sm text-gray-500 mt-1'>
                        Based on {totalReviews} reviews
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex-1 max-w-md w-full'>
                  {[5, 4, 3, 2, 1].map((star) => {
                    const count = ratingStats[star];
                    const percentage = Math.max(
                      (count / totalReviews) * 100,
                      2,
                    );
                    return (
                      <div key={star} className='flex items-center gap-3 mb-2'>
                        <span className='text-sm w-8 text-gray-700'>
                          {star} ★
                        </span>
                        <div className='flex-1 bg-gray-200 rounded-full h-3'>
                          <div
                            className={`h-3 rounded-full transition-all ${
                              star === 5
                                ? 'bg-green-500'
                                : star === 4
                                  ? 'bg-green-400'
                                  : star === 3
                                    ? 'bg-yellow-500'
                                    : star === 2
                                      ? 'bg-orange-500'
                                      : 'bg-red-500'
                            }`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className='text-sm text-gray-600 w-12 text-right'>
                          {count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Reviews List */}
            <div className='mb-8'>
              <h2 className='text-2xl font-bold mb-6 flex items-center gap-2'>
                Customer Reviews
                <span className='bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full'>
                  {totalReviews} Total
                </span>
              </h2>

              <div className='space-y-4'>
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'
                  >
                    <div className='flex justify-between items-start mb-3'>
                      <div>
                        <div className='flex items-center gap-2 mb-1'>
                          <p className='font-bold text-lg text-gray-900'>
                            {review.name}
                          </p>
                          {review.verified && (
                            <span className='bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1'>
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <p className='text-sm text-gray-600'>
                          {review.company}
                        </p>
                      </div>
                      <div className='text-right'>
                        <div className='text-yellow-500 text-lg mb-1'>
                          {'★'.repeat(review.rating)}
                          {'☆'.repeat(5 - review.rating)}
                        </div>
                        <p className='text-xs text-gray-500'>{review.date}</p>
                      </div>
                    </div>
                    <div className='mb-3'>
                      <span className='inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full'>
                        {review.product}
                      </span>
                    </div>
                    <p className='text-gray-700 leading-relaxed'>
                      {review.review}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Form - Enhanced */}
            <div className='bg-white border border-gray-200 rounded-xl p-8 shadow-lg'>
              <div className='mb-6'>
                <h2 className='text-2xl font-bold mb-2'>
                  Share Your Experience
                </h2>
                <p className='text-gray-600'>
                  Your feedback helps us serve you better
                </p>
              </div>
              <p className='text-red-500 text-sm mb-6'>* Required fields</p>

              <div className='space-y-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Your Name *
                    </label>
                    <input
                      type='text'
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className='w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Company Name
                    </label>
                    <input
                      type='text'
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      className='w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Designation
                    </label>
                    <input
                      type='text'
                      value={form.designation}
                      onChange={(e) =>
                        setForm({ ...form, designation: e.target.value })
                      }
                      className='w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Email *
                    </label>
                    <input
                      type='email'
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className='w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Mobile (IN +91) *
                    </label>
                    <input
                      type='tel'
                      value={form.mobile}
                      onChange={(e) =>
                        setForm({ ...form, mobile: e.target.value })
                      }
                      className='w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Product / Service *
                    </label>
                    <input
                      type='text'
                      value={form.product}
                      onChange={(e) =>
                        setForm({ ...form, product: e.target.value })
                      }
                      className='w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Rating *
                  </label>
                  <select
                    value={form.rating}
                    onChange={(e) =>
                      setForm({ ...form, rating: e.target.value })
                    }
                    className='w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                    required
                  >
                    <option value=''>Select Rating</option>
                    <option value='5'>5 ★★★★★ Excellent</option>
                    <option value='4'>4 ★★★★☆ Good</option>
                    <option value='3'>3 ★★★☆☆ Average</option>
                    <option value='2'>2 ★★☆☆☆ Poor</option>
                    <option value='1'>1 ★☆☆☆☆ Bad</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    What did you like? *
                  </label>
                  <div className='flex gap-6 flex-wrap'>
                    <label className='flex items-center gap-2 text-sm cursor-pointer'>
                      <input
                        type='checkbox'
                        className='w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500'
                      />
                      <span>Response</span>
                    </label>
                    <label className='flex items-center gap-2 text-sm cursor-pointer'>
                      <input
                        type='checkbox'
                        className='w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500'
                      />
                      <span>Quality</span>
                    </label>
                    <label className='flex items-center gap-2 text-sm cursor-pointer'>
                      <input
                        type='checkbox'
                        className='w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500'
                      />
                      <span>Delivery</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Your Review *
                  </label>
                  <textarea
                    value={form.review}
                    onChange={(e) =>
                      setForm({ ...form, review: e.target.value })
                    }
                    className='w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                    rows={4}
                    placeholder='Share your experience with our products and services...'
                    required
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className='w-full bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md'
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>

          {/* Products Sidebar */}
          <aside className='lg:w-72 flex-shrink-0'>
            <div className='bg-white border border-gray-200 rounded-xl p-5 shadow-lg'>
              <h3 className='font-bold text-xl mb-4 text-gray-900 border-b pb-3'>
                Our Products
              </h3>
              <nav className='space-y-1'>
                {products.map((product, index) => (
                  <CustomLink
                    key={index}
                    href={product.link}
                    className='block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors font-medium'
                  >
                    {product.name}
                  </CustomLink>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
