import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Code2, GitPullRequest } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function OpenSourceSection() {
  return (
    <section id="open-source" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/[0.06] via-accent/[0.04] to-primary/[0.06] border border-primary/10 p-10 md:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-4">
                <Heart className="h-4 w-4" />
                Open Source
              </div>
              <h2 className="font-inter font-extrabold text-3xl md:text-4xl tracking-tight">
                Built by the community,
                <br /> for the community
              </h2>
              <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
                Jobberflow is fully open source. Contributions, feedback, and
                ideas are always welcome. Join us in building the future of job
                preparation.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <Button className="rounded-full gap-2 font-inter" asChild>
                  <a
                    href="https://github.com/ennyolar96/jobberflow-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="h-4 w-4" />
                    Frontend Repo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full gap-2 font-inter"
                  asChild
                >
                  <a
                    href="https://github.com/ennyolar96/jobberflow-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code2 className="h-4 w-4" />
                    Backend Repo
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  icon: GitPullRequest,
                  title: "Contribute Code",
                  desc: "Submit pull requests, fix bugs, or add new features.",
                },
                {
                  icon: Heart,
                  title: "Share Feedback",
                  desc: "Open issues, suggest improvements, or vote on features.",
                },
                {
                  icon: Code2,
                  title: "Fork & Customize",
                  desc: "Adapt Jobberflow to your needs or build upon it.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 glass-card hover:border-primary/30 transition-colors"
                >
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
