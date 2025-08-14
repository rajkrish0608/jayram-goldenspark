import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit your inquiry.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Visit Our Store
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lato">
            Experience our jewelry collection in person. Our experts are here to help you find the perfect piece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-8">
              Get in Touch
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-elegant hover:shadow-premium transition-all duration-300">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-playfair font-semibold text-foreground mb-2">
                    Store Location
                  </h4>
                  <p className="text-muted-foreground font-lato">
                    123 Jewelry Street, Gold Market<br />
                    New Delhi, India 110001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-elegant hover:shadow-premium transition-all duration-300">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-playfair font-semibold text-foreground mb-2">
                    Phone Numbers
                  </h4>
                  <p className="text-muted-foreground font-lato">
                    Main: +91 98765 43210<br />
                    WhatsApp: +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-elegant hover:shadow-premium transition-all duration-300">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-playfair font-semibold text-foreground mb-2">
                    Email Address
                  </h4>
                  <p className="text-muted-foreground font-lato">
                    info@jayramjewellers.com<br />
                    sales@jayramjewellers.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-elegant hover:shadow-premium transition-all duration-300">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-playfair font-semibold text-foreground mb-2">
                    Store Hours
                  </h4>
                  <div className="text-muted-foreground font-lato">
                    <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                    <p>Sunday: 11:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-accent transition-all duration-300 font-lato font-semibold"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                className="flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 font-lato font-semibold"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-elegant p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-lato font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 font-lato"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-lato font-semibold text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 font-lato"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-lato font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 font-lato resize-none"
                    placeholder="Tell us about your jewelry requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-primary text-primary-foreground py-3 rounded-lg hover:bg-accent transition-all duration-300 font-lato font-semibold"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-elegant p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Find Us on Map
              </h3>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin size={48} className="mx-auto mb-4 text-primary" />
                  <p className="font-lato">Interactive map will be embedded here</p>
                  <p className="text-sm">123 Jewelry Street, Gold Market, New Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;