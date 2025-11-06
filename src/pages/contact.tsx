import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import heroImage from '@assets/generated_images/Pakistani_cuisine_hero_image_83c72f7b.png';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen text-white">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundAttachment: 'fixed',
          }}
        />
        
        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center">
          <h1 className="mb-6 text-6xl font-bold text-yellow-400 md:text-8xl">
            CONTACT
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Get in touch with us
          </p>
        </div>
      </section>

      <ContactSection />
      
      <Footer />
    </div>
  );
}