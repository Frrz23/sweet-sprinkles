import { motion } from "framer-motion";

const dots = [
  { color: "#ff6b9d", size: 14, top: "12%", left: "8%", delay: 0 },
  { color: "#4ecdc4", size: 11, top: "22%", left: "90%", delay: 0.5 },
  { color: "#ffd93d", size: 16, top: "65%", left: "5%", delay: 1 },
  { color: "#9b6dff", size: 10, top: "75%", left: "92%", delay: 1.5 },
  { color: "#ff8c69", size: 12, top: "40%", left: "95%", delay: 0.8 },
  { color: "#ff3d7f", size: 9, top: "88%", left: "15%", delay: 2 },
  { color: "#2bb5a8", size: 13, top: "8%", left: "50%", delay: 0.3 },
  { color: "#ffe54d", size: 10, top: "55%", left: "80%", delay: 1.2 },
  { color: "#b49aff", size: 8, top: "30%", left: "3%", delay: 1.8 },
  { color: "#ffb08a", size: 11, top: "50%", left: "70%", delay: 0.6 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
    >
      {dots.map((d, i) => (
        <span
          key={i}
          className="sprinkle-dot"
          style={{
            width: d.size,
            height: d.size,
            backgroundColor: d.color,
            top: d.top,
            left: d.left,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}

      <div className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full bg-strawberry-200/25 dark:bg-strawberry-900/10 blur-[100px]" />
      <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full bg-mint-200/25 dark:bg-mint-900/10 blur-[100px]" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-lemon-200/20 dark:bg-lemon-900/10 blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-strawberry-100 dark:bg-strawberry-900/30 text-strawberry-600 dark:text-strawberry-300 font-bold text-xs uppercase tracking-wider border border-strawberry-200/50 dark:border-strawberry-700/30">
              <span className="text-base">✨</span> Fresh & Baked Daily
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-grape-100 dark:bg-grape-900/30 text-grape-500 dark:text-grape-300 font-bold text-xs uppercase tracking-wider border border-grape-200/50 dark:border-grape-700/30">
              <span className="text-base">☕</span> Open 7am to 7pm
            </span>
          </motion.div>

          <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl leading-[1.0] text-chocolate-800 dark:text-cream-100 mb-6">
            <span className="text-gradient-candy">Sweet</span>
            <br />
            Moments
            <br />
            <span className="text-gradient-berry">Start Here</span>
          </h1>

          <p className="text-xl text-chocolate-700/65 dark:text-cream-200/65 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
            Cupcakes that make you smile, coffee that warms your soul, and a
            vibe that feels like home. Come hungry, leave happy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#menu"
              className="px-8 py-4 rounded-2xl bg-strawberry-500 dark:bg-strawberry-600 text-white font-bold text-base shadow-xl shadow-strawberry-300/40 hover:shadow-2xl hover:shadow-strawberry-400/50 transition-shadow text-center"
            >
              Explore Our Menu 🧁
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#about"
              className="px-8 py-4 rounded-2xl border-2 border-mint-300 dark:border-mint-500/40 text-mint-600 dark:text-mint-300 font-bold text-base hover:bg-mint-50 dark:hover:bg-mint-900/20 transition-colors text-center"
            >
              Our Story →
            </motion.a>
          </div>

          <div className="mt-14 flex gap-8 justify-center lg:justify-start">
            {[
              { emoji: "🎂", number: "500+", label: "Custom Cakes", light: "bg-strawberry-100", border: "border-strawberry-200/50" },
              { emoji: "⭐", number: "4.9", label: "Star Rating", light: "bg-lemon-100", border: "border-lemon-200/50" },
              { emoji: "🎉", number: "8K+", label: "Events Catered", light: "bg-grape-100", border: "border-grape-200/50" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.15 }}
                className={`flex flex-col items-center ${stat.light} dark:bg-chocolate-800/70 border ${stat.border} dark:border-chocolate-700/50 backdrop-blur-sm rounded-2xl px-5 py-4`}
              >
                <span className="text-xl mb-1">{stat.emoji}</span>
                <p className="font-heading text-xl font-bold text-chocolate-800 dark:text-cream-100">
                  {stat.number}
                </p>
                <p className="text-[11px] text-chocolate-700/60 dark:text-cream-200/60 font-bold uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-strawberry-300/30 to-mint-300/20 blur-3xl scale-110" />
            <img
              src={`${import.meta.env.BASE_URL}images/BakeryItemsOnDisplay.jpg`}
              alt="Bakery display with fresh pastries"
              className="relative rounded-[2rem] shadow-2xl shadow-strawberry-300/30 dark:shadow-chocolate-800/40 w-full max-w-lg object-cover aspect-[4/5]"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-5 sm:-left-10 glass-card rounded-2xl px-5 py-4 shadow-xl"
            >
              <p className="text-sm font-bold text-chocolate-800 dark:text-cream-100">4.8 Stars</p>
              <p className="text-xs text-chocolate-700/50 dark:text-cream-200/50 mt-0.5">1,900+ reviews</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-5 -right-5 sm:-right-10 glass-card rounded-2xl px-5 py-4 shadow-xl"
            >
              <p className="text-2xl">🧁</p>
              <p className="text-xs font-bold text-chocolate-800 dark:text-cream-100 mt-1">Fresh Daily</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
          <path
            d="M0,60 C200,20 400,100 600,50 C800,0 1000,80 1200,40 L1200,120 L0,120 Z"
            className="fill-cream-50 dark:fill-chocolate-900"
          />
        </svg>
      </div>
    </section>
  );
}
