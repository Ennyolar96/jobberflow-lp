import { motion } from "framer-motion";
import { Download, UserCheck, Key, Rocket } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Download & Install",
    description:
      "Get the app from your preferred store and install it on your device.",
  },
  {
    icon: UserCheck,
    title: "Complete Onboarding",
    description:
      "Set up your profile with your CV, preferences, and career goals.",
  },
  {
    icon: Key,
    title: "Add Your API Keys",
    description: "Enter your OpenAI and optional Gemini API keys securely.",
  },
  {
    icon: Rocket,
    title: "Start Preparing",
    description: "Practice interviews, optimize your CV, and apply smarter.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">
            How It Works
          </span>
          <h2 className="font-inter font-extrabold text-3xl md:text-4xl lg:text-5xl mt-3 tracking-tight">
            Up and running in minutes
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Four simple steps to start your smarter job search journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center"
            >
              {/* Step number */}
              <div className="relative inline-flex mb-6">
                <div className="h-16 w-16 glass-card flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>

              <h3 className="font-inter font-bold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (hidden on last item and mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px border-t-2 border-dashed border-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
