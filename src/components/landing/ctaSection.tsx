import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card !bg-primary/5 p-12 md:p-20 relative overflow-hidden"
        >
          {/* Subtle glow inside CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

          <h2 className="relative z-10 font-inter font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Ready to land your{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              dream job?
            </span>
          </h2>
          <p className="relative z-10 text-muted-foreground text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            Download Jobberflow today and start your journey to smarter, faster,
            and more confident job applications.
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button
              size="lg"
              className="rounded-full px-10 h-14 text-base font-inter font-semibold gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
              asChild
            >
              <a href="/jobberflow.apk" download="Jobberflow.apk">
                <Download className="h-5 w-5" />
                Download Now
              </a>
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-base font-inter gap-2 hover:bg-primary/10 transition-colors"
            >
              Follow Onboarding Guide
              <ArrowRight className="h-4 w-4" />
            </Button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
