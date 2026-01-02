import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: "Cloud Services",
      skills: [
        { name: "AWS (EC2, S3, RDS, IAM)", level: 95 },
        { name: "VPC, CloudFormation", level: 90 },
        { name: "AWS-CLI", level: 85 }
      ]
    },
    {
      category: "DevOps Tools",
      skills: [
        { name: "Jenkins", level: 95 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "Ansible", level: 90 }
      ]
    },
    {
      category: "Version Control",
      skills: [
        { name: "Git", level: 95 },
        { name: "GitHub", level: 95 },
        { name: "SVN", level: 80 }
      ]
    },
    {
      category: "Monitoring & Others",
      skills: [
        { name: "CloudWatch", level: 90 },
        { name: "Apache Tomcat", level: 85 },
        { name: "Linux/Unix", level: 85 },
        { name: "Python Scripting", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive toolset for modern cloud infrastructure and automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border border-slate-100"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (catIndex * 0.1) + (skillIndex * 0.1) }}
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;