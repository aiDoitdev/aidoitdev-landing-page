import Button from "@/components/common/Button";

// Define types for our pricing data
type PricingFeature = {
  text: string;
};

type PricingPlan = {
  name: string;
  price: number;
  period: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular?: boolean;
};

// Pricing data that can be easily edited
const pricingPlans: PricingPlan[] = [
  {
    name: "Starter MVP",
    price: 799,
    period: "One-time",
    description: "Perfect for early-stage startups looking to launch quickly with essential features.",
    features: [
      { text: "MVP delivery in 2-3 weeks" },
      { text: "Fully responsive Web & Mobile App" },
      { text: "1 Month Free Maintenance & Bug Fixes" },
      { text: "Basic Analytics Dashboard" },
      { text: "Email Support & Ticket System" },
      { text: "Essential integrations (Payments, Auth, etc.)" },
      { text: "Scalable codebase with modern tech stack" },
      { text: "Transparent development process with regular updates" },
    ],
    buttonText: "Get Started with Starter →",
  },
  {
    name: "Pro Growth",
    price: 2099,
    period: "One-time",
    description: "Comprehensive development with advanced features for scaling businesses.",
    features: [
      { text: "MVP delivery in 2-3 weeks" },
      { text: "Advanced Web & Mobile App with custom UI/UX" },
      { text: "3 Months Premium Maintenance & Support" },
      { text: "In-depth Analytics & Performance Reporting" },
      { text: "Priority Support & Strategy Consultations" },
      { text: "Custom Integrations & API Setup" },
      { text: "SEO & Performance Optimization" },
      { text: "Automated Testing & Deployment Setup" },
    ],
    buttonText: "Get Started with Pro →",
  },
  {
    name: "Scale & Support",
    price: 2999,
    period: "Monthly",
    description: "For startups needing stability, custom integrations, and high-performance apps.",
    features: [
      { text: "MVP delivery in 3-4 weeks with custom features" },
      { text: "80+ hours of development time per month" },
      { text: "Enterprise-grade Web & Mobile App" },
      { text: "6 Months Free Maintenance & Optimization" },
      { text: "Custom AI-powered Analytics & Insights" },
      { text: "Dedicated Account Manager" },
      { text: "Full API Development & Third-party Integrations" },
      { text: "Scalability & Cloud Optimization" },
      { text: "Priority Feature Development & Roadmap Planning" },
      { text: "Security Audits & Compliance Checks" },
    ],
    buttonText: "Get Started with Scale →",
    isPopular: true,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
            Pricing
          </h2>
          <p className="text-white/70 mt-4">
            Choose the Right Plan for Your Success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 flex flex-col ${
                plan.isPopular ? 'border border-blue-500' : 'border border-gray-800'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Most popular
                </span>
              )}
              
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400 ml-2">/{plan.period}</span>
              </div>
              
              <p className="mt-4 text-sm text-gray-400">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-4 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a href="https://cal.com/aidoit.dev/mvp"
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`w-full py-3 px-6 rounded-lg font-medium inline-block text-center ${
                     plan.isPopular
                       ? 'bg-blue-600 text-white hover:bg-blue-700'
                       : 'bg-black text-white border border-gray-800 hover:bg-gray-900'
                   }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 