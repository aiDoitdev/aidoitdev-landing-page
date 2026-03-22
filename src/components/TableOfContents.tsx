/**
 * @fileoverview Table of Contents component for detail pages
 */

'use client';

import { useState, useEffect } from 'react';

interface TableOfContentsProps {
  title: string;
  sections: {
    id: string;
    label: string;
  }[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ title, sections }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const positions = sections.map((section) => {
        const element = document.getElementById(section.id);
        return {
          id: section.id,
          offset: element?.offsetTop ?? 0,
        };
      });

      const current = positions.find(
        (pos) => window.scrollY >= pos.offset - 100
      );

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 sticky top-20 h-fit">
      <h3 className="text-white font-bold mb-4">{title}</h3>
      <nav className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className={`block text-sm w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
              activeSection === section.id
                ? 'bg-purple-500/20 text-purple-200 border border-purple-500/30'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
};
