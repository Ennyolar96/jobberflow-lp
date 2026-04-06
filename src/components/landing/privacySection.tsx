import { motion } from "framer-motion";
import { Shield, Lock, Eye, Trash2, Fingerprint } from "lucide-react";

const privacyPoints = [
  {
    icon: Lock,
    title: "Encrypted API Keys",
    desc: "Your API keys are encrypted with your password. No one — including us — can access them.",
  },
  {
    icon: Shield,
    title: "Device-Only Storage",
    desc: "Your data is stored securely on your device. Nothing is sent to external servers.",
  },
  {
    icon: Trash2,
    title: "Auto-Deleted History",
    desc: "Mock interview history is temporarily saved and automatically deleted when you exit.",
  },
  {
    icon: Eye,
    title: "Private API Usage",
    desc: "Your API key is used only by you — it never shared with anyone.",
  },
  {
    icon: Fingerprint,
    title: "Unique User ID",
    desc: "A unique User ID is generated for you. Keep it safe for future access.",
  },
];

export default function PrivacySection() {
  return (
    <section id="privacy" className="relative py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">
            Privacy & Security
          </span>
          <h2 className="font-inter font-extrabold text-3xl md:text-4xl lg:text-5xl mt-3 tracking-tight">
            Your data stays yours
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            We take your privacy seriously. Everything is encrypted,
            device-local, and under your control.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {privacyPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex gap-4 p-6 glass-card hover:-translate-y-1 hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center shrink-0">
                <point.icon className="h-4.5 w-4.5 text-primary" />
              </div>
              <div>
                <h3 className="font-inter font-semibold text-sm mb-1">
                  {point.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
