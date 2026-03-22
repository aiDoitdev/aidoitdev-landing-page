/**
 * @fileoverview Use case detail page
 */

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { CodeSnippet } from '@/components/CodeSnippet';
import { TableOfContents } from '@/components/TableOfContents';
import JoinWaitlistButton from '@/components/common/JoinWaitlistButton';
import { USE_CASES } from '@/constants/usecases';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return USE_CASES.map((useCase) => ({
    slug: useCase.slug,
  }));
}

export default function UseCaseDetailPage({ params }: PageProps): JSX.Element {
  const { slug } = params;

  // Find the use case
  const useCase = USE_CASES.find((uc) => uc.slug === slug);

  if (!useCase) {
    return (
      <main className="min-h-screen bg-black">
        <ErrorBoundary name="Header">
          <Header />
        </ErrorBoundary>

        <div className="container mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Use Case Not Found</h1>
          <p className="text-white/60 mb-8">The use case you're looking for doesn't exist.</p>
          <Link
            href="/usecases"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Use Cases
          </Link>
        </div>

        <ErrorBoundary name="Footer">
          <Footer />
        </ErrorBoundary>
      </main>
    );
  }

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem Statement' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'example', label: 'Use Case Example' },
    { id: 'next-steps', label: 'Next Steps' },
  ];

  return (
    <main className="min-h-screen bg-black">
      <ErrorBoundary name="Header">
        <Header />
      </ErrorBoundary>

      {/* Main Content */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Breadcrumb & Back Button */}
          <Link
            href="/usecases"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors mb-8 group"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Use Cases
          </Link>

          {/* Main heading */}
          <div className="mb-12">
            <div className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">{useCase.icon} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                {useCase.title}
              </span>
            </div>
            <p className="text-xl text-white/60 max-w-3xl">{useCase.description}</p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Sidebar - Table of Contents */}
            <div className="lg:col-span-1">
              <TableOfContents title="Table of Contents" sections={sections} />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-12">
                {/* Overview Section */}
                <section id="overview" className="scroll-mt-20">
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                    Overview
                  </h2>
                  <p className="text-white/70 leading-relaxed text-lg">
                    {useCase.description}
                  </p>
                </section>

                {/* Problem Statement Section */}
                <section id="problem" className="scroll-mt-20">
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                    Problem Statement
                  </h2>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 md:p-8">
                    <p className="text-white/80 leading-relaxed text-lg">
                      {useCase.problemStatement}
                    </p>
                  </div>
                </section>

                {/* Benefits Section */}
                <section id="benefits" className="scroll-mt-20">
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                    Benefits
                  </h2>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 md:p-8">
                    <p className="text-white/80 leading-relaxed text-lg">
                      {useCase.benefit}
                    </p>
                  </div>
                </section>

                {/* Example Section */}
                <section id="example" className="scroll-mt-20">
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                    Use Case Example
                  </h2>

                  <div className="space-y-6">
                    {/* Example title */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {useCase.example.title}
                      </h3>
                      <p className="text-white/60 mb-4">{useCase.example.explanation}</p>
                    </div>

                    {/* Code snippet */}
                    <CodeSnippet code={useCase.example.code} language="typescript" />
                  </div>
                </section>

                {/* Next Steps Section */}
                <section id="next-steps" className="scroll-mt-20">
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                    Next Steps
                  </h2>
                  <div className="space-y-4">
                    <p className="text-white/70 leading-relaxed text-lg">
                      Ready to automate your workflow? Our AI experts can help you implement these strategies tailored to your specific needs.
                    </p>
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 md:p-8">
                      <h3 className="text-white font-bold mb-3">Let's implement this for your team</h3>
                      <JoinWaitlistButton />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ErrorBoundary name="Footer">
        <Footer />
      </ErrorBoundary>
    </main>
  );
}
