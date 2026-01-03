
import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Mail, 
  Phone, 
  Cloud, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Box, 
  ChevronRight,
  ExternalLink,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  Menu,
  X,
  Server,
  Workflow,
  Download,
  Printer
} from 'lucide-react';
import { RESUME_DATA } from './constants';
import { Skill, Project, Experience } from './types';

// Helper component for section titles
const SectionTitle: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
    <div className="bg-indigo-600 p-2 rounded-lg text-white no-print">
      {icon}
    </div>
    <h2 className="text-3xl font-bold text-slate-800 uppercase tracking-tight">{title}</h2>
  </div>
);

// Navigation Component
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 no-print ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-indigo-600 text-white p-1.5 rounded-md">
              <Terminal size={20} />
            </div>
            <span className={`font-bold text-xl tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              KV<span className="text-indigo-600">.</span>KUMAR
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-indigo-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen print-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50 relative overflow-hidden">
        {/* Animated Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 no-print">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6 no-print">
                <Cloud size={16} className="mr-2" />
                AWS DevOps Engineer
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
                {RESUME_DATA.name}
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
                A results-driven cloud professional with 4 years of experience architecting and automating highly scalable AWS infrastructure. Specializing in CI/CD, containerization, and Infrastructure as Code.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                <div className="flex items-center gap-2 px-4 py-3 bg-white shadow-sm border border-slate-200 rounded-xl">
                  <Mail size={18} className="text-indigo-600" />
                  <a href={`mailto:${RESUME_DATA.email}`} className="text-slate-700 font-medium hover:text-indigo-600">{RESUME_DATA.email}</a>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 bg-white shadow-sm border border-slate-200 rounded-xl">
                  <Phone size={18} className="text-indigo-600" />
                  <span className="text-slate-700 font-medium">{RESUME_DATA.phone}</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 no-print">
                <button 
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all"
                >
                  <Download size={20} />
                  Download CV / PDF
                </button>
                <a href="#projects" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all">
                  View Projects
                </a>
                <a href="#contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="flex-1 relative no-print">
              <div className="relative z-10 w-full aspect-square max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-slate-100 flex flex-col justify-center items-center overflow-hidden group">
                {/* Tech Cloud Visualizer */}
                <div className="grid grid-cols-3 gap-6 opacity-80 group-hover:opacity-100 transition-opacity">
                   {[<Cloud key="1" size={48} />, <Cpu key="2" size={48} />, <Layers key="3" size={48} />, <Server key="4" size={48} />, <Workflow key="5" size={48} />, <Database key="6" size={48} />].map((icon, i) => (
                     <div key={i} className="p-4 bg-slate-50 rounded-2xl text-indigo-600 hover:bg-indigo-50 hover:scale-110 transition-all cursor-default">
                       {icon}
                     </div>
                   ))}
                </div>
                <div className="mt-8 text-center">
                   <div className="text-4xl font-black text-slate-800">4+</div>
                   <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle icon={<Terminal size={24} />} title="Professional Summary" />
          <div className="grid md:grid-cols-2 gap-8">
            {RESUME_DATA.summary.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300">
                <div className="mt-1 bg-indigo-100 text-indigo-600 rounded-full p-1.5 h-fit group-hover:bg-indigo-600 group-hover:text-white transition-colors no-print">
                  <ChevronRight size={14} />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle icon={<Code2 size={24} />} title="Technical Skills" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {RESUME_DATA.skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600 no-print">
                    {skill.category.includes('Cloud') && <Cloud size={20} />}
                    {skill.category.includes('Integration') && <Cpu size={20} />}
                    {skill.category.includes('Source') && <Layers size={20} />}
                    {skill.category.includes('Management') && <ShieldCheck size={20} />}
                    {skill.category.includes('Container') && <Box size={20} />}
                  </div>
                  <h3 className="font-bold text-slate-800">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium border border-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle icon={<Briefcase size={24} />} title="Work Experience" />
          <div className="relative border-l-2 border-slate-100 ml-3 space-y-12 pl-10 py-4">
            {RESUME_DATA.experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[51px] top-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-indigo-100 border-4 border-white no-print">
                  <Briefcase size={16} />
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-slate-800">{exp.company}</h3>
                  <span className="inline-flex px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full font-bold text-sm tracking-wide border border-indigo-100">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xl font-semibold text-indigo-600 mb-4">{exp.role}</div>
                <p className="text-slate-600 max-w-3xl">
                  Contributing as a key member of the Cloud & DevOps engineering team, focused on infrastructure modernization, high availability, and streamlined delivery pipelines.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle icon={<Layers size={24} />} title="Key Projects" />
          <div className="grid gap-12">
            {RESUME_DATA.projects.map((project) => (
              <div key={project.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-5 h-full">
                  <div className="lg:col-span-2 p-8 lg:p-12 bg-slate-900 text-white">
                    <div className="mb-6 flex items-center gap-3 no-print">
                      <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                        <Terminal size={24} />
                      </div>
                      <span className="uppercase text-sm font-black tracking-widest text-indigo-400">Project #{project.id}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{project.name}</h3>
                    <div className="space-y-4 text-slate-400">
                      <div>
                        <div className="text-xs uppercase font-bold text-slate-500 mb-1">Role</div>
                        <div className="text-slate-200 font-medium">{project.role}</div>
                      </div>
                      {project.client && (
                        <div>
                          <div className="text-xs uppercase font-bold text-slate-500 mb-1">Client</div>
                          <div className="text-slate-200 font-medium">{project.client}</div>
                        </div>
                      )}
                      <div>
                        <div className="text-xs uppercase font-bold text-slate-500 mb-1">Timeline</div>
                        <div className="text-slate-200 font-medium">{project.date}</div>
                      </div>
                      <div>
                        <div className="text-xs uppercase font-bold text-slate-500 mb-1">Environment</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.environment.map((env, i) => (
                            <span key={i} className="px-3 py-1 bg-white/10 text-xs font-semibold rounded-md border border-white/10">{env}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <div className="mb-8">
                      <h4 className="text-xs uppercase font-bold text-indigo-600 mb-3 tracking-widest">About Client</h4>
                      <p className="text-slate-600 leading-relaxed italic">{project.aboutClient}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold text-indigo-600 mb-4 tracking-widest">Key Contributions</h4>
                      <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                        {project.responsibilities.map((resp, i) => (
                          <li key={i} className="flex gap-3 text-sm text-slate-700 leading-snug">
                            <ChevronRight size={16} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle icon={<GraduationCap size={24} />} title="Education" />
          <div className="bg-indigo-50 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-indigo-100">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm no-print">
                <GraduationCap size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Bachelor of Technology (B. Tech)</h3>
                <p className="text-xl text-indigo-600 font-medium">Mechanical Engineering</p>
                <p className="text-slate-600">JNTU Hyderabad</p>
              </div>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm text-indigo-600 font-bold border border-indigo-100">
              Graduated
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white no-print">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-slate-400 text-xl mb-12">
            Interested in collaborating or discussing cloud infrastructure? Reach out via email or phone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={`mailto:${RESUME_DATA.email}`} 
              className="flex items-center justify-center gap-3 px-8 py-5 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-bold transition-all text-lg group"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
              {RESUME_DATA.email}
            </a>
            <div className="flex items-center justify-center gap-3 px-8 py-5 bg-white/10 border border-white/20 rounded-2xl font-bold text-lg">
              <Phone size={24} />
              {RESUME_DATA.phone}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-slate-500 border-t border-white/5 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>&copy; {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with React & Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
