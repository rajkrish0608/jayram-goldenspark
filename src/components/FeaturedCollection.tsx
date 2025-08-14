import { useState } from 'react';
import { Eye, Heart, ShoppingBag } from 'lucide-react';
import jewelry1 from '@/assets/jewelry-1.jpg';
import jewelry2 from '@/assets/jewelry-2.jpg';
import jewelry3 from '@/assets/jewelry-3.jpg';
import jewelry4 from '@/assets/jewelry-4.jpg';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const FeaturedCollection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const products: Product[] = [
    {
      id: 1,
      name: 'Diamond Solitaire Ring',
      category: 'Rings',
      price: '₹85,000',
      originalPrice: '₹95,000',
      image: jewelry1,
      isNew: true,
    },
    {
      id: 2,
      name: 'Gold Chain Necklace',
      category: 'Necklaces',
      price: '₹45,000',
      image: jewelry2,
      isBestseller: true,
    },
    {
      id: 3,
      name: 'Traditional Bangles Set',
      category: 'Bangles',
      price: '₹32,000',
      image: jewelry3,
    },
    {
      id: 4,
      name: 'Bridal Jewelry Set',
      category: 'Bridal Sets',
      price: '₹1,25,000',
      originalPrice: '₹1,40,000',
      image: jewelry4,
      isNew: true,
    },
    {
      id: 5,
      name: 'Emerald Drop Earrings',
      category: 'Earrings',
      price: '₹28,000',
      image: jewelry1,
    },
    {
      id: 6,
      name: 'Pearl Necklace Set',
      category: 'Necklaces',
      price: '₹18,000',
      image: jewelry2,
      isBestseller: true,
    },
  ];

  const categories = ['All', 'Rings', 'Necklaces', 'Bangles', 'Bridal Sets', 'Earrings'];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section id="collection" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Featured Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lato">
            Discover our handpicked selection of exquisite jewelry pieces, 
            each crafted with precision and passion
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-lato font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-primary-foreground shadow-gold'
                  : 'bg-white border border-border text-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`jewelry-card fade-in-up stagger-${(index % 4) + 1} group`}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      NEW
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      BESTSELLER
                    </span>
                  )}
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="bg-white text-black p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                      <Eye size={20} />
                    </button>
                    <button className="bg-white text-black p-3 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300">
                      <Heart size={20} />
                    </button>
                    <button className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-accent transition-colors duration-300">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary font-lato font-medium">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-lato font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-hero-primary">
            View Complete Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;