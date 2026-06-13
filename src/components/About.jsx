import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { icon: "🌾", title: "Local Ingredients", desc: "Sourced from nearby farms", color: "bg-mint-100 dark:bg-mint-900/30" },
  { icon: "🧑‍🍳", title: "Made by Hand", desc: "Every item, every day", color: "bg-strawberry-100 dark:bg-strawberry-900/30" },
  { icon: "⏰", title: "Baked Fresh", desc: "Morning through evening", color: "bg-lemon-100 dark:bg-lemon-900/30" },
  { icon: "💛", title: "Family Recipes", desc: "Passed down with love", color: "bg-coral-100 dark:bg-coral-900/30" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 bg-cream-50 dark:bg-chocolate-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-mint-200/20 dark:bg-mint-900/10 blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-grape-200/15 dark:bg-grape-900/10 blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}images/Counter.jpg`}
              alt="Barista preparing drinks"
              className="rounded-[2rem] shadow-xl w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-7 -right-7 w-52 h-52 rounded-2xl overflow-hidden shadow-lg border-4 border-cream-50 dark:border-chocolate-900 hidden sm:block">
              <img
                src={`${import.meta.env.BASE_URL}images/ChoclateFudgeCustomerEating.jpg`}
                alt="Customer enjoying a treat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <motion.div
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-7 -left-5 sm:-left-7 bg-gradient-to-br from-strawberry-400 to-coral-500 text-white rounded-2xl px-6 py-5 shadow-xl"
          >
            <p className="font-heading text-3xl font-semibold">6+</p>
            <p className="text-xs font-bold opacity-90 mt-0.5">Years of Flavor</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-strawberry-500 dark:text-strawberry-400 font-bold text-sm tracking-widest uppercase mb-4">
            Who We Are
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-chocolate-800 dark:text-cream-100 mb-7 leading-tight">
            Baked from the Heart,
            <br />
            <span className="text-gradient-candy">Served with Warmth</span>
          </h2>
          <p className="text-chocolate-700/80 dark:text-cream-200/80 leading-relaxed mb-5 font-medium">
            Sweet Cafe opened its doors in 2019 with a simple idea: great
            desserts bring people together. What started with a secondhand oven
            and a family brownie recipe has grown into a beloved neighborhood
            spot.
          </p>
          <p className="text-chocolate-700/80 dark:text-cream-200/80 leading-relaxed mb-10 font-medium">
            We work with local farmers, roast our own coffee, and frost every
            cupcake by hand. No shortcuts, no preservatives — just honest food
            made with care.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-2xl p-5 hover:shadow-md transition-all group cursor-default"
              >
                <span className={`text-2xl block mb-2 group-hover:scale-110 transition-transform inline-block p-2 rounded-xl ${item.color}`}>
                  {item.icon}
                </span>
                <p className="font-bold text-sm text-chocolate-800 dark:text-cream-100 mt-1">
                  {item.title}
                </p>
                <p className="text-xs text-chocolate-700/60 dark:text-cream-200/60 mt-0.5 font-medium">
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
