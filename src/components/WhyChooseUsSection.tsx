import { motion } from "framer-motion";
import { DollarSign, Zap, Smartphone, Search, HeadphonesIcon, Shield } from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Affordable Pricing", description: "Quality websites at competitive prices. No hidden fees." },
  { icon: Zap, title: "Fast Delivery", description: "Get your website live in as little as 7 days." },
  { icon: Smartphone, title: "Mobile Responsive", description: "Perfect on all devices — phones, tablets, desktops." },
  { icon: Search, title: "SEO Optimized", description: "Built-in SEO so you rank higher on Google." },
  { icon: HeadphonesIcon, title: "Friendly Support", description: "Dedicated support team ready to help anytime." },
  { icon: Shield, title: "Secure & Reliable", description: "SSL, backups, and 24/7 security monitoring." },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-muted/50" aria-labelledby="why-us-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Why Choose Us</p>
          <h2 id="why-us-heading" className="section-title">Why Choose Us</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We combine quality, speed, and affordability to deliver websites that grow your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-400"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <b.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" aria-hidden="true" />
              </div>
              <h3 className="font-bold mb-1.5">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
