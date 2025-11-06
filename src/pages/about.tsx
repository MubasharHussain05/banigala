import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import culturalImg from '@/assets/generated_images/calutre.png';

export default function About() {
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
            ABOUT US
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Discover the story behind authentic Pakistani cuisine
          </p>
        </div>
      </section>

      <AboutSection />
      <Footer />
    </div>
  );
}