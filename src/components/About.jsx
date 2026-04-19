import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-cream-50 dark:bg-dark-900 relative overflow-hidden"
      aria-label="About us"
    >
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-pink-200/20 dark:bg-pink-800/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative">
            <img
              src="/images/about.png"
              alt="Baker lovingly preparing cupcakes in our kitchen"
              className="rounded-3xl shadow-xl w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-cream-50 dark:border-dark-900 hidden sm:block">
              <img
                src="/images/cupcakes.png"
                alt="Close-up of our signature cupcakes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Experience badge */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-4 sm:-left-6 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl px-5 py-4 shadow-lg"
          >
            <p className="font-heading text-3xl font-bold">8+</p>
            <p className="text-xs font-semibold opacity-90">Years of Joy</p>
          </motion.div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-pink-500 dark:text-pink-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Our Story
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-pink-900 dark:text-pink-100 mb-6 leading-tight">
            Baked with Love,
            <br />
            <span className="text-gradient-pink">Served with Joy</span>
          </h2>
          <p className="text-pink-800/70 dark:text-pink-200/70 leading-relaxed mb-6 text-base">
            Sweet Sprinkles started in 2018 as a tiny home kitchen with a big
            dream — to bring people together through the magic of freshly baked
            treats. What began with a stand mixer and a passion for buttercream
            has blossomed into the neighborhood's favorite bakery and cafe.
          </p>
          <p className="text-pink-800/70 dark:text-pink-200/70 leading-relaxed mb-8 text-base">
            Every croissant is layered by hand, every cupcake frosted with care,
            and every cake designed to make your celebration unforgettable. We
            source local, organic ingredients because we believe the best flavors
            come from the best beginnings.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🌾", title: "Organic Ingredients", desc: "Locally sourced & fresh" },
              { icon: "🎨", title: "Custom Designs", desc: "Your vision, our craft" },
              { icon: "🕐", title: "Baked Daily", desc: "Fresh every morning" },
              { icon: "💝", title: "Made with Love", desc: "Family recipes, always" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-xl p-4 hover:shadow-md transition-shadow group cursor-default"
              >
                <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform inline-block">
                  {item.icon}
                </span>
                <p className="font-bold text-sm text-pink-800 dark:text-pink-200">
                  {item.title}
                </p>
                <p className="text-xs text-pink-600/60 dark:text-pink-300/60 mt-0.5">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
