import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = ["All", "Cupcakes", "Cakes", "Pastries", "Cafe"];

const menuItems = [
  {
    name: "Rose Velvet Cupcake",
    description: "Moist red velvet with rose-infused cream cheese frosting and edible petals",
    price: "$4.50",
    category: "Cupcakes",
    image: "/images/cupcakes.png",
    badge: "Bestseller",
  },
  {
    name: "Lavender Honey Cake",
    description: "Three layers of lavender sponge with wild honey buttercream and fresh berries",
    price: "$48.00",
    category: "Cakes",
    image: "/images/cake.png",
    badge: "Popular",
  },
  {
    name: "Almond Croissant",
    description: "Flaky, buttery layers filled with almond frangipane, dusted with powdered sugar",
    price: "$5.25",
    category: "Pastries",
    image: "/images/pastries.png",
    badge: null,
  },
  {
    name: "Strawberry Dream Cupcake",
    description: "Fresh strawberry cake with strawberry Swiss meringue buttercream and freeze-dried strawberry dust",
    price: "$4.75",
    category: "Cupcakes",
    image: "/images/cupcakes.png",
    badge: "New",
  },
  {
    name: "Celebration Tier Cake",
    description: "Custom three-tier showstopper with fondant details, available in 20+ flavors",
    price: "From $120",
    category: "Cakes",
    image: "/images/cake.png",
    badge: null,
  },
  {
    name: "Matcha Latte",
    description: "Ceremonial-grade matcha whisked with steamed oat milk, subtly sweet",
    price: "$5.50",
    category: "Cafe",
    image: "/images/pastries.png",
    badge: "Favorite",
  },
  {
    name: "Pain au Chocolat",
    description: "Classic French pastry with rich dark chocolate batons and flaky, golden crust",
    price: "$4.00",
    category: "Pastries",
    image: "/images/pastries.png",
    badge: null,
  },
  {
    name: "Vanilla Bean Latte",
    description: "House-made vanilla bean syrup with locally roasted espresso and silky steamed milk",
    price: "$5.00",
    category: "Cafe",
    image: "/images/pastries.png",
    badge: null,
  },
];

export default function Menu() {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = active === "All" ? menuItems : menuItems.filter((item) => item.category === active);

  return (
    <section
      id="menu"
      ref={ref}
      className="py-24 bg-pink-50 dark:bg-dark-900 relative overflow-hidden"
      aria-label="Our menu"
    >
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-pink-200/15 dark:bg-pink-800/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-pink-500 dark:text-pink-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Our Menu
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-pink-900 dark:text-pink-100 mb-4">
            Taste the <span className="text-gradient-pink">Magic</span>
          </h2>
          <p className="text-pink-800/80 dark:text-pink-200/80 max-w-xl mx-auto">
            From delicate cupcakes to grand celebration cakes, every item is a
            labor of love crafted to perfection.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md shadow-pink-300/40"
                  : "bg-white dark:bg-dark-800 text-pink-700 dark:text-pink-300 hover:bg-pink-100 dark:hover:bg-pink-900/30 border border-pink-200 dark:border-pink-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-pink-200/30 dark:hover:shadow-pink-900/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.badge && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-pink-500 text-white text-xs font-bold shadow-md">
                    {item.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading text-lg font-bold text-pink-900 dark:text-white leading-tight">
                    {item.name}
                  </h3>
                  <span className="font-heading text-lg font-bold text-pink-600 dark:text-pink-300 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-pink-800/80 dark:text-pink-200/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
