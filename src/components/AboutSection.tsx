import { Button } from '@/components/ui/button';
import punjabiFoodImg from '@assets/images/punjabifood.png';
import badshahiImg from '@assets/images/badshahi.png';
import culturalImg from '@assets/images/havaliindian.png';
import culturalImg1 from '@assets/images/havali.png';
import culturalImg2 from '@assets/images/pakfood1.png';
import culturalImg3 from '@assets/images/event.png';
import culturalImg4 from '@assets/images/qila.png';


export default function AboutSection() {
  return (
    <section id="about" className="bg-muted/30">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative">
          <img
            src={punjabiFoodImg}
            alt="Traditional Pakistani Food"
            className="w-full h-[800px] object-cover"
            data-testid="img-food"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-0">
            <img
              src={badshahiImg}
              alt="Badshahi Mosque"
              className="w-full h-full  opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
          </div>
          
          <div className="relative z-10 flex items-center h-[800px] p-8 text-white">
            <div className="mt-8 space-y-6">
              <h2 className="font-serif text-4xl font-bold text-yellow-400 md:text-5xl">
                The Finest Pakistani Cuisine
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  At Banigala, we take immense pride in serving authentic Pakistani cuisine, prepared with the finest ingredients and using traditional cooking methods. Every dish is carefully crafted with fresh, in-house made spices, slow-cooked to perfection, and rooted in the rich culinary traditions of Pakistan. From the bold, aromatic Nihari to the comforting warmth of Biryani, our menu features a wide array of dishes that transport your taste buds to the heart of South Asia. Whether you're craving a hearty Karahi, sizzling Kebabs, or fresh vegetarian delights, Banigala brings you the true taste of Pakistan, made from scratch to ensure the highest quality. Transport yourself back home with every bite.
                </p>
              </div>
              <Button
                size="lg"
                className="px-8 py-3 font-semibold text-white bg-yellow-600 rounded-full hover:bg-yellow-700"
                onClick={() => console.log('About Banigala clicked')}
                data-testid="button-about-banigala"
              >
                About Banigala
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative px-6 py-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${culturalImg})`,
            backgroundAttachment: 'fixed',
          }}
        />
       
       </div>

      {/* //part 2 */}

      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        <div className="relative">
          <div className="absolute inset-0">
            <img
              src={badshahiImg}
              alt="Badshahi Mosque"
              className="object-cover w-full h-full opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
          </div>
          
          <div className="relative z-10 flex items-center h-[800px] p-8 text-white">
            <div className="mt-8 space-y-6">
              <h2 className="font-serif text-4xl font-bold text-yellow-400 md:text-5xl">
                Banigala Resturant and Takeaways
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  At Banigala, we take immense pride in serving authentic Pakistani cuisine, prepared with the finest ingredients and using traditional cooking methods. Every dish is carefully crafted with fresh, in-house made spices, slow-cooked to perfection, and rooted in the rich culinary traditions of Pakistan. From the bold, aromatic Nihari to the comforting warmth of Biryani, our menu features a wide array of dishes that transport your taste buds to the heart of South Asia. Whether you're craving a hearty Karahi, sizzling Kebabs, or fresh vegetarian delights, Banigala brings you the true taste of Pakistan, made from scratch to ensure the highest quality. Transport yourself back home with every bite.
                </p>
              </div>
              <Button
                size="lg"
                className="px-8 py-3 font-semibold text-white bg-yellow-600 rounded-full hover:bg-yellow-700"
                onClick={() => console.log('About Banigala clicked')}
                data-testid="button-about-banigala"
              >
                About Banigala
              </Button>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src={culturalImg2}
            alt="Traditional Pakistani Food"
            className="w-full h-[800px] object-cover"
            data-testid="img-food"
          />
        </div>

      </div>
      
      <div className="relative px-6 py-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${culturalImg2})`,
            backgroundAttachment: 'fixed',
          }}
        />
              </div>

      {/* part 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative">
          <img
            src={culturalImg4}
            alt="Traditional Pakistani Food"
            className="w-full h-[800px] "
            data-testid="img-food"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-0">
            <img
              src={badshahiImg}
              alt="Badshahi Mosque"
              className="object-cover w-full h-full opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
          </div>
          
          <div className="relative z-10 flex items-center h-[800px] p-8 text-white">
            <div className="mt-8 space-y-6">
              <h2 className="font-serif text-4xl font-bold text-yellow-400 md:text-5xl">
                The Finest Pakistani Cuisine
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  At Banigala, we take immense pride in serving authentic Pakistani cuisine, prepared with the finest ingredients and using traditional cooking methods. Every dish is carefully crafted with fresh, in-house made spices, slow-cooked to perfection, and rooted in the rich culinary traditions of Pakistan. From the bold, aromatic Nihari to the comforting warmth of Biryani, our menu features a wide array of dishes that transport your taste buds to the heart of South Asia. Whether you're craving a hearty Karahi, sizzling Kebabs, or fresh vegetarian delights, Banigala brings you the true taste of Pakistan, made from scratch to ensure the highest quality. Transport yourself back home with every bite.
                </p>
              </div>
              <Button
                size="lg"
                className="px-8 py-3 font-semibold text-white bg-yellow-600 rounded-full hover:bg-yellow-700"
                onClick={() => console.log('About Banigala clicked')}
                data-testid="button-about-banigala"
              >
                About Banigala
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative px-6 py-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${culturalImg3})`,
            backgroundAttachment: 'fixed',
          }}
        />
              </div>
      
    </section>
  );
}
