import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SignatureDishes from '@/components/SignatureDishes';
import culturalImg from '@/assets/generated_images/Pakistani_cuisine_hero_image_83c72f7b.png';

export default function Menu() {
  return (
    <div className="min-h-screen bg-background">
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
            MENU
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Explore our authentic Pakistani cuisine
          </p>
        </div>
      </section>

      <SignatureDishes />
      <Footer />
    </div>
  );
}