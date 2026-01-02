import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layers, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Siemens",
      role: "AWS DevOps Engineer",
      period: "Dec 2023 - Present",
      tech: ["AWS", "Terraform", "Jenkins", "Docker", "Kubernetes"],
      icon: <Globe className="w-6 h-6 text-white" />,
      responsibilities: [
        "Working on Multiple AWS instances, set the security groups, Elastic Load Balancer and AMIs, Auto scaling to design cost effective, fault tolerant and highly available systems.",
        "Creating S3 buckets and managing policies for S3 buckets and Utilized S3 bucket and Glacier for storage and backup on AWS.",
        "Worked on AWS IAM to grant fine-grained access to AWS resources to users. Also managed roles and permissions of users to AWS account through IAM.",
        "Creating Cloud Watch alerts for instances and using them in Auto-scaling launch configurations.",
        "Used Docker to virtualize deployment containers and push the code to EC2 cloud using Python.",
        "Wrote Ansible Playbooks with Python SSH as the Wrapper to Manage Configurations of AWS Nodes and Test Playbooks on AWS instances using Python.",
        "Integration of Automated Build with Garrison, Jenkins and Hudson.",
        "Installed and configured Jenkins for Automating Deployments and providing a complete automation solution.",
        "Experience in branching, tagging and maintaining the version across the environments using SCM tools like GIT, Subversion (SVN) on Linux and windows platforms."
      ]
    },
    {
      title: "Bombardier Transportation",
      role: "AWS & DevOps Engineer",
      period: "Nov 2021 - Dec 2023",
      tech: ["AWS", "Ansible", "Jenkins", "Git"],
      icon: <Server className="w-6 h-6 text-white" />,
      responsibilities: [
        "Responsible for Continuous Integration (CI) and Continuous Delivery (CD) process implementation using Jenkins along with Shell scripts to automate routine jobs.",
        "Performed Branching, Tagging, and Release Activities on Version Control Tool GIT.",
        "Worked on AWS to provision new instances. S3 Storage Services. AWS EC2 & Cloud Watch Services. CI/CD pipeline management for a cluster of Microservices.",
        "Installed and Configured the Apache Tomcat application servers for Dev and Integration Test Environments.",
        "Automated the cloud deployments using Chef, Python and AWS Cloud Formation Templates.",
        "Create and configure the continuous delivery pipelines for deploying micro services and lambda functions using Jenkins CI server.",
        "Implemented AWS Code Pipeline and Code Deploy to deploy the application on servers.",
        "Worked on Docker components like Docker Engine, Hub, Machine, Compose and Docker Registry.",
        "Daily monitoring and maintenance of the source code repository."
      ]
    },
    {
      title: "IHS Infra Transformations",
      role: "AWS & DevOps Engineer",
      period: "Dec 2020 - Oct 2021",
      tech: ["AWS EC2", "S3", "VPC", "CloudWatch"],
      icon: <Layers className="w-6 h-6 text-white" />,
      responsibilities: [
        "Working on AWS elastic search, EC2, RDS, S3, VPC, Cloud Watch, Cloud Front, Route53.",
        "Launching Amazon EC2 Cloud Instances using Amazon Images (Linux/ Ubuntu/RHEL) and Configuring launched instances with respect to specific applications.",
        "Created and managed multiple instances of Apache Tomcat and deployed several applications.",
        "Analyzing and resolving compilation and deployment errors related to code development, branching, merging and building of source code.",
        "Provided 24/7 on call support on rotation basis."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm"
            >
              <div className="flex flex-col md:flex-row gap-6 mb-6 border-b border-slate-200 pb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-slate-600">
                    <span className="font-semibold text-blue-600">{project.role}</span>
                    <span className="text-slate-300">|</span>
                    <span>{project.period}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                 <h4 className="font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                 <div className="flex flex-wrap gap-2">
                   {project.tech.map((tech, i) => (
                     <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-700 font-medium">
                       {tech}
                     </span>
                   ))}
                 </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Responsibilities:</h4>
                <ul className="space-y-2">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;