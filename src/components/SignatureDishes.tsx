import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import biryaniImg from '@assets/generated_images/Chicken_Biryani_dish_f86e2a29.png';
import karahiImg from '@assets/generated_images/Chicken_Karahi_dish_b89d05f1.png';
import kebabsImg from '@assets/generated_images/Seekh_Kebabs_dish_57ab143a.png';
import nihariImg from '@assets/generated_images/Nihari_dish_82419548.png';
import naanImg from '@assets/generated_images/Tandoori_Naan_bread_1223d64f.png';
import samosaImg from '@assets/generated_images/Pakistani_Samosas_e554f804.png';

const dishes = [
  {
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice with tender chicken, saffron, and traditional spices',
    image: biryaniImg,
  },
  {
    name: 'Chicken Karahi',
    description: 'Rich tomato-based curry with tender chicken and fresh ginger',
    image: karahiImg,
  },
  {
    name: 'Seekh Kebabs',
    description: 'Grilled minced meat kebabs with aromatic herbs and spices',
    image: kebabsImg,
  },
  {
    name: 'Nihari',
    description: 'Slow-cooked beef curry with rich spices and tender meat',
    image: nihariImg,
  },
  {
    name: 'Tandoori Naan',
    description: 'Fresh baked bread from the tandoor oven, soft and fluffy',
    image: naanImg,
  },
  {
    name: 'Samosas',
    description: 'Crispy pastries filled with spiced potatoes and peas',
    image: samosaImg,
  },
];

export default function SignatureDishes() {
  return (
    <section id="menu" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Signature Dishes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our most beloved dishes, each crafted with authentic recipes and the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`dish-card-${index}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  data-testid={`dish-image-${index}`}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground">{dish.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => console.log('View full menu clicked')}
            data-testid="button-view-full-menu"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
