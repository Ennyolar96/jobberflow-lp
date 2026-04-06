import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function FeatureCard({
  icon: Icon,
  title,
  subtitle,
  bullets,
  note,
  badge,
  index,
}: {
  icon: any;
  title: string;
  subtitle: string;
  bullets: string[];
  note?: string;
  badge?: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative glass-card p-7 md:p-8 hover:border-primary/30 hover:-translate-y-1 hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {badge && (
        <Badge
          variant="secondary"
          className="absolute top-6 right-6 text-xs font-medium"
        >
          {badge}
        </Badge>
      )}

      <div className="h-12 w-12 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/12 transition-colors">
        <Icon className="h-5.5 w-5.5 text-primary" />
      </div>

      <h3 className="font-inter font-bold text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-5">{subtitle}</p>

      <ul className="space-y-2.5">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
            <span className="text-foreground/80">{bullet}</span>
          </li>
        ))}
      </ul>

      {note && (
        <div className="mt-5 px-3.5 py-2.5 rounded-lg bg-muted/60 border border-border/60 text-xs text-muted-foreground">
          {note}
        </div>
      )}
    </motion.div>
  );
}
