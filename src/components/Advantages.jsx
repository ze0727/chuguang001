import { motion } from 'framer-motion';
import { Shield, Users, Cpu, Sparkles } from 'lucide-react';

const advantages = [
  {
    icon: Shield,
    title: '专业运营',
    desc: '拥有丰富的赛事运营经验，专业的组织管理团队，确保每一场活动的高质量执行。',
    stat: '50+',
    statLabel: '成功案例',
  },
  {
    icon: Users,
    title: '精英团队',
    desc: '核心团队由资深电竞从业者、职业选手及行业专家组成，具备全球化视野。',
    stat: '30+',
    statLabel: '专业导师',
  },
  {
    icon: Cpu,
    title: '技术领先',
    desc: '采用先进的赛事管理系统与直播技术，提供稳定流畅的观赛体验。',
    stat: '99.9%',
    statLabel: '系统稳定性',
  },
  {
    icon: Sparkles,
    title: '创新驱动',
    desc: '持续探索电竞+教育、电竞+文化的创新模式，引领高校电竞发展新趋势。',
    stat: '15+',
    statLabel: '创新项目',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Advantages() {
  return (
    <section id="advantages" className="section-padding bg-dark-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span variants={item} className="text-primary text-sm tracking-[0.3em] uppercase">
            Our Advantages
          </motion.span>
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            社团<span className="text-primary text-glow">优势</span>
          </motion.h2>
          <motion.div variants={item} className="section-divider mb-8" />
          <motion.p variants={item} className="text-text-secondary text-lg">
            四大核心优势，构筑专业电竞生态
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative p-8 lg:p-10 bg-dark-card border border-dark-border rounded-xl card-hover overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <adv.icon className="w-7 h-7 text-primary group-hover:text-black transition-colors duration-300" />
                  </div>
                  
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary text-glow">{adv.stat}</div>
                    <div className="text-xs text-text-muted uppercase tracking-wider">{adv.statLabel}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {adv.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {adv.desc}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
