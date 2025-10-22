import React from 'react';
import { Link } from 'react-router-dom';

export default function Sitemap() {
  const baseStyle = {
    color: '#0f766e',
    textDecoration: 'none',
    fontWeight: '500',
  };

  const sectionStyle = {
    marginBottom: '2rem',
  };

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-emerald-700 mb-8 text-center">
        Sitemap
      </h1>

      <div className="space-y-10">

        {/* Main Pages */}
        <section style={sectionStyle}>
          <h2 className="text-xl font-semibold mb-3 text-emerald-800">Main Pages</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><Link to="/" style={baseStyle}>Home</Link></li>
            <li><Link to="/about" style={baseStyle}>About Us</Link></li>
            <li><Link to="/products" style={baseStyle}>Products</Link></li>
            <li><Link to="/testimonials" style={baseStyle}>Testimonials</Link></li>
            <li><Link to="/contact" style={baseStyle}>Contact</Link></li>
            <li><Link to="/PrivacyPolicy" style={baseStyle}>Privacy Policy</Link></li>
            <li><Link to="/TermsOfService" style={baseStyle}>Terms of Service</Link></li>
          </ul>
        </section>

        {/* Product Categories */}
        <section style={sectionStyle}>
          <h2 className="text-xl font-semibold mb-3 text-emerald-800">Product Categories</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><Link to="/products/granite" style={baseStyle}>Granites</Link></li>
            <li><Link to="/products/clove" style={baseStyle}>Clove</Link></li>
            <li><Link to="/products/cardomon" style={baseStyle}>Cardamom</Link></li>
            <li><Link to="/products/blackPepper" style={baseStyle}>Black Pepper</Link></li>
            <li><Link to="/products/Soyabeen" style={baseStyle}>Soyabean Flakes</Link></li>
            <li><Link to="/products/soyabeanMeal" style={baseStyle}>Soyabean Meal</Link></li>
            <li><Link to="/products/flax" style={baseStyle}>Flax Seeds</Link></li>
            <li><Link to="/products/lotusSeeds" style={baseStyle}>Makhana (Lotus Seeds)</Link></li>
          </ul>
        </section>

        {/* Granite Products */}
        <section style={sectionStyle}>
          <h2 className="text-xl font-semibold mb-3 text-emerald-800">Granite Products</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><Link to="/products/granite/NeoChocolate" style={baseStyle}>Neo Chocolate</Link></li>
            <li><Link to="/products/granite/NeoGalaxy" style={baseStyle}>Neo Galaxy</Link></li>
            <li><Link to="/products/granite/NeokTize" style={baseStyle}>Neok Tize</Link></li>
            <li><Link to="/products/granite/NeoTanBlue" style={baseStyle}>Neo Tan Blue</Link></li>
            <li><Link to="/products/granite/NeoTanRed" style={baseStyle}>Neo Tan Red</Link></li>
            <li><Link to="/products/granite/NeoTigerShade" style={baseStyle}>Neo Tiger Shade</Link></li>
            <li><Link to="/products/granite/NeoTomato" style={baseStyle}>Neo Tomato</Link></li>
            <li><Link to="/products/granite/StarBlue" style={baseStyle}>Star Blue</Link></li>
          </ul>
        </section>

      </div>
    </div>
  );
}
