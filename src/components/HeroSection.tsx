import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Web Development Agency</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight">
              Grow Your Business with a{" "}
              <span className="text-primary">Professional Website</span>
            </h1>

            <p className="text-base sm:text-lg text-secondary-foreground/60 max-w-lg mb-8 leading-relaxed">
              We build affordable, modern, fast, and mobile-friendly websites for
              shops, hospitals, schools, restaurants, and startups — designed to
              convert visitors into customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-lg px-8 h-13 text-base bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/25">
                <a href="#contact">
                  Get Your Website Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" className="rounded-lg px-8 h-13 text-base border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
                <a href="#contact">Free Consultation</a>
              </Button>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={heroMockup}
              alt="Professional website mockups on multiple devices"
              className="w-full max-w-lg mx-auto lg:max-w-none"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom wave/curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1440 20 1200 0 720 0C240 0 0 20 0 20L0 60Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
