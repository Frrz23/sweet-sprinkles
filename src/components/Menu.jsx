import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = ["All", "Pastries", "Cakes", "Coffee", "Specials"];

const menuItems = [
  {
    name: "Almond Croissant",
    description: "Flaky, buttery layers filled with almond cream and topped with sliced almonds",
    price: "$4.50",
    category: "Pastries",
    image: `${import.meta.env.BASE_URL}images/FreshlyBakedOnesOnDisplay.jpg`,
    tag: "Bestseller",
    tagColor: "bg-strawberry-500",
  },
  {
    name: "Dark Chocolate Torte",
    description: "Rich, flourless chocolate cake with a velvety ganache and gold leaf finish",
    price: "$42.00",
    category: "Cakes",
    image: `${import.meta.env.BASE_URL}images/ChoclateCake.jpeg`,
    tag: "Popular",
    tagColor: "bg-grape-500",
  },
  {
    name: "Honey Lavender Latte",
    description: "Espresso with house-made lavender syrup and a swirl of raw honey",
    price: "$6.00",
    category: "Coffee",
    image: `${import.meta.env.BASE_URL}images/SittingArea.jpg`,
    tag: "New",
    tagColor: "bg-mint-500",
  },
  {
    name: "Lemon Tart",
    description: "Bright, tangy lemon curd in a crisp shortbread shell with torched meringue",
    price: "$5.50",
    category: "Pastries",
    image: `${import.meta.env.BASE_URL}images/CheeseCake.jpeg`,
    tag: null,
    tagColor: "",
  },
  {
    name: "Berry Cheesecake",
    description: "Creamy New York style cheesecake with a seasonal mixed berry compote",
    price: "$7.00",
    category: "Cakes",
    image: `${import.meta.env.BASE_URL}images/CheeseCake.jpeg`,
    tag: null,
    tagColor: "",
  },
  {
    name: "Pour Over Single Origin",
    description: "Hand-poured Ethiopian Yirgacheffe with notes of jasmine and citrus",
    price: "$5.00",
    category: "Coffee",
    image: `${import.meta.env.BASE_URL}images/CustomerFood.jpg`,
    tag: "Favorite",
    tagColor: "bg-coral-500",
  },
  {
    name: "Raspberry Mille-Feuille",
    description: "Crisp puff pastry layers with vanilla pastry cream and fresh raspberries",
    price: "$6.50",
    category: "Specials",
    image: `${import.meta.env.BASE_URL}images/pastries.png`,
    tag: "Limited",
    tagColor: "bg-lemon-500",
  },
  {
    name: "Carrot Cake",
    description: "Spiced carrot layers with walnuts, raisins, and cream cheese frosting",
    price: "$38.00",
    category: "Cakes",
    image: `${import.meta.env.BASE_URL}images/Muffins.jpeg`,
    tag: null,
    tagColor: "",
  },
];

const categoryColors = {
  All: "bg-chocolate-800 dark:bg-cream-100 text-cream-50 dark:text-chocolate-800",
  Pastries: "bg-strawberry-500 text-white",
  Cakes: "bg-grape-500 text-white",
  Coffee: "bg-coral-500 text-white",
  Specials: "bg-mint-500 text-white",
};

export default function Menu() {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = active === "All" ? menuItems : menuItems.filter((item) => item.category === active);

  return (
    <section
      id="menu"
      ref={ref}
      className="py-28 bg-strawberry-50/30 dark:bg-chocolate-900 relative overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-lemon-200/20 dark:bg-lemon-900/10 blur-[80px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-mint-200/15 dark:bg-mint-900/10 blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-strawberry-500 dark:text-strawberry-400 font-bold text-sm tracking-widest uppercase mb-4">
            What We Serve
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-chocolate-800 dark:text-cream-100 mb-5">
            Explore the <span className="text-gradient-candy">Menu</span>
          </h2>
          <p className="text-chocolate-700/70 dark:text-cream-200/70 max-w-xl mx-auto font-medium">
            A curated selection of pastries, cakes, and coffee, each crafted
            to make your day a little sweeter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                active === cat
                  ? categoryColors[cat]
                  : "bg-white/80 dark:bg-chocolate-800/60 text-chocolate-700 dark:text-cream-200 hover:bg-strawberry-100 dark:hover:bg-grape-900/30 border border-strawberry-200/60 dark:border-grape-800/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-strawberry-200/30 dark:hover:shadow-chocolate-800/30 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700 object-cover"
                />
                {item.tag && (
                  <span className={`absolute top-3 right-3 px-3 py-1 rounded-xl ${item.tagColor} text-white text-xs font-bold shadow-md`}>
                    {item.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading text-lg font-semibold text-chocolate-800 dark:text-cream-100 leading-snug">
                    {item.name}
                  </h3>
                  <span className="font-heading text-lg font-semibold text-strawberry-500 dark:text-strawberry-400 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-chocolate-700/65 dark:text-cream-200/65 leading-relaxed font-medium">
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
