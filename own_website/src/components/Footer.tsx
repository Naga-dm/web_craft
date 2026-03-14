import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground" role="contentinfo">
    <div className="container mx-auto px-4 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#" className="font-extrabold text-xl tracking-tight mb-4 block">
            <span className="text-primary">Web</span>Nivo
          </a>
          <p className="text-sm text-secondary-foreground/60 leading-relaxed mb-5">
            Building professional, modern websites for businesses worldwide. From startups to enterprises.
          </p>
          <div className="space-y-2.5">
            <a href="tel:+15551234567" className="flex items-center gap-2.5 text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
              <Phone className="h-4 w-4 text-primary" /> +919074056849
            </a>
            <a href="mailto:hello@webcraft-agency.com" className="flex items-center gap-2.5 text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
              <Mail className="h-4 w-4 text-primary" /> hello@webcraft-agency.com
            </a>
            <p className="flex items-center gap-2.5 text-sm text-secondary-foreground/60">
              <MapPin className="h-4 w-4 text-primary" /> Kochi, Keralam, India
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-sm mb-4">Quick Links</h3>
          <nav aria-label="Footer navigation">
            <ul className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Pricing", href: "#pricing" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h3 className="font-bold text-sm mb-4">Why Choose Us</h3>
          <ul className="space-y-3 text-sm text-secondary-foreground/60">
            <li>Affordable Pricing</li>
            <li>Fast Delivery</li>
            <li>Mobile Responsive</li>
            <li>SEO Optimized</li>
            <li>Friendly Support</li>
            <li>Secure & Reliable</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-sm mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-secondary-foreground/60">
            <li>hello@webcraft-agency.com</li>
            <li>+919074056849</li>
            <li>Kochi, Keralam, India</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4 py-5 text-center">
        <p className="text-xs text-secondary-foreground/40">© {new Date().getFullYear()} WebNivo. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
