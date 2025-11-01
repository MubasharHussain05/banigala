import { Button } from '@/components/ui/button';
import chefImg from '@assets/generated_images/Chef_preparing_traditional_food_e23d5c64.png';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <img
                src={chefImg}
                alt="Chef preparing traditional Pakistani food"
                className="w-full h-full object-cover"
                data-testid="img-chef"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              The Finest Pakistani Cuisine
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                At Banigala, we take immense pride in serving authentic Pakistani cuisine, prepared with the finest ingredients and using traditional cooking methods passed down through generations.
              </p>
              <p className="text-lg">
                Every dish is carefully crafted with fresh, in-house made spices, slow-cooked to perfection, and rooted in the rich culinary traditions of Pakistan. From the bold, aromatic Nihari to the comforting warmth of Biryani, our menu features a wide array of dishes that transport your taste buds to the heart of South Asia.
              </p>
              <p className="text-lg">
                Whether you're craving a hearty Karahi, sizzling Kebabs, or fresh vegetarian delights, Banigala brings you the true taste of Pakistan, made from scratch to ensure the highest quality. Transport yourself back home with every bite.
              </p>
            </div>
            <Button
              size="lg"
              onClick={() => console.log('Learn more clicked')}
              data-testid="button-learn-more"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
