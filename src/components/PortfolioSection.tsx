import { motion } from "framer-motion";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioHospital from "@/assets/portfolio-hospital.jpg";
import portfolioSchool from "@/assets/portfolio-school.jpg";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioCorporate from "@/assets/portfolio-corporate.jpg";

const projects = [
  { image: portfolioEcommerce, title: "E-commerce Store", tag: "Online Shop" },
  { image: portfolioHospital, title: "Healthcare Portal", tag: "Hospital" },
  { image: portfolioCorporate, title: "Corporate Website", tag: "Business" },
  { image: portfolioSchool, title: "Education Platform", tag: "School" },
  { image: portfolioRestaurant, title: "Restaurant Site", tag: "Food & Dining" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-muted/50" aria-labelledby="portfolio-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Our Work</p>
          <h2 id="portfolio-heading" className="section-title">Portfolio</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Explore the types of projects we've built for businesses across different industries.
          </p>
        </motion.div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={`${project.title} website mockup`}
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5 md:p-6">
                <div>
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/20 rounded-full px-3 py-1 mb-2">{project.tag}</span>
                  <h3 className="text-secondary-foreground font-bold text-lg">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
