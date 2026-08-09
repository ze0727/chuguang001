import { motion } from 'framer-motion';
import { Users, Target, Zap, Gamepad2, ClipboardList, Palette, Video, ShieldCheck, Mic, Crosshair } from 'lucide-react';

const departments = [
  {
    icon: Gamepad2,
    name: '竞赛部',
    desc: '开展游戏直播、组建王者荣耀类校队、参加比赛及打游戏素材制作。',
  },
  {
    icon: ClipboardList,
    name: '组织部',
    desc: '承担比赛现场布置、裁判工作及队伍分配。',
  },
  {
    icon: Palette,
    name: '宣传部',
    desc: '负责cosplay、海报、板绘、摊位设计及比赛宣传。',
  },
  {
    icon: Video,
    name: '运营部',
    desc: '运营初光电竞官号，进行剪辑和拍摄工作。',
  },
  {
    icon: ShieldCheck,
    name: '防沉迷部',
    desc: '开展防沉迷工作与比赛策划。',
  },
  {
    icon: Mic,
    name: '播音部',
    desc: '负责活动比赛主持、解说和配音。',
  },
  {
    icon: Crosshair,
    name: 'FPS部',
    desc: '组建FPS类型游戏校队、进行主机游戏测评游玩及开展周六电竞小屋活动。',
  },
];

const stats = [
  { value: '500+', label: '社团成员' },
  { value: '50+', label: '承办赛事' },
  { value: '10+', label: '合作高校' },
  { value: '98%', label: '活动满意度' },
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

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.span variants={item} className="text-primary text-sm tracking-[0.3em] uppercase">
            About Us
          </motion.span>
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            关于<span className="text-primary text-glow">初光电竞</span>
          </motion.h2>
          <motion.div variants={item} className="section-divider mb-8" />
          <motion.p variants={item} className="text-text-secondary text-lg leading-relaxed">
            初光电子竞技协会成立于热爱与梦想，致力于打造专业的校园电竞生态。我们汇聚高校电竞爱好者，
            通过系统化的训练、专业化的赛事运营，推动电竞运动的健康发展，培养未来的电竞行业人才。
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative p-8 bg-dark-card border border-dark-border rounded-lg card-hover"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <dept.icon className="w-7 h-7 text-primary group-hover:text-black transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {dept.name}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {dept.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={item} className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">我们的使命</h4>
                <p className="text-text-secondary leading-relaxed">
                  推广电竞文化，搭建高校电竞交流平台，培养具有专业素养的电竞选手与行业从业者。
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">我们的愿景</h4>
                <p className="text-text-secondary leading-relaxed">
                  成为国内领先的高校电竞组织，推动电竞运动的专业化、规范化发展。
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">我们的价值观</h4>
                <p className="text-text-secondary leading-relaxed">
                  团结、拼搏、创新、专业。以竞技精神追求卓越，以团队合作共创辉煌。
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="relative">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-8 bg-dark-card border border-dark-border rounded-lg text-center ${
                    index % 3 === 0 ? 'lg:col-span-1' : ''
                  }`}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary text-glow mb-2">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10 blur-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
