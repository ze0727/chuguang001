import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300F0FF;stop-opacity:0.1'/%3E%3Cstop offset='100%25' style='stop-color:%230A0A0A;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/50 via-dark-bg/70 to-dark-bg" />
        <div className="absolute inset-0 grid-bg opacity-60" />
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[96px] animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="relative z-10 container-custom text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-white">初光电子竞技</span>
          <span className="block text-primary text-glow-lg mt-2">协会</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          CGUANG ESPORTS · 集结热爱 · 铸就辉煌
          <br />
          以电竞为媒，以拼搏为魂
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#contact" className="btn-primary text-base">
            加入我们
          </a>
          <a href="#about" className="btn-outline text-base">
            了解更多
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-text-muted hover:text-primary transition-colors z-10"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.a>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent z-10" />
    </section>
  );
}
