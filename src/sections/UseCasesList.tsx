/**
 * @fileoverview Use cases list section
 */

'use client';

import { UseCaseCard } from '@/components/UseCaseCard';
import { USE_CASES } from '@/constants/usecases';

export const UseCasesList: React.FC = () => {
  const usecases = USE_CASES;

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Grid of use cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usecases.map((useCase) => (
            <UseCaseCard
              key={useCase.id}
              slug={useCase.slug}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.shortDescription}
              readMoreLabel="Read More"
            />
          ))}
        </div>

        {/* Coming soon message */}
        {usecases.length === 1 && (
          <div className="mt-12 text-center p-8 bg-white/5 border border-white/10 rounded-xl">
            <p className="text-white/60 text-lg">
              More practical AI use cases coming soon... 🚀
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
