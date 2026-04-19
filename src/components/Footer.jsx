import { IoLogoInstagram, IoLogoFacebook, IoLogoPinterest, IoHeartSharp } from "react-icons/io5";

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
    <footer className="bg-pink-900 dark:bg-dark-900 text-pink-200/80 pt-16 pb-8" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <img src={`${import.meta.env.BASE_URL}images/Logo.png`} alt="Logo" className="h-8 w-auto object-contain" />
              <span className="font-heading text-xl font-bold text-white">Sweet Sprinkles</span>
            </a>
            <p className="text-sm leading-relaxed mb-6 max-w-xs text-pink-200/60">
              Handcrafted happiness in every bite. Visit us for the freshest
              pastries, artisan cakes, and the warmest smiles in town.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 rounded-full bg-pink-800/50 hover:bg-pink-700/60 text-pink-300 hover:text-white transition-all hover:-translate-y-0.5 text-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group, i) => (
            <div key={i}>
              <h3 className="font-heading text-base font-bold text-white mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-pink-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-pink-800/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-pink-300/50 flex items-center gap-1">
            &copy; {new Date().getFullYear()} Sweet Sprinkles. Made with{" "}
            <IoHeartSharp className="text-pink-500 inline" /> and lots of sugar.
          </p>
          <div className="flex gap-6 text-sm text-pink-300/50">
            <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
