import { Mic, Zap, FileText, Search } from "lucide-react";
import FeatureCard from "./featureCard";
import { motion } from "framer-motion";

const features = [
  {
    icon: Mic,
    title: "Mock Interview (AI-Powered)",
    subtitle: "Practice like it's real.",
    bullets: [
      "Simulates real interview scenarios",
      "Personalized based on your CV, job description, company & title",
      "Get real-time feedback and targeted assistance",
    ],
  },
  {
    icon: Zap,
    title: "Real-Time Interview Assistance",
    subtitle: "Your AI co-pilot during interviews.",
    bullets: [
      "Instant suggestions while answering questions",
      "Context-aware, intelligent responses",
      "Powered by advanced AI models",
    ],
    note: "⚠️ Requires OpenAI API Key",
  },
  {
    icon: FileText,
    title: "CV Rewriter",
    subtitle: "Tailor your CV to any job in seconds.",
    bullets: [
      "Upload your CV and paste the job description",
      "Get a job-specific optimized CV instantly",
      "Increase your chances of getting shortlisted",
    ],
  },
  {
    icon: Search,
    title: "AI Job Searcher",
    subtitle: "Let AI find jobs for you.",
    bullets: [
      "Automatically searches jobs based on your profile",
      "Sends curated job opportunities directly to you",
      "Eliminates the need to browse multiple websites",
    ],
    badge: "Coming Soon",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">
            Features
          </span>
          <h2 className="font-inter font-extrabold text-3xl md:text-4xl lg:text-5xl mt-3 tracking-tight">
            Everything you need to land
            <br className="hidden md:block" /> your dream job
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            From interview prep to CV optimization; Jobberflow has you covered
            at every step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
