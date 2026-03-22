/**
 * @fileoverview Code snippet component with syntax highlighting
 */

'use client';

import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

interface CodeSnippetProps {
  code: string;
  language?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = 'typescript' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-black/40 border border-white/10 rounded-xl overflow-hidden">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 z-10 flex items-center gap-2 text-xs text-white/70 hover:text-white"
      >
        {copied ? (
          <>
            <FaCheck className="w-4 h-4" />
            Copied
          </>
        ) : (
          <>
            <FaCopy className="w-4 h-4" />
            Copy
          </>
        )}
      </button>

      {/* Language Tag */}
      <div className="px-6 py-4 border-b border-white/10 bg-white/5">
        <span className="text-xs font-mono text-white/50 uppercase tracking-wider">{language}</span>
      </div>

      {/* Code Content */}
      <pre className="p-6 overflow-x-auto">
        <code className="font-mono text-sm text-white/90 leading-relaxed whitespace-pre-wrap break-words">
          {code}
        </code>
      </pre>
    </div>
  );
};
