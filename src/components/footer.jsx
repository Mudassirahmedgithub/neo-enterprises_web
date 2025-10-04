import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronRight,
} from 'lucide-react';

function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        background:
          'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #064e3b 100%)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Background Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '256px',
            height: '256px',
            background: '#34d399',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '384px',
            height: '384px',
            background: '#10b981',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '33%',
            width: '192px',
            height: '192px',
            background: '#84cc16',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        ></div>
      </div>

      {/* Leaf Pattern Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10c-5 0-10 5-10 10 0 8 10 20 10 20s10-12 10-20c0-5-5-10-10-10z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      ></div>

      <div
        style={{
          position: 'relative',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '8px 24px',
        }}
      >
        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            marginBottom: '40px',
          }}
        >
          {/* Company Info Section */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background:
                    'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}
              >
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>NE</span>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                Neo Enterprises
              </h3>
            </div>
            <p
              style={{
                color: '#d1fae5',
                fontSize: '14px',
                lineHeight: '1.6',
                marginBottom: '16px',
              }}
            >
              Your trusted partner for premium quality agricultural products and
              spices since 2022.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href='#'
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(5, 150, 105, 0.5)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    color: 'white',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(5, 150, 105, 1)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(5, 150, 105, 0.5)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '4px',
                  height: '24px',
                  background: '#34d399',
                  marginRight: '8px',
                }}
              ></div>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link, idx) => (
                <li key={idx} style={{ marginBottom: '8px' }}>
                  <a
                    href={link.path}
                    style={{
                      color: '#d1fae5',
                      textDecoration: 'none',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = '#a7f3d0')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = '#d1fae5')
                    }
                  >
                    <ChevronRight size={16} style={{ marginRight: '4px' }} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '4px',
                  height: '24px',
                  background: '#34d399',
                  marginRight: '8px',
                }}
              ></div>
              Our Products
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { name: 'Flax Seeds', path: '/products/flax' },
                { name: 'Cardamom', path: '/products/cardomon' },
                { name: 'Clove', path: '/products/clove' },
                { name: 'Black Pepper', path: '/products/blackPepper' },
                { name: 'Soyabean Meal', path: '/products/soyabeanMeal' },
                { name: 'Soyabean Flakes', path: '/products/soyabeen' },
                { name: 'Makhana', path: '/products/lotusSeeds' },
                { name: 'Granite', path: '/products/granite' },
              ].map((product, idx) => (
                <li key={idx} style={{ marginBottom: '8px' }}>
                  <a
                    href={product.path}
                    style={{
                      color: '#d1fae5',
                      textDecoration: 'none',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = '#a7f3d0')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = '#d1fae5')
                    }
                  >
                    <ChevronRight size={16} style={{ marginRight: '4px' }} />
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '4px',
                  height: '24px',
                  background: '#34d399',
                  marginRight: '8px',
                }}
              ></div>
              Contact Us
            </h3>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <a
                href='tel:+918886668873'
                style={{
                  display: 'flex',
                  gap: '12px',
                  color: '#d1fae5',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#a7f3d0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#d1fae5')}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(5, 150, 105, 0.5)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#a7f3d0',
                      margin: '0 0 4px 0',
                    }}
                  >
                    Call Us
                  </p>
                  <p style={{ fontSize: '14px', fontWeight: '500', margin: 0 }}>
                    +91 88866 68873
                  </p>
                </div>
              </a>

              <a
                href='mailto:neoenterprises1979@gmail.com'
                style={{
                  display: 'flex',
                  gap: '12px',
                  color: '#d1fae5',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#a7f3d0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#d1fae5')}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(5, 150, 105, 0.5)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#a7f3d0',
                      margin: '0 0 4px 0',
                    }}
                  >
                    Email Us
                  </p>
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      margin: 0,
                      wordBreak: 'break-all',
                    }}
                  >
                    neoenterprises1979@gmail.com
                  </p>
                </div>
              </a>

              <div style={{ display: 'flex', gap: '12px', color: '#d1fae5' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(5, 150, 105, 0.5)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#a7f3d0',
                      margin: '0 0 4px 0',
                    }}
                  >
                    Location
                  </p>
                  <p style={{ fontSize: '14px', fontWeight: '500', margin: 0 }}>
                    Hyderabad, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: '1px solid rgba(5, 150, 105, 0.5)',
            margin: '32px 0',
          }}
        ></div>

        {/* Bottom Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <p style={{ color: '#d1fae5', fontSize: '14px', margin: 0 }}>
            &copy; {new Date().getFullYear()} Neo Enterprises. All rights
            reserved.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '24px',
              fontSize: '14px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <a
              href='#'
              style={{
                color: '#d1fae5',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#a7f3d0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#d1fae5')}
            >
              Privacy Policy
            </a>
            <span style={{ color: 'rgba(5, 150, 105, 0.8)' }}>|</span>
            <a
              href='#'
              style={{
                color: '#d1fae5',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#a7f3d0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#d1fae5')}
            >
              Terms of Service
            </a>
            <span style={{ color: 'rgba(5, 150, 105, 0.8)' }}>|</span>
            <a
              href='#'
              style={{
                color: '#d1fae5',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#a7f3d0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#d1fae5')}
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div
        style={{
          height: '4px',
          background:
            'linear-gradient(90deg, #22c55e 0%, #10b981 50%, #22c55e 100%)',
        }}
      ></div>
    </footer>
  );
}

export default Footer;
