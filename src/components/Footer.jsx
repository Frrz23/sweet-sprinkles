import { IoLogoInstagram, IoLogoFacebook, IoHeartSharp } from "react-icons/io5";

const socialLinks = [
  { icon: <IoLogoInstagram />, label: "Instagram", href: "https://www.instagram.com/sweet_sprinkles2023/" },
  { icon: <IoLogoFacebook />, label: "Facebook", href: "https://www.facebook.com/p/Sweet-Sprinkles-100088856784279/" },
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
    title: "Treats",
    links: [
      { label: "Cupcakes", href: "#menu" },
      { label: "Custom Cakes", href: "#menu" },
      { label: "Pastries", href: "#menu" },
      { label: "Cafe Drinks", href: "#menu" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "#" },
      { label: "Catering", href: "#contact" },
      { label: "Gift Cards", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cream-50 dark:bg-dark-950 text-pink-800/80 dark:text-pink-200/80 pt-24 pb-8 border-t border-pink-100/50 dark:border-dark-800 relative overflow-hidden" aria-label="Footer">
      
      {/* Subtle background blobs for depth */}
      <div className="absolute -left-40 bottom-0 w-96 h-96 rounded-full bg-pink-100/40 dark:bg-pink-900/10 blur-3xl" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-pink-50/60 dark:bg-pink-900/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-8 group pl-2">
              <div className="flex flex-col items-start gap-5">
                <div className="relative group-hover:-translate-y-1.5 transition-transform duration-300">
                  {/* Organic glowing blob behind the logo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/60 dark:bg-pink-900/20 blur-xl rounded-full" />
                  <img 
                    src={`${import.meta.env.BASE_URL}images/Logo.png`} 
                    alt="Logo" 
                    className="relative h-24 w-auto object-contain drop-shadow-md" 
                  />
                </div>
                <span className="font-heading text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-200 tracking-wide">
                  Sweet Sprinkles
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed mb-8 max-w-xs text-pink-700/80 dark:text-pink-300/80 font-medium pl-2">
              Handcrafted happiness in every bite. Your neighborhood bakery for the freshest
              pastries, artisan cakes, and the warmest smiles in town.
            </p>
            <div className="flex gap-4 pl-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3.5 rounded-2xl bg-white dark:bg-dark-900 hover:bg-pink-50 dark:hover:bg-dark-800 text-pink-500 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-all hover:-translate-y-1 shadow-md shadow-pink-100/50 dark:shadow-black/20 border border-pink-50/50 dark:border-dark-800 text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group, i) => (
            <div key={i} className="lg:pt-6">
              <h3 className="font-heading text-lg font-bold text-pink-900 dark:text-white mb-6">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-sm font-semibold text-pink-700/70 dark:text-pink-300/70 hover:text-pink-500 dark:hover:text-pink-400 transition-colors flex items-center gap-2 group/link"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-pink-200/50 dark:border-dark-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-medium text-pink-500 dark:text-pink-400/60 flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Sweet Sprinkles. Made with{" "}
            <IoHeartSharp className="text-pink-500 inline text-base" /> and lots of sugar.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-pink-600/70 dark:text-pink-400/60 bg-white/60 dark:bg-dark-900/50 px-6 py-2.5 rounded-full shadow-sm shadow-pink-100/30">
            <a href="#" className="hover:text-pink-500 dark:hover:text-pink-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pink-500 dark:hover:text-pink-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-pink-500 dark:hover:text-pink-300 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
