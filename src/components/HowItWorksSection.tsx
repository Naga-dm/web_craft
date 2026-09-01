import { motion } from "framer-motion";
import { MessageCircle, FileText, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Contact Us", description: "Reach out via our form, WhatsApp, or email.", num: "01" },
  { icon: FileText, title: "Share Requirements", description: "We discuss your needs, audience, and budget.", num: "02" },
  { icon: Code2, title: "We Design & Develop", description: "Our team crafts a stunning responsive website.", num: "03" },
  { icon: Rocket, title: "Launch Your Website", description: "After approval, we launch and provide support.", num: "04" },
];

const HowItWorksSection = () => {
  return (
    <section id="process" className="py-20 md:py-28" aria-labelledby="process-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Simple Process</p>
          <h2 id="process-heading" className="section-title">How It Works</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A simple 4-step process to get your professional website up and running.
          </p>
        </motion.div>

        {/* 4-column horizontal steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="text-center relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-[2px] border-t-2 border-dashed border-primary/30" aria-hidden="true" />
              )}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 relative z-10">
                <step.icon className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
