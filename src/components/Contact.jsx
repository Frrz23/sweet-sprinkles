import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoTimeOutline } from "react-icons/io5";

const contactInfo = [
  {
    icon: <IoLocationOutline className="text-2xl" />,
    title: "Find Us",
    lines: ["42 Maple Avenue", "Portland, OR 97205"],
    color: "bg-strawberry-100 dark:bg-strawberry-900/30 text-strawberry-500",
  },
  {
    icon: <IoCallOutline className="text-2xl" />,
    title: "Ring Us",
    lines: ["(503) 555-0198", "Tue - Sun, 7am - 7pm"],
    color: "bg-mint-100 dark:bg-mint-900/30 text-mint-600",
  },
  {
    icon: <IoMailOutline className="text-2xl" />,
    title: "Write Us",
    lines: ["hello@sweetcafe.com", "Orders & catering"],
    color: "bg-grape-100 dark:bg-grape-900/30 text-grape-500",
  },
  {
    icon: <IoTimeOutline className="text-2xl" />,
    title: "Hours",
    lines: ["Tue - Fri: 7am - 7pm", "Sat - Sun: 8am - 8pm"],
    color: "bg-coral-100 dark:bg-coral-900/30 text-coral-500",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 bg-mint-50/30 dark:bg-chocolate-900 relative overflow-hidden"
    >
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-grape-200/15 dark:bg-grape-900/10 blur-[80px]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-lemon-200/15 dark:bg-lemon-900/10 blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-mint-600 dark:text-mint-400 font-bold text-sm tracking-widest uppercase mb-4">
            Say Hello
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-chocolate-800 dark:text-cream-100 mb-5">
            We&rsquo;d Love to
            <br />
            <span className="text-gradient-candy">Hear From You</span>
          </h2>
          <p className="text-chocolate-700/70 dark:text-cream-200/70 max-w-xl mx-auto font-medium">
            Got a question, a special request, or just want to say hi?
            Drop us a message and we&rsquo;ll get back to you soon.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form className="glass-card rounded-[2rem] p-8 sm:p-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-chocolate-800 dark:text-cream-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/60 dark:bg-chocolate-800/60 border border-strawberry-200/60 dark:border-grape-800/30 text-chocolate-800 dark:text-cream-100 placeholder-chocolate-700/30 dark:placeholder-cream-200/30 focus:outline-none focus:ring-2 focus:ring-strawberry-400 dark:focus:ring-grape-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-chocolate-800 dark:text-cream-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/60 dark:bg-chocolate-800/60 border border-strawberry-200/60 dark:border-grape-800/30 text-chocolate-800 dark:text-cream-100 placeholder-chocolate-700/30 dark:placeholder-cream-200/30 focus:outline-none focus:ring-2 focus:ring-strawberry-400 dark:focus:ring-grape-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-chocolate-800 dark:text-cream-200 mb-2">
                  Topic
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/60 dark:bg-chocolate-800/60 border border-strawberry-200/60 dark:border-grape-800/30 text-chocolate-800 dark:text-cream-100 focus:outline-none focus:ring-2 focus:ring-strawberry-400 dark:focus:ring-grape-500 focus:border-transparent transition-all"
                >
                  <option value="">Pick a topic...</option>
                  <option value="custom-cake">Custom Cake</option>
                  <option value="catering">Catering & Events</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-chocolate-800 dark:text-cream-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us what's on your mind..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/60 dark:bg-chocolate-800/60 border border-strawberry-200/60 dark:border-grape-800/30 text-chocolate-800 dark:text-cream-100 placeholder-chocolate-700/30 dark:placeholder-cream-200/30 focus:outline-none focus:ring-2 focus:ring-strawberry-400 dark:focus:ring-grape-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl bg-strawberry-500 dark:bg-strawberry-600 text-white font-bold text-base shadow-lg shadow-strawberry-300/40 hover:shadow-xl hover:shadow-strawberry-400/50 transition-shadow"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

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
                className="glass-card rounded-2xl p-6 flex items-start gap-5 group hover:shadow-md transition-all"
              >
                <div className={`p-3.5 rounded-xl ${info.color} group-hover:scale-110 transition-transform`}>
                  {info.icon}
                </div>
                <div>
                  <p className="font-bold text-chocolate-800 dark:text-cream-100 mb-1">
                    {info.title}
                  </p>
                  {info.lines.map((line, j) => (
                    <p key={j} className="text-sm text-chocolate-700/65 dark:text-cream-200/65 font-medium">
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
