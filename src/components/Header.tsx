import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collection', href: '#collection' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-secondary shadow-premium' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-playfair font-bold text-lg">J</span>
            </div>
            <div>
              <h1 className="text-xl font-playfair font-bold text-primary-foreground">
                Jayram Jewellers
              </h1>
              <p className="text-xs text-primary-foreground/80">Since 1985</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary-foreground hover:text-primary transition-colors duration-300 font-lato font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 text-primary-foreground hover:text-primary transition-colors duration-300"
            >
              <Phone size={16} />
              <span className="font-lato font-medium">Call Now</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-accent transition-all duration-300"
            >
              <MessageCircle size={16} />
              <span className="font-lato font-medium">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-foreground hover:text-primary transition-colors duration-300 font-lato font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-primary-foreground/20">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-2 text-primary-foreground hover:text-primary transition-colors duration-300"
                >
                  <Phone size={16} />
                  <span className="font-lato font-medium">+91 98765 43210</span>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-accent transition-all duration-300 w-fit"
                >
                  <MessageCircle size={16} />
                  <span className="font-lato font-medium">WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;