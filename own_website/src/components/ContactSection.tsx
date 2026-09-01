import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  businessType: z.string().trim().min(1, "Business type is required").max(100),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const businessTypes = ["Shop / Retail", "Hospital / Clinic", "School / College", "Restaurant / Cafe", "Startup", "Corporate", "Other"];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", businessType: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", businessType: "", message: "" });
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="contact" className="py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Get In Touch</p>
          <h2 id="contact-heading" className="section-title">Contact Us</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Tell us about your project and we'll get back to you with a free quote within 24 hours.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-7 space-y-4"
            aria-label="Contact form"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="c-name" className="text-sm font-medium mb-1.5 block">Name</label>
                <Input id="c-name" placeholder="your name" value={form.name} onChange={(e) => update("name", e.target.value)} className={errors.name ? "border-destructive" : ""} />
                {errors.name && <p className="text-xs text-destructive mt-1" role="alert">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="c-email" className="text-sm font-medium mb-1.5 block">Email</label>
                <Input id="c-email" type="email" placeholder="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={errors.email ? "border-destructive" : ""} />
                {errors.email && <p className="text-xs text-destructive mt-1" role="alert">{errors.email}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="c-phone" className="text-sm font-medium mb-1.5 block">Phone</label>
                <Input id="c-phone" placeholder="Mobile/whatsapp" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={errors.phone ? "border-destructive" : ""} />
                {errors.phone && <p className="text-xs text-destructive mt-1" role="alert">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="c-biz" className="text-sm font-medium mb-1.5 block">Business Type</label>
                <select
                  id="c-biz"
                  value={form.businessType}
                  onChange={(e) => update("businessType", e.target.value)}
                  className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.businessType ? "border-destructive" : "border-input"} ${!form.businessType ? "text-muted-foreground" : ""}`}
                >
                  <option value="">Select type</option>
                  {businessTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.businessType && <p className="text-xs text-destructive mt-1" role="alert">{errors.businessType}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="c-msg" className="text-sm font-medium mb-1.5 block">Message</label>
              <Textarea id="c-msg" placeholder="Tell us about your project..." rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} className={errors.message ? "border-destructive" : ""} />
              {errors.message && <p className="text-xs text-destructive mt-1" role="alert">{errors.message}</p>}
            </div>
            <Button type="submit" size="lg" className="w-full rounded-lg h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>

          {/* Right info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-secondary text-secondary-foreground rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">Let's Build Something Great!</h3>
              <p className="text-secondary-foreground/60 mb-8 leading-relaxed">
                Whether you need a brand new website or a redesign, our team is ready to help. Reach out and let's discuss your project.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { icon: MapPin, label: "Kochi, Keralam, India" },
                  { icon: Phone, label: "+919074056849" },
                  { icon: Mail, label: "webnivo.dev@gmail.com" },
                ].map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <p className="text-sm text-secondary-foreground/70">{info.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button asChild className="flex-1 rounded-lg border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                </a>
              </Button>
              <Button asChild className="flex-1 rounded-lg border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
                <a href="mailto:webnivo.dev@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Email
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
