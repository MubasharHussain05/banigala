import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import heroImage from '@/assets/generated_images/Pakistani_cuisine_hero_image_83c72f7b.png';
export default function HeroSection() {
  const videos = [
    'https://res.cloudinary.com/dpttzjoaq/video/upload/banner-vedio-1_rjfwai.mp4',
    'https://res.cloudinary.com/dpttzjoaq/video/upload/banner-vedio-2_alqwdq.mp4',
    'https://res.cloudinary.com/dpttzjoaq/video/upload/banner-vedio-3_uvjk8e.mp4',
    'https://res.cloudinary.com/dpttzjoaq/video/upload/banner-vedio-4_urtkyv.mp4'
  ];
  const [showImage, setShowImage] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setShowImage(false);
    }, 3000);

    const videoInterval = setInterval(() => {
      if (!showImage) {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      }
    }, 10000);

    return () => {
      clearTimeout(imageTimer);
      clearInterval(videoInterval);
    };
  }, [showImage, videos.length]);

  return (
    <section id="home" className="relative flex items-center justify-center h-screen overflow-hidden">
      {showImage ? (
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 object-cover w-full h-full"
        />
      ) : (
        videos.map((video, index) => (
          <video
            key={index}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideo ? 'opacity-120' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            style={{ playbackRate: 0.5 }}
            onLoadedData={(e) => {
              e.currentTarget.playbackRate = 0.5;
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))
      )}
      <div className="absolute inset-0" />

      {/* Left Sidebar with Social Icons */}
      <div className="absolute top-0 bottom-0 left-0 z-20 items-center hidden md:flex">
        <div className="flex flex-col justify-center w-16 h-full gap-4 py-8 bg-black/20 backdrop-blur-sm rounded-r-2xl">
          <a href="#" className="flex items-center justify-center w-10 h-10 mx-auto transition-all duration-300 rounded-lg bg-black/30 backdrop-blur-sm hover:bg-black/50 group">
            <Instagram className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 mx-auto transition-all duration-300 rounded-lg bg-black/30 backdrop-blur-sm hover:bg-black/50 group">
            <Facebook className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 mx-auto transition-all duration-300 rounded-lg bg-black/30 backdrop-blur-sm hover:bg-black/50 group">
            <Youtube className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 mx-auto transition-all duration-300 rounded-lg bg-black/30 backdrop-blur-sm hover:bg-black/50 group">
            <Linkedin className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
          </a>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl px-6 mx-auto text-center">
        <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight text-white md:text-5xl lg:text-5xl">
          FROM THE STREETS OF PAKISTAN AND INDIA
          <br />
          TO THE TABLES OF FRANCE
        </h1>
        <p className="mb-8 text-xl tracking-wide uppercase md:text-2xl font-accent text-white/90">
          Banigala | Authentic Pakistani and Indian Cuisine
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="outline"
            size="lg"
            className="text-white bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20"
            onClick={() => {
              const element = document.getElementById('menu');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            data-testid="button-view-menu"
          >
            View Menu
          </Button>
          <Button
            variant="default"
            size="lg"
            onClick={() => console.log('Book a table clicked')}
            data-testid="button-book-table-hero"
          >
            Book a Table
          </Button>
        </div>
      </div>

      <div className="absolute -translate-x-1/2 bottom-10 left-1/2 animate-bounce">
        <div className="flex items-start justify-center w-6 h-10 p-2 border-2 rounded-full border-white/50">
          <div className="w-1.5 h-3 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
