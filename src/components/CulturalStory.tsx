// @ts-ignore: allow importing image asset without type declarations
import culturalImg from '@assets/generated_images/tradition.png';

export default function CulturalStory() {
  return (
    <section className="relative px-6 py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${culturalImg})`,
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
          Bringing Pakistani Heritage to France
        </h2>
        <p className="text-xl leading-relaxed md:text-2xl opacity-90">
          Every dish tells a story of tradition, culture, and passion. From the vibrant streets of Pakistan to the elegant dining rooms of France, Banigala preserves authentic flavors while creating new memories for our guests.
        </p>
      </div>
    </section>
  );
}
