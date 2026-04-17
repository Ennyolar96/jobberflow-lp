import { motion } from "framer-motion";
import { Key, Settings, Cpu } from "lucide-react";

export default function ApiSetupSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">
              Setup
            </span>
            <h2 className="font-inter font-extrabold text-3xl md:text-4xl mt-3 tracking-tight">
              API & Setup Requirements
            </h2>
            <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
              To unlock the full power of Jobberflow, you&apos;ll need your own
              API keys. The system automatically selects the best model for each
              task.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Key,
                  title: "OpenAI API Key",
                  desc: "Required for real-time interview assistance and mock interviews.",
                  required: true,
                },
                {
                  icon: Settings,
                  title: "Gemini API Key",
                  desc: "Optional — enables additional AI features and alternative models.",
                  required: false,
                },
                {
                  icon: Cpu,
                  title: "Smart Model Selection",
                  desc: "The system automatically picks the best AI model for each task.",
                  required: false,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 glass-card hover:border-primary/40 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                    <item.icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-inter font-semibold text-sm">
                        {item.title}
                      </h4>
                      {item.required && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Decorative code block */}
            <div className="relative glass-card overflow-hidden !rounded-2xl">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border bg-muted/40">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">
                  setup.config
                </span>
              </div>
              <div className="p-6 font-mono text-sm space-y-3">
                <div className="text-muted-foreground">
                  <span className="text-primary/80">api_keys</span>:
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-emerald-600/80">openai</span>:
                  "sk-••••••••••••"
                  <span className="ml-2 text-xs text-primary/60">
                    ✓ required
                  </span>
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-emerald-600/80">gemini</span>:
                  "AI-••••••••••••"
                  <span className="ml-2 text-xs text-muted-foreground/60">
                    optional
                  </span>
                </div>
                <div className="text-muted-foreground mt-4">
                  <span className="text-primary/80">model_selection</span>:
                  "auto"
                </div>
                <div className="text-muted-foreground">
                  <span className="text-primary/80">encryption</span>:
                  "AES-256-CBC"
                </div>
                <div className="text-muted-foreground">
                  <span className="text-primary/80">storage</span>: {"{"}
                  "api_keys": "server (sqlite)", "others": "local_device"{"}"}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
