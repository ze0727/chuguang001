import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

const videos = [
  {
    title: '仿无畏契约',
    cover: 'logo.png',
    src: '/video/video1.mp4',
  },
  {
    title: '我的世界',
    cover: 'logo.png',
    src: '/video/video2.mp4',
  },
  {
    title: '仿三角洲登录',
    cover: 'logo.png',
    src: '/video/video3.mp4',
  },
  {
    title: '无畏契约',
    cover: 'logo.png',
    src: '/video/video4.mp4',
  },
  {
    title: '王从天降',
    cover: 'logo.png',
    src: '/video/video5.mp4',
  },
  {
    title: '2025迎新赛',
    cover: 'logo.png',
    src: '/video/video6.mp4',
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

// 格式化秒数为 MM:SS
function formatDuration(seconds) {
  if (!seconds || isNaN(seconds)) return '--:--';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// 单个视频卡片，自动读取视频时长
function VideoCard({ video, index, onPlay }) {
  const [duration, setDuration] = useState('--:--');
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const handleLoadedMetadata = () => {
      setDuration(formatDuration(v.duration));
    };

    v.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => v.removeEventListener('loadedmetadata', handleLoadedMetadata);
  }, []);

  return (
    <motion.div
      variants={item}
      className="group relative overflow-hidden rounded-xl bg-dark-card border border-dark-border card-hover cursor-pointer"
      onClick={() => onPlay(video)}
    >
      {/* 隐藏的 video 元素，仅用于读取时长 */}
      <video ref={videoRef} src={video.src} preload="metadata" className="hidden" />

      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.cover}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/30 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <Play className="w-7 h-7 text-primary group-hover:text-black ml-1" fill="currentColor" />
          </div>
        </div>

        <div className="absolute bottom-4 right-4">
          <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded">
            {duration}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
          {video.title}
        </h3>
      </div>

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="videos" className="section-padding bg-dark-bg relative overflow-hidden">
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
            Video Showcase
          </motion.span>
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            往期<span className="text-primary text-glow">精彩视频</span>
          </motion.h2>
          <motion.div variants={item} className="section-divider mb-8" />
          <motion.p variants={item} className="text-text-secondary text-lg">
            回顾赛场高光时刻，感受电竞热血瞬间
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} index={index} onPlay={setActiveVideo} />
          ))}
        </motion.div>
      </div>

      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              onClick={() => setActiveVideo(null)}
            >
              <X size={32} />
            </button>
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-dark-border">
              <video
                autoPlay
                controls
                className="w-full h-full"
                src={activeVideo.src}
              >
                您的浏览器不支持视频播放
              </video>
            </div>
            <h3 className="text-center text-xl font-semibold mt-6">{activeVideo.title}</h3>
          </div>
        </motion.div>
      )}
    </section>
  );
}
