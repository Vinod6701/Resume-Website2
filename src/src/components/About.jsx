import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Cpu, Shield } from 'lucide-react';
const About = () => {
  const highlights = [{
    icon: <Cloud className="w-6 h-6" />,
    title: "AWS Expert",
    description: "Extensive experience with EC2, S3, RDS, IAM, VPC, and CloudFormation"
  }, {
    icon: <Code2 className="w-6 h-6" />,
    title: "CI/CD & DevOps",
    description: "Mastery of Jenkins, Git, GitHub, and automated pipeline creation"
  }, {
    icon: <Cpu className="w-6 h-6" />,
    title: "Containerization",
    description: "Proficient in Docker container management and Kubernetes orchestration"
  }, {
    icon: <Shield className="w-6 h-6" />,
    title: "IaC & Automation",
    description: "Infrastructure automation using Terraform and Ansible configuration management"
  }];
  return <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
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
      }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Summary</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed text-justify md:text-center">I am an AWS Cloud and DevOps Engineer with 5 years of hands-on experience in automating, configuring, and deploying instances on cloud environments. I have a strong background in using Jenkins for Continuous Integration and Continuous Deployment (CI/CD) pipelines. My expertise extends to version control with Git and GitHub, and configuration management using Ansible. I am proficient in containerization with Docker and orchestration with Kubernetes, enabling scalable and efficient application deployment.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} whileHover={{
          y: -5
        }} className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default About;
