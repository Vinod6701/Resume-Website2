import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Siemens Technology Software",
      position: "AWS DevOps Engineer",
      location: "Hybrid / Remote",
      period: "Dec 2023 - Present",
      responsibilities: [
        "Responsible for Continuous Integration (CI) and Continuous Delivery (CD) process implementation using Jenkins.",
        "Managed and optimized AWS cloud infrastructure components.",
        "Implemented containerization strategies using Docker and orchestration with Kubernetes.",
        "Collaborated with development teams to streamline deployment processes and improve system reliability."
      ]
    },
    {
      company: "Infosys",
      position: "AWS DevOps Engineer",
      location: "India",
      period: "Nov 2020 - Nov 2023",
      responsibilities: [
        "Worked on AWS Cloud services including EC2, S3, RDS, and IAM for secure and scalable infrastructure.",
        "Created and maintained Jenkins pipelines for automated build and deployment.",
        "utilized Ansible for configuration management and automation of server setups.",
        "Managed version control systems using Git and GitHub for team collaboration.",
        "Supporting infrastructure for projects like Bombardier Transportation and IHS Infra Transformations."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="text-blue-600" size={20} />
                    <h3 className="text-2xl font-bold text-slate-900">{exp.position}</h3>
                  </div>
                  <p className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.05) }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 leading-relaxed">{resp}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;