import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: '王者荣耀高校联赛',
    category: 'MOBA 赛事',
    desc: '组建校队征战王者荣耀高校联赛，展现团队协作与战术博弈的巅峰对决。',
    image: '/wzry1.jpg',
    featured: true,
  },
  {
    title: '蛋仔派对高校赛',
    category: '休闲竞技',
    desc: '轻松欢乐的派对竞技赛事，全民参与，趣味无穷的校园派对狂欢。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=colorful%20party%20game%20esports%20fun%20cartoon%20style%20neon%20dark%20background&image_size=landscape_4_3',
  },
  {
    title: '星途联赛',
    category: '综合联赛',
    desc: '初光电竞自主打造的综合类电竞联赛，多项目并行，为每一位选手提供闪耀星途。',
    image: '/xingtu.png',
  },
  {
    title: '三角洲行动全国高校赛',
    category: 'FPS 赛事',
    desc: '战术射击类全国高校赛事，FPS 校队出征，硬核对抗，争夺全国荣誉。',
    image: '/sjz.png',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" />
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span variants={item} className="text-primary text-sm tracking-[0.3em] uppercase">
            Featured Projects
          </motion.span>
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            精选<span className="text-primary text-glow">项目</span>
          </motion.h2>
          <motion.div variants={item} className="section-divider mb-8" />
          <motion.p variants={item} className="text-text-secondary text-lg">
            我们主办与承办的精品赛事和项目
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-xl bg-dark-card border border-dark-border card-hover"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-xs uppercase tracking-wider rounded-full">
                    {project.category}
                  </span>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 px-3 py-1 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 text-xs uppercase tracking-wider rounded-full">
                      <Star size={12} fill="currentColor" />
                      旗舰项目
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 lg:p-8">
                <h3 className={`font-semibold mb-3 group-hover:text-primary transition-colors ${
                  project.featured ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                
                <button className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-4 transition-all duration-300">
                  了解详情
                  <ExternalLink size={16} />
                </button>
              </div>

              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-outline">查看更多项目</a>
        </motion.div>
      </div>
    </section>
  );
}
