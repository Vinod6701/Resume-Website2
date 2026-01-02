import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const Hero = () => {
  const {
    toast
  } = useToast();
  const handleDownloadResume = () => {
    toast({
      title: "🚧 Feature Coming Soon",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  const handleSocialClick = platform => {
    toast({
      title: "🚧 Feature Coming Soon",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  return <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8
      }}>
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="text-lg font-semibold text-blue-600 mb-2">
            Hello, I'm
          </motion.h2>
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            K. Vinod Kumar
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="text-2xl text-slate-600 mb-6">
            AWS DevOps Engineer
          </motion.p>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5
        }} className="text-lg text-slate-600 mb-8 leading-relaxed">A professional with 5 years of experience as an AWS Cloud and DevOps Engineer, focused on automating, configuring, and deploying instances on cloud environments. Expert in CI/CD, Containerization, and Infrastructure as Code.</motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }} className="flex flex-wrap gap-4 mb-8">
            <Button onClick={handleDownloadResume} className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.7
        }} className="flex gap-4">
            <motion.button whileHover={{
            scale: 1.1,
            y: -2
          }} whileTap={{
            scale: 0.95
          }} onClick={() => handleSocialClick('linkedin')} className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-blue-600">
              <Linkedin size={24} />
            </motion.button>
            <motion.button whileHover={{
            scale: 1.1,
            y: -2
          }} whileTap={{
            scale: 0.95
          }} onClick={() => handleSocialClick('github')} className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-slate-900">
              <Github size={24} />
            </motion.button>
            <motion.button whileHover={{
            scale: 1.1,
            y: -2
          }} whileTap={{
            scale: 0.95
          }} onClick={() => handleSocialClick('email')} className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-blue-600">
              <Mail size={24} />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        x: 50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="relative">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl transform -rotate-3"></div>
            <img className="relative w-full h-full object-cover rounded-2xl shadow-2xl" alt="K. Vinod Kumar, AWS DevOps Engineer" src="https://horizons-cdn.hostinger.com/4156567e-6f7a-4be3-b07d-2332d322e661/img_2934-lwKO4.jpg" />
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;