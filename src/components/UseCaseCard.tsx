/**
 * @fileoverview Use case card component for displaying use cases in grid
 */

'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface UseCaseCardProps {
  slug: string;
  icon: string;
  title: string;
  description: string;
  readMoreLabel: string;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({
  slug,
  icon,
  title,
  description,
  readMoreLabel,
}) => {
  return (
    <Link href={`/usecases/${slug}`}>
      <div className="group relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300" />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="text-5xl mb-4">{icon}</div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/60 text-sm mb-6 line-clamp-3 group-hover:text-white/80 transition-colors duration-300">
            {description}
          </p>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
            <span className="text-sm font-medium">{readMoreLabel}</span>
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};
