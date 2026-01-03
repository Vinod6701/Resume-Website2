
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "K. Vinod Kumar",
  email: "vinod6701@gmail.com",
  phone: "+91 9652255890",
  summary: [
    "Having 4 years of Experience in AWS Cloud, DevOps Tools along with Linux.",
    "Proficient in architecting and automating the AWS infrastructure with Terraform & Cloud Formation.",
    "Working experience in building highly scalable infrastructure, build and deployment automation with Jenkins (CI/CD).",
    "Experience in DevOps Tools like Ansible, Jenkins, Docker, & Kubernetes (EKS).",
    "Proficient in AWS services like VPC, EC2, EFS, S3, ELB, Auto Scaling Groups (ASG), EBS, RDS, IAM, Route 53, Cloud Watch, CloudFront, Cloud Trail & EKS.",
    "Hands on experience on Docker Networking and container orchestration using Kubernetes.",
    "Good understanding of the principles and best practices of Deployment/Release practices."
  ],
  skills: [
    {
      category: "Cloud Services",
      items: ["Amazon Web Services", "AWS-CLI"]
    },
    {
      category: "Continuous Integration",
      items: ["Jenkins"]
    },
    {
      category: "Source Control",
      items: ["Git", "GitHub"]
    },
    {
      category: "Configuration Management",
      items: ["Ansible"]
    },
    {
      category: "Container Technology",
      items: ["Docker", "Kubernetes"]
    }
  ],
  experience: [
    {
      company: "Siemens Technology Software",
      role: "AWS DevOps Engineer",
      period: "Dec 2023 - Present"
    },
    {
      company: "Infosys",
      role: "AWS DevOps Engineer",
      period: "Nov 2020 - Nov 2023"
    }
  ],
  projects: [
    {
      id: "3",
      name: "Siemens",
      role: "DevOps Engineer",
      date: "Dec 2023 to present",
      environment: ["AWS", "Terraform", "Jenkins", "Docker", "Kubernetes"],
      aboutClient: "Siemens is a multinational conglomerate headquartered in Germany, known for its wide range of products and services in industries such as engineering, electronics, energy, healthcare, and transportation.",
      responsibilities: [
        "Configured continuous integration process with Jenkins for automatic artifact deployment.",
        "Implementing AWS Infrastructure services (IAAS) like EC2, VPC, ELB, EBS, S3, RDS.",
        "Used Terraform to reliably version and create infrastructure on AWS using modules.",
        "Managed Docker Orchestration and Docker containerization using Kubernetes.",
        "Written terraform templates to create custom VPC, subnets, NAT for web applications.",
        "Implemented DNS through Route 53 for highly available applications.",
        "Created and launched EC2 instances using AMIs (Linux, Ubuntu, RHEL, Windows) with shell scripting."
      ]
    },
    {
      id: "2",
      name: "Bombardier Transportation",
      role: "AWS & DevOps Engineer",
      date: "Nov 2021 to Dec 2023",
      environment: ["AWS", "Terraform", "Linux", "S3", "VPC", "NFS"],
      aboutClient: "Bombardier Transportation was a Canadian-German rolling stock and rail transport manufacturer, headquartered in Berlin, Germany. It was one of the world's largest companies in the rail vehicle and equipment manufacturing industry.",
      responsibilities: [
        "Responsible for architecting, designing, implementing and supporting cloud-based infrastructure.",
        "Managing AWS infrastructure with automation using Terraform.",
        "Created multiple VPC's with public and private subnets across various availability zones.",
        "Configured S3 buckets with life cycle policies for archiving infrequently accessed data.",
        "Managed file system and NFS Administration on Linux and UNIX server platforms.",
        "User and Sudo Administration, implementing ACLs on OS file systems.",
        "Performance tuning of Linux servers using ps, free, df, top, vmstat, and Netstat."
      ]
    },
    {
      id: "1",
      name: "IHS Infra Transformations",
      client: "IHS(UK)",
      role: "AWS & DevOps Engineer",
      date: "Dec 2020 to Oct 2021",
      environment: ["AWS", "Terraform", "VPC", "ECS", "IAM", "ASG", "CloudWatch"],
      aboutClient: "IHS bring together the deepest intelligence across the widest set of capital-intensive industries and markets, connecting data across variables to present a richer view of their world.",
      responsibilities: [
        "Proficient in AWS services like VPC, EC2, ECS, S3, ELB, ASG, EBS, RDS, IAM, Route 53, CloudFront.",
        "Used security groups, network ACL's, internet gateways and route tables for secure zones.",
        "Created and configured ELB and ASG for cost-efficient, fault-tolerant environments.",
        "Used IAM for creating roles, users, groups and implemented MFA for additional security.",
        "Written terraform templates for custom VPC, subnets, and NAT for successful deployment."
      ]
    }
  ],
  education: "B. Tech (Mechanical) from JNTU Hyderabad"
};
