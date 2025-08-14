import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collection', href: '#collection' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const productCategories = [
    { name: 'Diamond Rings', href: '#' },
    { name: 'Gold Necklaces', href: '#' },
    { name: 'Bangles & Bracelets', href: '#' },
    { name: 'Bridal Sets', href: '#' },
    { name: 'Earrings', href: '#' },
    { name: 'Custom Designs', href: '#' },
  ];

  const services = [
    { name: '100% Hallmarked Jewelry', href: '#' },
    { name: 'Lifetime Buyback', href: '#' },
    { name: 'Custom Design Service', href: '#' },
    { name: 'Jewelry Repair', href: '#' },
    { name: 'Certificate of Authenticity', href: '#' },
    { name: 'Free Consultation', href: '#' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-playfair font-bold text-xl">J</span>
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold text-primary">
                  Jayram Jewellers
                </h3>
                <p className="text-secondary-foreground/80 text-sm">Since 1985</p>
              </div>
            </div>
            
            <p className="text-secondary-foreground/80 font-lato leading-relaxed">
              Your trusted partner for premium jewelry since 1985. We specialize in 
              100% hallmarked gold and diamond jewelry with lifetime buyback guarantee.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm font-lato">123 Jewelry Street, Gold Market, New Delhi 110001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm font-lato">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm font-lato">info@jayramjewellers.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm font-lato">Mon-Sat: 10AM-8PM, Sun: 11AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold text-primary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300 font-lato"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-playfair font-semibold text-primary mb-6 mt-8">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300 font-lato text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-playfair font-semibold text-primary mb-6">
              Our Collection
            </h4>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300 font-lato"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-playfair font-semibold text-primary mb-6">
              Connect With Us
            </h4>
            
            {/* Social Media */}
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="bg-primary/20 text-primary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Follow on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-primary/20 text-primary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Follow on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/919876543210"
                className="bg-green-500/20 text-green-500 p-3 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
                aria-label="Contact on WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>

            {/* Newsletter */}
            <div className="bg-primary/10 rounded-lg p-4">
              <h5 className="font-playfair font-semibold text-primary mb-3">
                Stay Updated
              </h5>
              <p className="text-secondary-foreground/80 text-sm font-lato mb-4">
                Get latest jewelry trends and exclusive offers
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded bg-white text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-accent transition-colors duration-300 text-sm font-semibold">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-primary">✓</span>
                <span className="text-secondary-foreground/80 font-lato">100% Hallmarked</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-primary">✓</span>
                <span className="text-secondary-foreground/80 font-lato">Lifetime Buyback</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-primary">✓</span>
                <span className="text-secondary-foreground/80 font-lato">Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-secondary-foreground/20 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-secondary-foreground/80 text-sm font-lato">
                © 2024 Jayram Jewellers. All rights reserved.
              </p>
              <p className="text-secondary-foreground/60 text-xs font-lato mt-1">
                Proudly serving customers since 1985
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300 font-lato"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300 font-lato"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300 font-lato"
              >
                Buyback Policy
              </a>
            </div>

            <div className="flex items-center space-x-1 text-secondary-foreground/80 text-sm font-lato">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 fill-current" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;