import culturalImg from '@assets/generated_images/Pakistani_market_scene_fe3621c6.png';

export default function CulturalStory() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${culturalImg})`,
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Bringing Pakistani Heritage to France
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed opacity-90">
          Every dish tells a story of tradition, culture, and passion. From the vibrant streets of Pakistan to the elegant dining rooms of France, Banigala preserves authentic flavors while creating new memories for our guests.
        </p>
      </div>
    </section>
  );
}
