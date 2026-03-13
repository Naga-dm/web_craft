import { motion } from "framer-motion";
import { Globe, ShoppingCart, GraduationCap, HeartPulse, RefreshCw, Wrench } from "lucide-react";

const services = [
  { icon: Globe, title: "Business Website Development", description: "Custom-built professional websites that establish your brand online and drive growth." },
  { icon: ShoppingCart, title: "E-commerce Website Development", description: "Feature-rich online stores with secure payments, inventory, and seamless shopping." },
  { icon: GraduationCap, title: "School & College Websites", description: "Educational platforms with student portals, course listings, and admissions." },
  { icon: HeartPulse, title: "Hospital & Clinic Websites", description: "Healthcare websites with appointment booking, doctor profiles, and patient navigation." },
  { icon: RefreshCw, title: "Website Redesign", description: "Transform your outdated website into a modern, high-performing digital experience." },
  { icon: Wrench, title: "Website Maintenance", description: "Ongoing support, security updates, performance monitoring, and content updates." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        {/* Centered heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">What We Offer</p>
          <h2 id="services-heading" className="section-title">Our Services</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From small shops to large enterprises, we craft websites tailored to your industry and goals.
          </p>
        </motion.div>

        {/* 3-column card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card border border-border rounded-2xl p-7 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <svc.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{svc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
