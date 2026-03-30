import { Link } from 'react-router-dom';
import { Video as LucideIcon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  link?: string;
}

export default function ServiceCard({ icon: Icon, title, description, delay = 0, link = '/services' }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card group"
    >
      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-accent-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-accent-primary" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed mb-4">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:gap-3 transition-all"
      >
        En savoir plus <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}
