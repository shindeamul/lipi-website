import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Youtube, Facebook, Instagram, Mail, Phone } from "lucide-react";

const footerLinks = {
  aboutUs: {
    title: "ABOUT US",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  helpSupport: {
    title: "HELP & SUPPORT",
    links: [
      { label: "FAQs", href: "#faqs" },
    ],
  },
  privacyTerms: {
    title: "PRIVACY & TERMS",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms & Conditions", href: "#terms" },
    ],
  },
  privacyKids: {
    title: "PRIVACY & TERMS - LIPI KIDS",
    links: [
      { label: "Privacy Policy", href: "#kids-privacy" },
      { label: "Terms & Conditions", href: "#kids-terms" },
      { label: "Cancellation & Refund", href: "#refund" },
      { label: "Shipping & Delivery", href: "#shipping" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
};

const socialLinks = [
  { icon: Youtube, label: "YouTube", href: "https://youtube.com", color: "text-red-500" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com", color: "text-blue-500" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "text-pink-500" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-deep-navy overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-8">
        {/* Top Section - CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-elegant text-foreground/90 mb-2">
            Discover the joy of words.
          </h3>
          <p className="text-foreground/60 text-lg">Get in touch today.</p>
          
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="mailto:contact@lipigames.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground/10 hover:bg-foreground/20 border border-foreground/20 rounded-lg transition-colors text-foreground/80"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +1 (234) 567-890
            </a>
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-gold font-semibold text-sm mb-4 tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-foreground/60 hover:text-foreground/90 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gold font-semibold text-sm mb-4 tracking-wide">
              SOCIAL MEDIA PLATFORMS
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground/90 text-sm transition-colors"
                  >
                    <social.icon className={`w-4 h-4 ${social.color}`} />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-6 border-t border-foreground/10 text-foreground/40 text-sm"
        >
          © 2024 Lipi Inc. All Rights Reserved.
        </motion.div>
      </div>

      {/* Large Branding Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.08, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden"
      >
        <div className="text-[15vw] md:text-[12vw] font-bold text-foreground leading-none tracking-tighter text-center translate-y-[20%]">
          LIPI GAMES
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
