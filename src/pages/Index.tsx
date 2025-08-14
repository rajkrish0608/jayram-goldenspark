import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GoldRateTicker from '@/components/GoldRateTicker';
import FeaturedCollection from '@/components/FeaturedCollection';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <GoldRateTicker />
      <FeaturedCollection />
      <AboutSection />
      <ReviewsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
