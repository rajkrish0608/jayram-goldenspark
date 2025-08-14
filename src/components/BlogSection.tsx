import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '5 Things to Check Before Buying Gold',
      excerpt: 'Essential tips to ensure you make the right gold jewelry purchase. Learn about hallmarking, purity, and pricing factors.',
      author: 'Aman Verma',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      category: 'Buying Guide'
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Engagement Ring',
      excerpt: 'A comprehensive guide to selecting an engagement ring that captures your love story. From diamond cuts to ring settings.',
      author: 'Jewelry Expert',
      date: 'March 10, 2024',
      readTime: '7 min read',
      image: '/api/placeholder/600/400',
      category: 'Wedding Jewelry'
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Jewelry Insights & Tips
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lato">
            Expert advice and insights to help you make informed jewelry decisions
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`bg-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-premium transition-all duration-300 hover:scale-105 cursor-pointer fade-in-up stagger-${index + 1}`}
            >
              {/* Featured Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-6xl text-primary/30">📝</div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-3 hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground font-lato leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="group flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300 font-lato font-semibold">
                  <span>Read More</span>
                  <ArrowRight 
                    size={16} 
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-hero-primary">
            View All Articles
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="bg-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
              Stay Updated with Jewelry Trends
            </h3>
            <p className="text-muted-foreground font-lato mb-6">
              Subscribe to our newsletter for the latest jewelry insights, care tips, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-lato"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-accent transition-colors duration-300 font-lato font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;