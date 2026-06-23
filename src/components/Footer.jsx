import { IoLogoInstagram, IoHeartSharp } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";

const socialLinks = [
  { icon: <IoLogoInstagram />, label: "Instagram", href: "https://www.instagram.com/siteedge12/" },
  { icon: <FaTiktok />, label: "TikTok", href: "https://www.tiktok.com/@siteedge12?lang=en" },
];

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Menu", href: "#menu" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Favorites",
    links: [
      { label: "Pastries", href: "#menu" },
      { label: "Custom Cakes", href: "#menu" },
      { label: "Coffee", href: "#menu" },
      { label: "Specials", href: "#menu" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cream-50 dark:bg-chocolate-900 text-chocolate-700/80 dark:text-cream-200/80 pt-24 pb-8 relative overflow-hidden border-t border-strawberry-200/30 dark:border-strawberry-900/20">
      <div className="absolute -left-48 bottom-0 w-96 h-96 rounded-full bg-strawberry-200/15 dark:bg-strawberry-900/10 blur-[100px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-mint-200/10 dark:bg-mint-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center sm:text-left">
          <div className="lg:col-span-2 flex flex-col items-center sm:items-start">
            <a href="#home" className="inline-block mb-8 group">
              <div className="flex flex-col items-center sm:items-start gap-5">
                <div className="relative group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute inset-0 bg-white/50 dark:bg-cream-100/35 blur-[60px] rounded-full scale-[2]" />
                  <img
                    src={`${import.meta.env.BASE_URL}images/logo2.png`}
                    alt="Sweet Cafe"
                    className="relative h-28 w-auto object-contain drop-shadow-lg dark:brightness-[3] dark:drop-shadow-[0_0_40px_rgba(255,255,255,0.8)]"
                  />
                </div>
                <span className="font-heading text-3xl font-semibold text-chocolate-800 dark:text-cream-100 tracking-wide">
                  Sweet Cafe
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed mb-8 max-w-xs text-center sm:text-left text-chocolate-700/60 dark:text-cream-200/60 font-medium">
              Handmade pastries and specialty coffee in a warm, welcoming space.
              Your go-to neighborhood cafe since 2019.
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3.5 rounded-xl bg-white dark:bg-chocolate-800 hover:bg-strawberry-500 text-chocolate-700 dark:text-cream-200 hover:text-white transition-all hover:-translate-y-1 shadow-md text-xl border border-strawberry-200/40 dark:border-strawberry-800/30"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group, i) => (
            <div key={i} className="lg:pt-6 flex flex-col items-center sm:items-start">
              <h3 className="font-heading text-lg font-semibold text-chocolate-800 dark:text-cream-100 mb-6 text-center sm:text-left">
                {group.title}
              </h3>
              <ul className="space-y-3.5 flex flex-col items-center sm:items-start">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-sm text-chocolate-700/60 dark:text-cream-200/60 hover:text-strawberry-500 dark:hover:text-strawberry-400 transition-colors flex items-center gap-2 group/link font-semibold"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-strawberry-400 opacity-0 group-hover/link:opacity-100 transition-opacity hidden sm:block" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Site-Edge Promo Section */}
        <div className="mt-8 mb-10 glass-card rounded-3xl p-10 text-center relative overflow-hidden shadow-xl shadow-strawberry-200/20 dark:shadow-chocolate-800/30 border border-strawberry-200/20 dark:border-strawberry-800/15">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-strawberry-200/15 dark:bg-strawberry-900/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-grape-200/15 dark:bg-grape-900/10 rounded-full blur-2xl" />
          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-widest mb-3 text-chocolate-700/50 dark:text-cream-200/50">
              Website Designed & Developed By
            </p>
            <a
              href="https://www.site-edge.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <span className="font-heading text-4xl sm:text-5xl font-bold tracking-wide group-hover:scale-105 transition-transform inline-block text-chocolate-800 dark:text-cream-100">
                Site-Edge
              </span>
            </a>
            <p className="mt-4 text-base max-w-lg mx-auto font-medium text-chocolate-700/70 dark:text-cream-200/70">
              Need a stunning website for your business? We craft beautiful, high-performance websites that drive results.
            </p>
            <a
              href="https://www.site-edge.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex px-8 py-3.5 rounded-full bg-strawberry-500 dark:bg-strawberry-600 text-white font-bold text-sm shadow-lg shadow-strawberry-300/40 hover:shadow-xl hover:shadow-strawberry-400/50 hover:-translate-y-0.5 transition-all"
            >
              Get Your Website Built →
            </a>
          </div>
        </div>

        <div className="border-t border-strawberry-200/40 dark:border-strawberry-900/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-chocolate-700/45 dark:text-cream-200/45 flex items-center gap-1.5 font-semibold">
            &copy; {new Date().getFullYear()} Sweet Cafe. Made with{" "}
            <IoHeartSharp className="text-strawberry-500 inline text-base" /> and sprinkles.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-chocolate-700/45 dark:text-cream-200/45 font-semibold">
            <a href="#" className="hover:text-strawberry-500 dark:hover:text-strawberry-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-strawberry-500 dark:hover:text-strawberry-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-strawberry-500 dark:hover:text-strawberry-400 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
