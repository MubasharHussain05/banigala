import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import restaurantImg from '@assets/generated_images/Restaurant_dining_experience_c8cad8dd.png';
import cateringImg from '@assets/generated_images/Event_catering_setup_68ead6b5.png';
import venueImg from '@assets/generated_images/Venue_hire_space_0ca20299.png';

const services = [
  {
    title: 'Restaurant',
    description: 'Experience authentic Pakistani cuisine in an elegant atmosphere with exceptional service and flavors that transport you to the heart of Pakistan.',
    image: restaurantImg,
    action: 'View Menu',
  },
  {
    title: 'Event Catering',
    description: 'Elevate your special occasions with our bespoke catering services. From intimate gatherings to grand celebrations, we bring authentic flavors to your event.',
    image: cateringImg,
    action: 'Catering Info',
  },
  {
    title: 'Venue Hire',
    description: 'Host your celebrations in our elegant venue spaces. Perfect for weddings, corporate events, and private parties with full-service catering included.',
    image: venueImg,
    action: 'Book Venue',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Award-Winning Cuisine For Every Occasion
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From elegant dining experiences to memorable events, Banigala brings the authentic taste of Pakistan to France
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`service-card-${index}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  data-testid={`service-image-${index}`}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => console.log(`${service.action} clicked`)}
                  data-testid={`button-${service.action.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {service.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
