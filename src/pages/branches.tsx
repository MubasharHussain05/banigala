import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import culturalImg from '@/assets/generated_images/Restaurant_dining_experience_c8cad8dd.png';

export default function Branches() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${culturalImg})`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-yellow-400">
            BRANCHES
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Find our locations across the city
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}