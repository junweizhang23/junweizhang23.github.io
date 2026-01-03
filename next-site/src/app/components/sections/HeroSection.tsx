'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="mb-16">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Dr. Junwei Zhang
          </h2>
          
          {/* Prestigious Roles */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              🏆 IEEE T-CSVT Associate Editor
            </span>
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              🎖️ IEEE Senior Member
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              🚀 TGO Elite Tech Leader
            </span>
            <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              🎓 Stanford CS Master
            </span>
          </div>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            Currently working at <strong className="text-blue-600 dark:text-blue-400">Meta</strong> on cutting-edge <strong>smart glass GenAI multi-modal systems</strong>. 
            Ph.D. from <a href="https://www.stonybrook.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Stony Brook University</a>, 
            currently enrolled in <a href="https://cs.stanford.edu/degrees/mscs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Stanford&apos;s CS Master Program</a>. 
            Previous industry experience at <strong>DoorDash</strong>, <strong>Microsoft Azure</strong>, and <strong>Uber</strong>.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Research focus: smart glass technology, multi-modal AI, computational geometry, and parallel computing. 
            Sharing insights through <a href="https://www.youtube.com/@junweizhang" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">YouTube</a> 
            and <a href="https://www.bilibili.com/video/BV1QfoGYgERZ/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Bilibili</a>.
          </p>
          <div className="flex gap-4">
            <a 
              href="#publications" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View Publications
            </a>
            <a 
              href="#contact" 
              className="border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-700 shadow-lg bg-slate-100 dark:bg-slate-700">
            {!imageError ? (
              <img
                src="/junwei.jpeg"
                alt="Dr. Junwei Zhang - IEEE Senior Member, Smart Glass GenAI Systems Engineer at Meta"
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-500 dark:text-slate-400 text-center p-4">
                <div>
                  <div className="text-4xl mb-2">👨‍💼</div>
                  <div className="text-sm">Dr. Junwei Zhang</div>
                  <div className="text-xs">IEEE Senior Member</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}