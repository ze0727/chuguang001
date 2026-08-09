import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: '首页', href: '#hero' },
  { name: '关于我们', href: '#about' },
  { name: '精选项目', href: '#projects' },
  { name: '精彩视频', href: '#videos' },
  { name: '社团优势', href: '#advantages' },
  { name: '联系我们', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark-bg/90 backdrop-blur-xl border-b border-dark-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <img
                src="/logo.png"
                alt="初光电竞"
                className="w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-wider">初光电竞</span>
              <span className="text-text-muted text-xs tracking-widest">CHUGUANG ESPORTS</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-text-secondary hover:text-white transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="#contact" className="btn-outline text-sm">加入我们</a>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 bottom-0 z-40 bg-dark-bg/98 backdrop-blur-xl lg:hidden"
          >
            <div className="container-custom pt-20 flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-medium text-text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="btn-primary mt-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                加入我们
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
