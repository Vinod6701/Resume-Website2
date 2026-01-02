import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
const Education = () => {
  return <section id="education" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="bg-gradient-to-r from-slate-50 to-white p-8 rounded-2xl border border-slate-200 shadow-lg flex items-center gap-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">B.Tech in Mechanical Engineering</h3>
            <p className="text-lg text-blue-600 font-medium mt-1">St. Martin’s Engineering College, Hyderabad</p>
            <p className="text-slate-500 mt-2">Graduated with distinction</p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Education;
