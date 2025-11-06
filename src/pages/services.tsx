import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import culturalImg from '@/assets/generated_images/Event_catering_setup_68ead6b5.png';

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen text-white">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${culturalImg})`,
            backgroundAttachment: 'fixed',
          }}
        />
         
        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center">
          <h1 className="mb-6 text-6xl font-bold text-yellow-400 md:text-8xl">
            SERVICES
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Comprehensive dining and catering solutions
          </p>
        </div>
      </section>

      <ServicesSection />
      <Footer />
    </div>
  );
}