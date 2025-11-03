import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import restaurantImg from '@assets/generated_images/Restaurant_dining_experience_c8cad8dd.png';
import cateringImg from '@assets/generated_images/Event_catering_setup_68ead6b5.png';
import venueImg from '@assets/generated_images/Venue_hire_space_0ca20299.png';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      title: "Restaurants",
      description: "Experience the finest Pakistani & Indian cuisine at Banigala, an award-winning restaurant chain. It is a must-visit for those looking to indulge in authentic flavours intertwined with a futuristic, immersive dining ambience, complete with robot waiters, water tables, and stunning indoor waterfalls. Enjoy a truly unforgettable meal and dining experience.",
      buttonText: "View Branches",
      image: restaurantImg
    },
    {
      title: "Event Catering",
      description: "Elevate your special occasions with Banigala, the approved caterers for some of France's most prestigious venues. We can cater for everything from a handful of guests, live barbecues, to functions attended by thousands. Whether it is at one of our own venues or another location across France, let us transform your event into an unforgettable experience through our award-winning cuisine and impeccable service.",
      buttonText: "Catering Services",
      image: cateringImg
    },
    {
      title: "Venue Hire",
      description: "Host your celebrations in Banigala's elegant venues, from our premium suites in Paris to our international location in Pakistan. Enjoy a seamless experience with our award-winning cuisine, exceptional service, and unforgettable ambience, all tailored to your special occasion.",
      buttonText: "Venue Hire",
      image: venueImg
    }
  ];

  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Heading and Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-[#C9A961] text-4xl md:text-5xl font-serif mb-6">
            Award-Winning Cuisine For Every Occasion
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white">
            For over 20 years, Banigala has proudly served France's most authentic Pakistani and Indian cuisine, earning multiple accolades such as Restaurant of the Year, Curry King of the Year, and Brand of the Year. Backed by over 30 years of culinary expertise, our award-winning restaurants and catering service have become a household name for food lovers seeking authentic, flavourful, fresh dishes that transport you to the vibrant streets of Pakistan.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative h-[700px] rounded-lg overflow-hidden group"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 transition-transform duration-500 bg-center bg-cover group-hover:scale-110"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />
              
              {/* Content */}
              <div className="relative flex flex-col justify-end h-full p-8">
                <div>
                  <h3 className="text-[#C9A961] text-3xl font-serif mb-6">
                    {card.title}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-white">
                    {card.description}
                  </p>
                
                  {/* Button */}
                  <button className="bg-[#C9A961] text-white px-8 py-3 rounded-full font-medium hover:bg-[#B89851] transition-colors duration-300">
                    {card.buttonText}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;