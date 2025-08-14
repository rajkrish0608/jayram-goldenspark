import { Award, Clock, Heart, Users } from 'lucide-react';
import amanVermaImage from '@/assets/aman-verma.jpg';

const AboutSection = () => {
  const achievements = [
    {
      icon: <Clock size={32} />,
      title: '35+ Years',
      description: 'Legacy of Trust'
    },
    {
      icon: <Users size={32} />,
      title: '10,000+',
      description: 'Happy Customers'
    },
    {
      icon: <Award size={32} />,
      title: '100%',
      description: 'Hallmarked Jewelry'
    },
    {
      icon: <Heart size={32} />,
      title: '500+',
      description: 'Custom Designs'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              About Jayram Jewellers
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground font-lato leading-relaxed">
              <p>
                Since 1985, Jayram Jewellers has been a trusted name in premium jewelry, 
                founded by <strong className="text-primary">Aman Verma</strong> with a vision to bring 
                exquisite craftsmanship and authentic designs to our valued customers.
              </p>
              
              <p>
                What started as a small family business has grown into one of the most 
                respected jewelry stores in the region, known for our commitment to quality, 
                authenticity, and customer satisfaction.
              </p>
              
              <p>
                Every piece in our collection tells a story of tradition, craftsmanship, 
                and the timeless beauty of precious metals and stones. We take pride in 
                offering 100% hallmarked jewelry with lifetime buyback guarantee.
              </p>
            </div>

            {/* Owner Quote */}
            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
              <blockquote className="text-lg italic text-foreground font-lato">
                "Our commitment goes beyond selling jewelry. We create lasting relationships 
                built on trust, quality, and the joy of celebrating life's precious moments."
              </blockquote>
              <cite className="block mt-4 text-primary font-playfair font-semibold">
                — Aman Verma, Founder
              </cite>
            </div>

            {/* CTA Button */}
            <button className="btn-hero-primary">
              Visit Us Today
            </button>
          </div>

          {/* Right Column - Image & Stats */}
          <div className="order-1 lg:order-2">
            {/* Owner Image */}
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto relative">
                <img
                  src={amanVermaImage}
                  alt="Aman Verma - Founder of Jayram Jewellers"
                  className="w-full h-full object-cover rounded-2xl shadow-premium"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-2xl shadow-gold">
                  <div className="text-center">
                    <div className="text-2xl font-playfair font-bold">35+</div>
                    <div className="text-sm font-lato">Years</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`text-center p-6 bg-white rounded-xl shadow-elegant hover:shadow-premium transition-all duration-300 hover:scale-105 fade-in-up stagger-${index + 1}`}
                >
                  <div className="text-primary mb-4 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-playfair font-bold text-foreground mb-2">
                    {achievement.title}
                  </div>
                  <div className="text-sm text-muted-foreground font-lato">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;