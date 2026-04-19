import { motion } from "framer-motion";

const sprinkles = [
  { color: "#fbbf24", size: 10, top: "12%", left: "8%", delay: 0 },
  { color: "#a78bfa", size: 8, top: "20%", left: "85%", delay: 0.5 },
  { color: "#34d399", size: 12, top: "65%", left: "5%", delay: 1 },
  { color: "#fb923c", size: 9, top: "75%", left: "92%", delay: 1.5 },
  { color: "#f472b6", size: 11, top: "40%", left: "95%", delay: 0.8 },
  { color: "#60a5fa", size: 7, top: "85%", left: "15%", delay: 2 },
  { color: "#f87171", size: 10, top: "10%", left: "50%", delay: 0.3 },
  { color: "#fbbf24", size: 8, top: "55%", left: "78%", delay: 1.2 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
      aria-label="Hero section"
    >
      {/* Floating sprinkle dots */}
      {sprinkles.map((s, i) => (
        <span
          key={i}
          className="sprinkle-dot"
          style={{
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            top: s.top,
            left: s.left,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* Decorative blob */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-pink-300/20 dark:bg-pink-700/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-pink-200/30 dark:bg-pink-800/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-300 font-semibold text-sm mb-6"
          >
            <span>✨</span> Freshly Baked Daily
          </motion.p>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-pink-900 dark:text-pink-100 mb-6">
            Where Every
            <br />
            <span className="text-gradient-pink">Bite is a</span>
            <br />
            Celebration
          </h1>

          <p className="text-lg text-pink-800/70 dark:text-pink-200/70 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed font-body">
            Discover handcrafted cupcakes, artisan cakes, and warm pastries made
            with love, premium ingredients, and just the right amount of
            sprinkles. Your sweetest moments start here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#menu"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold text-base shadow-xl shadow-pink-400/30 hover:shadow-2xl hover:shadow-pink-500/40 transition-shadow"
            >
              Explore Our Menu
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#about"
              className="px-8 py-3.5 rounded-full border-2 border-pink-400 dark:border-pink-600 text-pink-600 dark:text-pink-300 font-bold text-base hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-colors"
            >
              Our Story
            </motion.a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-8 justify-center lg:justify-start">
            {[
              { number: "15K+", label: "Happy Customers" },
              { number: "50+", label: "Unique Flavors" },
              { number: "8", label: "Years of Love" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.15 }}
                className="text-center"
              >
                <p className="font-heading text-2xl font-bold text-pink-600 dark:text-pink-400">
                  {stat.number}
                </p>
                <p className="text-xs text-pink-800/50 dark:text-pink-200/50 font-semibold mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-400/30 to-pink-600/20 blur-2xl scale-110" />
            <img
              src="/images/hero.png"
              alt="Beautiful bakery interior with cupcakes and pastries on display"
              className="relative rounded-3xl shadow-2xl shadow-pink-300/30 dark:shadow-pink-900/30 w-full max-w-lg object-cover aspect-[4/5]"
            />
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 sm:-left-8 glass-card rounded-2xl px-5 py-3 shadow-lg"
            >
              <p className="text-sm font-bold text-pink-700 dark:text-pink-300">⭐ 4.9 Rating</p>
              <p className="text-xs text-pink-600/60 dark:text-pink-300/60">2,800+ reviews</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 sm:-right-8 glass-card rounded-2xl px-5 py-3 shadow-lg"
            >
              <p className="text-2xl">🧁</p>
              <p className="text-xs font-bold text-pink-700 dark:text-pink-300 mt-1">Made Fresh</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
          <path
            d="M0,40 C300,100 900,0 1200,60 L1200,120 L0,120 Z"
            className="fill-cream-50 dark:fill-dark-900"
          />
        </svg>
      </div>
    </section>
  );
}
