import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  purchaseItem: string;
}

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      comment: 'Absolutely stunning jewelry! The craftsmanship is exceptional and the staff was incredibly helpful. My wedding set exceeded all expectations.',
      avatar: '👩🏻‍💼',
      purchaseItem: 'Bridal Set'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      comment: 'Been buying from Jayram Jewellers for over 10 years. The quality is consistent and the buyback policy gives great peace of mind.',
      avatar: '👨🏻‍💼',
      purchaseItem: 'Gold Chain'
    },
    {
      id: 3,
      name: 'Anita Patel',
      location: 'Pune',
      rating: 5,
      comment: 'The custom design service is amazing! They brought my dream necklace to life exactly as I imagined. Highly recommended!',
      avatar: '👩🏻',
      purchaseItem: 'Custom Necklace'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Jaipur',
      rating: 5,
      comment: 'Excellent service and authentic jewelry. The hallmarking certificate and detailed explanation gave me complete confidence in my purchase.',
      avatar: '👨🏻',
      purchaseItem: 'Diamond Ring'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={`${
          index < rating ? 'text-primary fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lato">
            Real experiences from our valued customers who trust us with their precious moments
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-premium p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-primary/20">
              <Quote size={60} />
            </div>

            {/* Review Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4">
                  {reviews[currentReview].avatar}
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground">
                    {reviews[currentReview].name}
                  </h3>
                  <p className="text-muted-foreground font-lato">
                    {reviews[currentReview].location} • {reviews[currentReview].purchaseItem}
                  </p>
                  <div className="flex mt-2">
                    {renderStars(reviews[currentReview].rating)}
                  </div>
                </div>
              </div>

              <blockquote className="text-xl text-foreground font-lato leading-relaxed italic">
                "{reviews[currentReview].comment}"
              </blockquote>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevReview}
                className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentReview ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-elegant">
              <div className="text-3xl mb-3">⭐</div>
              <div className="text-2xl font-playfair font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground font-lato">Average Rating</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-elegant">
              <div className="text-3xl mb-3">👥</div>
              <div className="text-2xl font-playfair font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground font-lato">Happy Customers</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-elegant">
              <div className="text-3xl mb-3">🏆</div>
              <div className="text-2xl font-playfair font-bold text-primary mb-2">35+</div>
              <div className="text-muted-foreground font-lato">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;