import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { IoStarSharp, IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const reviews = [
  {
    name: "Emily Rodriguez",
    role: "Wedding Client",
    text: "Sweet Sprinkles made our wedding cake an absolute masterpiece. Not only was it stunning to look at, but every guest raved about the flavor. The lavender honey tier was heavenly!",
    rating: 5,
    avatar: "🤵‍♀️",
  },
  {
    name: "James Chen",
    role: "Regular Customer",
    text: "I come here every Saturday morning for their almond croissants and a matcha latte. It's the perfect start to my weekend. The staff remembers my order — that's how you know it's special.",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    name: "Sofia Martinez",
    role: "Birthday Celebration",
    text: "Ordered a custom birthday cake for my daughter's 5th birthday. The unicorn design was incredible and the red velvet flavor was the best I've ever had. She still talks about it!",
    rating: 5,
    avatar: "👩",
  },
  {
    name: "Alex Thompson",
    role: "Corporate Event",
    text: "We've been ordering cupcake towers for our office events for two years now. Always professional, always delicious, and the variety is unmatched. The team absolutely loves them.",
    rating: 5,
    avatar: "🧑‍💻",
  },
  {
    name: "Priya Patel",
    role: "Cafe Regular",
    text: "The coziest cafe in town! Their rose velvet cupcakes are otherworldly. I've tried to find better — trust me, it doesn't exist. The pink decor is just the cherry on top.",
    rating: 5,
    avatar: "👩‍🎨",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoplay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
    setIsAutoplay(false);
  };
  const prev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoplay(false);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 bg-cream-50 dark:bg-dark-900 relative overflow-hidden"
      aria-label="Customer testimonials"
    >
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-pink-200/20 dark:bg-pink-800/10 blur-3xl" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-pink-500 dark:text-pink-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-pink-900 dark:text-pink-100 mb-4">
            Sweet Words from
            <br />
            <span className="text-gradient-pink">Sweet People</span>
          </h2>
        </motion.div>

        {/* Review Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto relative">
            {/* Big quote mark */}
            <span className="absolute top-4 left-8 text-6xl text-pink-300/30 dark:text-pink-700/30 font-heading leading-none">
              &ldquo;
            </span>

            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: reviews[current].rating }).map((_, i) => (
                  <IoStarSharp key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>

              <p className="text-lg sm:text-xl text-pink-800/80 dark:text-pink-200/80 leading-relaxed mb-8 italic font-body">
                &ldquo;{reviews[current].text}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">{reviews[current].avatar}</span>
                <div className="text-left">
                  <p className="font-bold text-pink-900 dark:text-pink-100">
                    {reviews[current].name}
                  </p>
                  <p className="text-sm text-pink-600/60 dark:text-pink-300/60">
                    {reviews[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2.5 rounded-full bg-pink-100 dark:bg-pink-900/40 hover:bg-pink-200 dark:hover:bg-pink-800/60 transition-colors text-pink-600 dark:text-pink-300"
              aria-label="Previous testimonial"
            >
              <IoChevronBackOutline className="text-lg" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrent(i);
                    setIsAutoplay(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-pink-500"
                      : "w-2 bg-pink-300 dark:bg-pink-700 hover:bg-pink-400"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2.5 rounded-full bg-pink-100 dark:bg-pink-900/40 hover:bg-pink-200 dark:hover:bg-pink-800/60 transition-colors text-pink-600 dark:text-pink-300"
              aria-label="Next testimonial"
            >
              <IoChevronForwardOutline className="text-lg" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
