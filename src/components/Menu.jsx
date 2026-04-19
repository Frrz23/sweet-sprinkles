import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = ["All", "Cupcakes", "Cakes", "Pastries", "Cafe"];

const menuItems = [
  {
    name: "Fresh Baked Muffins",
    description: "Soft, warm muffins baked fresh every morning with seasonal berries and a hint of vanilla",
    price: "$4.50",
    category: "Cupcakes",
    image: `${import.meta.env.BASE_URL}images/Muffins.jpeg`,
    badge: "Bestseller",
  },
  {
    name: "Rich Chocolate Cake",
    description: "Decadent dark chocolate layers separated by smooth fudge ganache and topped with chocolate curls",
    price: "$45.00",
    category: "Cakes",
    image: `${import.meta.env.BASE_URL}images/ChoclateCake.jpeg`,
    badge: "Popular",
  },
  {
    name: "Chocolate Truffle",
    description: "Rich, melt-in-your-mouth artisan truffles dusted in premium cocoa powder",
    price: "$3.50",
    category: "Pastries",
    image: `${import.meta.env.BASE_URL}images/ChoclateTruffle.jpeg`,
    badge: null,
  },
  {
    name: "Classic Cheesecake",
    description: "Creamy, smooth New York style cheesecake with a buttery graham cracker crust",
    price: "$6.00",
    category: "Cakes",
    image: `${import.meta.env.BASE_URL}images/CheeseCake.jpeg`,
    badge: "New",
  },
  {
    name: "Custom Wedding Cakes",
    description: "Elegant, multi-tier wedding cakes customized perfectly for your special day",
    price: "From $250",
    category: "Cakes",
    image: `${import.meta.env.BASE_URL}images/WeddingCakes.jpeg`,
    badge: null,
  },
  {
    name: "Matcha Latte",
    description: "Ceremonial-grade matcha whisked with steamed oat milk, subtly sweet",
    price: "$5.50",
    category: "Cafe",
    image: `${import.meta.env.BASE_URL}images/pastries.png`,
    badge: "Favorite",
  },
  {
    name: "Pain au Chocolat",
    description: "Classic French pastry with rich dark chocolate batons and flaky, golden crust",
    price: "$4.00",
    category: "Pastries",
    image: `${import.meta.env.BASE_URL}images/pastries.png`,
    badge: null,
  },
  {
    name: "Vanilla Bean Latte",
    description: "House-made vanilla bean syrup with locally roasted espresso and silky steamed milk",
    price: "$5.00",
    category: "Cafe",
    image: `${import.meta.env.BASE_URL}images/pastries.png`,
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
                  className={`w-full h-full group-hover:scale-110 transition-transform duration-500 ${item.name.includes("Wedding") ? "object-contain bg-pink-50/50 dark:bg-dark-900/50" : "object-cover"}`}
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
