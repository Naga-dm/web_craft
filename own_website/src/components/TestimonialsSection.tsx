import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Mitchell's Boutique",
    quote: "WebCraft built an amazing e-commerce website for my boutique. Sales went up 40% in the first month! The team was professional and delivered ahead of schedule.",
    rating: 5,
  },
  {
    name: "Dr. James Chen",
    role: "Director, CityHealth Clinic",
    quote: "Our clinic needed a modern website with appointment booking. WebCraft delivered exactly what we needed — patients love the new online booking feature.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Principal, Sunrise Academy",
    quote: "The school website they built is beautiful and easy to manage. Parents and students find all the information they need. Excellent work!",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "CEO, Brown & Associates",
    quote: "Professional, responsive, and SEO-optimized — our corporate website has significantly improved our online presence. Highly recommend!",
    rating: 5,
  },
  {
    name: "Aisha Thompson",
    role: "Founder, FreshBite Cafe",
    quote: "They understood our vision perfectly. Our restaurant website now gets us 3x more online reservations. The design is stunning and fast!",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "CTO, TechStart Inc",
    quote: "Working with WebCraft was seamless. They delivered a sleek corporate site that perfectly represents our brand. Outstanding quality and support!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted/50" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Client Love</p>
          <h2 id="testimonials-heading" className="section-title">What Our Clients Say</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Real feedback from business owners who trusted us with their online presence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-secondary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
