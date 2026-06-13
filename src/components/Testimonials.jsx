import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { IoStarSharp, IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const reviews = [
  {
    name: "Olivia Grant",
    role: "Regular since 2020",
    text: "Best cafe in the city, hands down. The almond croissants are unreal — crispy outside, soft inside. I stop by every morning before work and the staff always remembers my name.",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    name: "Marcus Lee",
    role: "Birthday Order",
    text: "Ordered a custom birthday cake and it exceeded every expectation. The design was gorgeous and the flavor was incredible. My whole family was impressed.",
    rating: 5,
    avatar: "👨‍🍳",
  },
  {
    name: "Aisha Patel",
    role: "Weekend Visitor",
    text: "The honey lavender latte is my go-to. Such a cozy atmosphere — I bring my laptop here every Saturday. The pastries pair perfectly with their coffee.",
    rating: 5,
    avatar: "👩‍🎨",
  },
  {
    name: "Daniel Foster",
    role: "Corporate Events",
    text: "We order catering from Sweet Cafe for all our office events. Consistent quality, great presentation, and the team is always professional. Highly recommend.",
    rating: 5,
    avatar: "🧑‍💻",
  },
  {
    name: "Nina Kowalski",
    role: "Wedding Client",
    text: "Our wedding dessert table was a dream. The mini tarts, the cake, the macarons — every single item was perfect. Our guests are still raving about it months later.",
    rating: 5,
    avatar: "👰",
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
    }, 5500);
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
      className="py-28 bg-cream-50 dark:bg-chocolate-900 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-grape-200/15 dark:bg-grape-900/10 blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-coral-200/15 dark:bg-coral-900/10 blur-[80px]" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-grape-500 dark:text-grape-400 font-bold text-sm tracking-widest uppercase mb-4">
            What People Say
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-chocolate-800 dark:text-cream-100 mb-5">
            Words That
            <br />
            <span className="text-gradient-berry">Warm Our Hearts</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card rounded-[2rem] p-8 sm:p-12 text-center max-w-3xl mx-auto relative">
            <span className="absolute top-5 left-8 text-7xl text-strawberry-200/40 dark:text-grape-700/30 font-heading leading-none select-none">
              &ldquo;
            </span>

            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center gap-1.5 mb-6">
                {Array.from({ length: reviews[current].rating }).map((_, i) => (
                  <IoStarSharp key={i} className="text-lemon-400 text-lg" />
                ))}
              </div>

              <p className="text-lg sm:text-xl text-chocolate-700/75 dark:text-cream-200/75 leading-relaxed mb-8 italic font-medium">
                &ldquo;{reviews[current].text}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl">{reviews[current].avatar}</span>
                <div className="text-left">
                  <p className="font-bold text-chocolate-800 dark:text-cream-100">
                    {reviews[current].name}
                  </p>
                  <p className="text-sm text-chocolate-700/50 dark:text-cream-200/50 font-semibold">
                    {reviews[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-5 mt-10">
            <button
              onClick={prev}
              className="p-3 rounded-xl bg-strawberry-100/60 dark:bg-grape-900/30 hover:bg-strawberry-200/80 dark:hover:bg-grape-800/40 transition-colors text-chocolate-700 dark:text-cream-200"
              aria-label="Previous review"
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
                  className={`h-2 rounded-full transition-all duration-400 ${
                    i === current
                      ? "w-8 bg-strawberry-500 dark:bg-strawberry-400"
                      : "w-2 bg-strawberry-200 dark:bg-grape-700 hover:bg-strawberry-300"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-xl bg-strawberry-100/60 dark:bg-grape-900/30 hover:bg-strawberry-200/80 dark:hover:bg-grape-800/40 transition-colors text-chocolate-700 dark:text-cream-200"
              aria-label="Next review"
            >
              <IoChevronForwardOutline className="text-lg" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
