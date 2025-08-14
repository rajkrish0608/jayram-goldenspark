import { ArrowDown, Phone, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-jewelry.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Exquisite Jewelry Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 fade-in-up">
          Exquisite Jewellery for{' '}
          <span className="text-primary">Every Occasion</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-lato mb-8 max-w-3xl mx-auto fade-in-up stagger-1">
          Discover our premium collection of 100% hallmarked gold and diamond jewelry, 
          crafted with love since 1985
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up stagger-2">
          <a
            href="#collection"
            className="btn-hero-primary inline-flex items-center space-x-2"
          >
            <span>View Collection</span>
            <ArrowDown size={20} />
          </a>
          
          <a
            href="tel:+919876543210"
            className="btn-hero-secondary inline-flex items-center space-x-2"
          >
            <Phone size={20} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up stagger-3">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-playfair font-bold text-primary-foreground">✓</span>
            </div>
            <h3 className="text-lg font-playfair font-semibold mb-2">100% Hallmarked</h3>
            <p className="text-white/80 font-lato">Certified purity guaranteed</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-playfair font-bold text-primary-foreground">↺</span>
            </div>
            <h3 className="text-lg font-playfair font-semibold mb-2">Lifetime Buyback</h3>
            <p className="text-white/80 font-lato">Best rates guaranteed</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-playfair font-bold text-primary-foreground">⚡</span>
            </div>
            <h3 className="text-lg font-playfair font-semibold mb-2">Custom Designs</h3>
            <p className="text-white/80 font-lato">Personalized just for you</p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-premium hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;