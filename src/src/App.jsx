import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>K. Vinod Kumar - AWS DevOps Engineer | 5 Years Experience</title>
        <meta name="description" content="Professional AWS DevOps Engineer with 5 years of experience in cloud infrastructure, CI/CD, and automation. Specialized in AWS, Docker, Kubernetes, and Ansible." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;