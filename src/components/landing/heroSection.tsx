import { Button } from "@/components/ui/button";
import {
  Download,
  Sparkles,
  MessageSquare,
  FileText,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div
          className="absolute top-1/3 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-glow-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-glow-pulse"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary mb-8">
                <Sparkles className="h-3.5 w-3.5" />
                AI-Powered Job Preparation & Search
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-inter font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6"
            >
              Ace Your Interviews.{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Optimize Your CV.
              </span>
              <br />
              Let AI Find Jobs for You.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Jobberflow is an open-source mobile app designed to help job
              seekers prepare, improve, and apply smarter — all in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 h-12 text-base font-inter font-semibold gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                asChild
              >
                <a href="/jobberflow.apk" download="Jobberflow.apk">
                  <Download className="h-4 w-4" />
                  Download App
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 h-12 text-base font-inter font-semibold gap-2"
                asChild
              >
                <a
                  href="https://github.com/ennyolar96/jobberflow-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-4 w-4" />
                  View GitHub
                </a>
              </Button>
            </motion.div>

            {/* Floating feature badges */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 relative"
            >
              <div className="flex flex-wrap items-center gap-3">
                {[
                  {
                    icon: MessageSquare,
                    label: "Mock Interviews",
                    color:
                      "from-violet-500/10 to-purple-500/10 border-violet-200/20",
                  },
                  {
                    icon: Sparkles,
                    label: "Real-Time AI Help",
                    color: "from-blue-500/10 to-cyan-500/10 border-blue-200/20",
                  },
                  {
                    icon: FileText,
                    label: "CV Optimization",
                    color:
                      "from-emerald-500/10 to-green-500/10 border-emerald-200/20",
                  },
                  {
                    icon: Search,
                    label: "AI Job Search",
                    color:
                      "from-orange-500/10 to-amber-500/10 border-orange-200/20",
                  },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-br ${item.color} border backdrop-blur-sm animate-float`}
                    style={{ animationDelay: `${i * 0.8}s` }}
                  >
                    <item.icon className="h-3.5 w-3.5 text-foreground/70" />
                    <span className="text-xs font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="relative glass-card !p-0 !rounded-[2.5rem] overflow-hidden shadow-2xl border-primary/20 bg-primary/5 p-4">
              <img
                src="/hero-mockup.png"
                alt="Authentic Jobberflow App Interface showing AI Assistant"
                className="w-full h-auto rounded-[2rem] transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={500}
                height={500}
              />
            </div>

            {/* Decor elements */}
            <div
              className="absolute -top-6 -right-6 h-24 w-24 bg-accent/20 rounded-full blur-2xl animate-bounce"
              style={{ animationDuration: "4s" }}
            />
            <div
              className="absolute -bottom-10 -left-10 h-32 w-32 bg-primary/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: "6s" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
