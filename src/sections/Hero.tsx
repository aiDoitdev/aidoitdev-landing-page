import Button from "@/components/common/Button";
import starsBg from '@/assets/stars.png'
import EmailInput from "@/components/common/EmailInput";

export const Hero = () => {
  return <section className="min-h-screen pt-[120px] sm:pt-[140px] flex items-start sm:items-center"
    style={{backgroundImage: `url(${starsBg.src})`}}
  >
    <div className="container px-4 md:px-6">
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center leading-tight">
        Build Your SAAS/MVP<br />
        From Idea to Launch in 10<br className="sm:hidden" /> Days
      </h1>
      
      <div className="flex justify-center mt-4">
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1D1E3C] rounded-full text-sm sm:text-base">
          <span className="text-[#8B8DFF] mr-2 flex items-center">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Limited Availability
          </span>
          <span className="text-white">4 spots for February</span>
        </div>
      </div>

      <p className="text-base sm:text-lg text-white/70 mt-4 sm:mt-5 text-center max-w-[90%] sm:max-w-4xl mx-auto px-2">
        Turn your vision into a market-ready product in just 14 days. We build beautiful, scalable web and mobile apps that get your business off the ground—fast.
      </p>

      <div className="flex justify-center mt-6 sm:mt-8">
        <a href="https://cal.com/aidoit.dev/mvp"
           target="_blank"
           rel="noopener noreferrer"
           className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/90 mx-4 sm:mx-0">
          Schedule a call →
        </a>
      </div>
    </div>
  </section>;
};
