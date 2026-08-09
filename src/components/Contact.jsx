import { motion } from 'framer-motion';
import { Users, MapPin, Music } from 'lucide-react';

const contactInfo = [
  {
    icon: Users,
    label: 'QQ群',
    value: '958938892',
    href: '#',
  },
  {
    icon: MapPin,
    label: '地址',
    value: '山东省日照市东港区日照职业技术大学',
    href: '#',
  },
  {
    icon: Music,
    label: '抖音官号',
    value: '日职 初光电竞',
    href: '#',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[128px]" />
      </div>

      <div className="container-custom relative z-10 py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span variants={item} className="text-primary text-sm tracking-[0.3em] uppercase">
            Contact Us
          </motion.span>
          <motion.h2 variants={item} className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6">
            <span className="text-white">准备好加入</span>
            <br />
            <span className="text-primary text-glow-lg">初光电竞了吗？</span>
          </motion.h2>
          <motion.div variants={item} className="section-divider mb-8" />
          <motion.p variants={item} className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            无论你是想成为选手、解说、裁判还是赛事组织者，
            <br className="hidden md:block" />
            初光电竞协会都欢迎你的加入。让我们一起书写属于我们的电竞故事。
          </motion.p>

          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                variants={item}
                className="group flex items-center gap-4 p-6 bg-dark-card/50 border border-dark-border rounded-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <info.icon className="w-6 h-6 text-primary group-hover:text-black transition-colors duration-300" />
                </div>
                <div className="text-left">
                  <div className="text-text-muted text-sm mb-1">{info.label}</div>
                  <div className="text-white font-medium group-hover:text-primary transition-colors duration-300">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <a href="#" className="btn-primary text-lg">立即加入</a>
            <a href="#" className="btn-outline text-lg">合作洽谈</a>
          </motion.div>

          <motion.div
            variants={item}
            className="pt-12 border-t border-dark-border"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10">
                  <img src="/logo.png" alt="初光电竞" className="w-full h-full" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">初光电子竞技协会</div>
                  <div className="text-text-muted text-sm">CGUANG ESPORTS ASSOCIATION</div>
                </div>
              </div>
              
              <div className="flex items-center gap-8 text-text-muted text-sm">
                <span>© 2026 初光电竞协会</span>
                <span className="hidden md:block">All Rights Reserved</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
