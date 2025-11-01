import { Award, Trophy, Star, Medal } from 'lucide-react';

const awards = [
  { icon: Trophy, text: 'Restaurant of the Year 2024' },
  { icon: Award, text: 'Excellence in Cuisine' },
  { icon: Star, text: 'Best Pakistani Restaurant' },
  { icon: Medal, text: 'Taste of the Year 2023' },
  { icon: Trophy, text: 'Culinary Excellence Award' },
  { icon: Award, text: 'Customer Choice Award' },
  { icon: Star, text: 'Premium Dining Experience' },
  { icon: Medal, text: 'Heritage & Quality Award' },
];

export default function AwardsMarquee() {
  return (
    <section className="bg-primary/5 py-12 overflow-hidden border-y border-border">
      <div className="relative">
        <div className="flex animate-[scroll_30s_linear_infinite]">
          {[...awards, ...awards].map((award, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-8 whitespace-nowrap"
              data-testid={`award-${index}`}
            >
              <award.icon className="h-6 w-6 text-primary" />
              <span className="text-foreground font-medium">{award.text}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
