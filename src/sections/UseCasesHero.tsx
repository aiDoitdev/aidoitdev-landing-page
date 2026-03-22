/**
 * @fileoverview Hero section for use cases page
 */

'use client';

export const UseCasesHero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-white/20 transition-colors">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-sm text-white/80 font-medium">Practical Examples</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight">
          <span className="text-white">AI Use Cases</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Discover practical AI use cases and real-world examples to automate repetitive tasks and solve common development challenges.
        </p>

        {/* Stats or CTA can go here */}
        <div className="mt-12 flex justify-center">
          <div className="text-center text-white/40 text-sm">
            Learn how to build powerful AI agents that drive real business value
          </div>
        </div>
      </div>
    </section>
  );
};
