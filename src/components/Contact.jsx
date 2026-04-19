import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoTimeOutline } from "react-icons/io5";

const contactInfo = [
  {
    icon: <IoLocationOutline className="text-2xl" />,
    title: "Visit Us",
    lines: ["123 Blossom Street", "Roseville, CA 95678"],
  },
  {
    icon: <IoCallOutline className="text-2xl" />,
    title: "Call Us",
    lines: ["(916) 555-0142", "Tue - Sun, 7am - 7pm"],
  },
  {
    icon: <IoMailOutline className="text-2xl" />,
    title: "Email Us",
    lines: ["hello@sweetsprinkles.com", "Orders & catering inquiries"],
  },
  {
    icon: <IoTimeOutline className="text-2xl" />,
    title: "Hours",
    lines: ["Tue - Fri: 7am - 7pm", "Sat - Sun: 8am - 8pm"],
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-pink-50 dark:bg-dark-900 relative overflow-hidden"
      aria-label="Contact us"
    >
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-pink-200/15 dark:bg-pink-800/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-pink-500 dark:text-pink-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-pink-900 dark:text-pink-100 mb-4">
            Let&rsquo;s Create Something
            <br />
            <span className="text-gradient-pink">Sweet Together</span>
          </h2>
          <p className="text-pink-800/80 dark:text-pink-200/80 max-w-xl mx-auto">
            Planning a celebration? Craving something special? Drop us a line
            and we&rsquo;ll make your sweetest dreams come true.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form className="glass-card rounded-3xl p-8 sm:p-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-pink-800 dark:text-pink-200 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-dark-800/80 border border-pink-200 dark:border-pink-700 text-pink-900 dark:text-pink-100 placeholder-pink-400/70 dark:placeholder-pink-300/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-pink-800 dark:text-pink-200 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-dark-800/80 border border-pink-200 dark:border-pink-700 text-pink-900 dark:text-pink-100 placeholder-pink-400/70 dark:placeholder-pink-300/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-pink-800 dark:text-pink-200 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-dark-800/80 border border-pink-200 dark:border-pink-700 text-pink-900 dark:text-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                >
                  <option value="">Choose a topic...</option>
                  <option value="custom-cake">Custom Cake Order</option>
                  <option value="catering">Catering & Events</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-pink-800 dark:text-pink-200 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your dream cake, event date, or ask anything..."
                  className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-dark-800/80 border border-pink-200 dark:border-pink-700 text-pink-900 dark:text-pink-100 placeholder-pink-400/70 dark:placeholder-pink-300/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all resize-none"
                />
              </div>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="https://ig.me/m/sweet_sprinkles2023"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold text-base shadow-lg shadow-pink-400/30 hover:shadow-xl hover:shadow-pink-500/40 transition-shadow"
              >
                Send Sweet Message 💌
              </motion.a>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 flex items-start gap-4 group hover:shadow-md transition-all"
              >
                <div className="p-3 rounded-xl bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <p className="font-bold text-pink-900 dark:text-pink-100 mb-1">
                    {info.title}
                  </p>
                  {info.lines.map((line, j) => (
                    <p key={j} className="text-sm text-pink-800/80 dark:text-pink-200/80">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
