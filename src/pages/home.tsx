import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AwardsMarquee from '@/components/AwardsMarquee';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import SignatureDishes from '@/components/SignatureDishes';
import CulturalStory from '@/components/CulturalStory';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AwardsMarquee />
      <ServicesSection />
      <AboutSection />
      <SignatureDishes />
      <CulturalStory />
      <ContactSection />
      <Footer />
    </div>
  );
}
