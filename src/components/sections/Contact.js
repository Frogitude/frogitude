import React from "react";
import { motion } from "motion/react";
import { Mail } from "lucide-react";

export default function Contact({ id, content }) {
  return (
    <section id={id} className="py-24 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tightest text-text-primary mb-6 leading-tight break-words">
            <span className="text-gradient">{content.title}</span>
          </h2>
          <p className="text-text-secondary/95 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          {/* Email only */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-effect glass-card-accent rounded-3xl p-8 border border-border-primary hover:shadow-glow-lime flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {content.options?.email || "Email"}
            </h3>
            <p className="text-text-secondary/95 mb-6">
              {content.emailBlurb ||
                "Write me directly via email. I will get back to you shortly."}
            </p>
            <a
              href="mailto:info@frogitude.com"
              className="btn-gradient inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold shadow-glow-lime transition-all duration-300 hover:scale-[1.02] w-fit"
            >
              <Mail className="w-5 h-5" />
              <span>info@frogitude.com</span>
            </a>
          </motion.div>

          {/* Map of Erding */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-effect rounded-3xl p-2 border border-border-primary overflow-hidden hover:shadow-glow-emerald"
          >
            <div className="relative w-full" style={{ paddingBottom: "62.5%" }}>
              <iframe
                title="Erding, Germany"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.739349037263!2d11.906!3d48.306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e0b7f78d5cc53%3A0x3f7a3a68f8b2a6f7!2sErding%2C%20Germany!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
