import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Home, Utensils } from 'lucide-react';
import { useState } from 'react';
import heroImage from '@assets/generated_images/Pakistani_cuisine_hero_image_83c72f7b.png';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative min-h-screen">
      {/* Content */}
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Contact Form */}
        <div className="flex items-center justify-center px-6 py-16 bg-gray-900 lg:py-24">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h2 className="mb-4 font-serif text-4xl font-bold text-yellow-500 md:text-5xl">
                Get In Touch
              </h2>
              <p className="text-base leading-relaxed text-gray-300">
                Experience the authentic taste of Pakistani cuisine at Banigala Restaurant. Contact us for reservations, catering, or any inquiries about our delicious traditional dishes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="py-6 text-gray-800 bg-white border-0 placeholder:text-gray-500"
                data-testid="input-name"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="py-6 text-gray-800 bg-white border-0 placeholder:text-gray-500"
                data-testid="input-email"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="py-6 text-gray-800 bg-white border-0 placeholder:text-gray-500"
                data-testid="input-phone"
              />
              <Textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="py-4 text-gray-800 bg-white border-0 resize-none placeholder:text-gray-500"
                data-testid="input-message"
              />
              <Button 
                type="submit" 
                className="w-full py-6 text-lg font-semibold text-gray-900 bg-yellow-500 rounded-full hover:bg-yellow-600"
                data-testid="button-send-message"
              >
                Send Message
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <p className="text-sm text-gray-300">Banigala, France</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-500" />
                <p className="text-sm text-gray-300">+92 51 123 4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-500" />
                <p className="text-sm text-gray-300">info@banigalarestaurant.pk</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-yellow-500" />
                <div className="text-sm text-gray-300">
                  <p className="mb-1 font-semibold text-white">Opening Hours:</p>
                  <p>Daily: 11:00 AM - 11:00 PM</p>
                  <p>Friday: 2:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-start gap-6 mt-8">
              <a href="#" className="text-yellow-500 transition-colors hover:text-yellow-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-yellow-500 transition-colors hover:text-yellow-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-yellow-500 transition-colors hover:text-yellow-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Background Image with Map */}
        <div className="relative">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content over background */}
          <div className="relative z-10 flex flex-col justify-center h-full px-6 py-16">
            {/* Services Section */}
            <div className="mb-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Dine In */}
                <div className="p-6 text-center rounded-lg bg-black/70 backdrop-blur-sm">
                  <div className="flex justify-center mb-4">
                    <Utensils className="w-12 h-12 text-yellow-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-yellow-500">Dine In</h3>
                  <p className="text-sm text-gray-300">
                    Experience authentic Pakistani flavors in our traditional ambiance
                  </p>
                </div>

                {/* Takeaway */}
                <div className="p-6 text-center rounded-lg bg-black/70 backdrop-blur-sm">
                  <div className="flex justify-center mb-4">
                    <Home className="w-12 h-12 text-yellow-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-yellow-500">Takeaway</h3>
                  <p className="text-sm text-gray-300">
                    Enjoy our delicious meals from the comfort of your home
                  </p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="rounded-lg bg-black/70 backdrop-blur-sm">
              <div className="p-4">
                <h3 className="mb-4 font-serif text-xl font-semibold text-center text-yellow-500">Find Us</h3>
                <div className="w-full h-64 bg-gray-800 rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.8944!2d73.2696!3d33.7294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfea06e8972c1b%3A0x6c0c1b8c8b8c8b8c!2sBanigala%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '0.5rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Banigala Restaurant Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}