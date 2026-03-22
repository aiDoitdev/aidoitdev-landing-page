/**
 * @fileoverview Use cases list page
 */

import type { Metadata } from 'next';
import { UseCasesHero } from '@/sections/UseCasesHero';
import { UseCasesList } from '@/sections/UseCasesList';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SITE_METADATA } from '@/constants';

export const metadata: Metadata = {
  title: 'AI Use Cases for Developers | AiDOiT',
  description: 'Discover practical AI use cases and real-world examples to automate repetitive tasks and solve common development challenges.',
  keywords: 'AI use cases, automation, developer tools, AI examples, task automation',
  openGraph: {
    title: 'AI Use Cases for Developers | AiDOiT',
    description: 'Discover practical AI use cases and real-world examples to automate repetitive tasks and solve common development challenges.',
    url: `${SITE_METADATA.URL}/usecases`,
    type: 'website',
    siteName: 'AiDOiT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Use Cases for Developers | AiDOiT',
    description: 'Discover practical AI use cases and real-world examples to automate repetitive tasks and solve common development challenges.',
  },
};

export default function UseCasesPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-black">
      <ErrorBoundary name="Header">
        <Header />
      </ErrorBoundary>

      <ErrorBoundary name="UseCasesHero">
        <UseCasesHero />
      </ErrorBoundary>

      <ErrorBoundary name="UseCasesList">
        <UseCasesList />
      </ErrorBoundary>

      <ErrorBoundary name="Footer">
        <Footer />
      </ErrorBoundary>
    </main>
  );
}
