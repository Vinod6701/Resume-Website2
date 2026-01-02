import React from 'react';
import { Heart } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-slate-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} VINOD KAVADI. 
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>DevOPs</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>Engineer</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;