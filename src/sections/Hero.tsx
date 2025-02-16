import Button from "@/components/common/Button";
import starsBg from '@/assets/stars.png'
import EmailInput from "@/components/common/EmailInput";

export const Hero = () => {
  return <section className="min-h-screen pt-[80px] sm:pt-[140px] flex items-start sm:items-center"
    style={{backgroundImage: `url(${starsBg.src})`}}
  >
    <div className="container px-4 md:px-6">
      <h1 className="opacity-1 text-2xl sm:text-6xl md:text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center leading-tight animate-fade-in">
        <div className="space-y-4 sm:space-y-6">
          <div className="opacity-1 animate-slide-up [animation-delay:300ms]">
            Launch your <span className="relative">AI MVP
              <span className="absolute bottom-0 left-0 w-full h-[0.2em]" style={{ 
                background: 'linear-gradient(179deg, rgb(74,32,138) 0%, rgb(74,32,138) 50%, transparent 54%, transparent 100%)'
              }}></span>
            </span>
          </div>
          <div className="opacity-1 animate-slide-up [animation-delay:500ms]">
            in next <span className="relative">2 weeks
              <span className="absolute bottom-0 left-0 w-full h-[0.2em]" style={{ 
                background: 'linear-gradient(179deg, rgb(74,32,138) 0%, rgb(74,32,138) 50%, transparent 54%, transparent 100%)'
              }}></span>
            </span>
          </div>
        </div>
      </h1>
      
      <div className="opacity-0 flex justify-center mt-8 sm:mt-10 animate-fade-in [animation-delay:700ms]">
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1D1E3C] rounded-full text-sm sm:text-base">
          <span className="hidden sm:flex text-[#8B8DFF] mr-2 items-center">
           🗓️ Limited Availability
          </span>
          <span className="sm:hidden text-[#8B8DFF] mr-2 flex items-center">
           🗓️
          </span>
          <span className="text-white">
            <span className="sm:hidden">3 spots available for {new Date().toLocaleString('default', { month: 'short' })}</span>
            <span className="hidden sm:inline">3 spots for {new Date().toLocaleString('default', { month: 'long' })}</span>
          </span>
        </div>
      </div>

      <p className="opacity-0 text-base sm:text-lg md:text-xl text-white mt-8 sm:mt-10 text-center max-w-[90%] sm:max-w-4xl mx-auto px-2 animate-fade-in [animation-delay:900ms]">
       🚀 We build AI MVPs for founders fast, efficient, and powered by the latest AI tools ⚡
      </p>

      <div className="opacity-0 flex justify-center mt-10 animate-fade-in [animation-delay:1100ms]">
        <Button>
          <a href="https://cal.com/aidoit.dev/mvp"
             target="_blank"
             rel="noopener noreferrer"
             >
            <span className="text-3xl sm:text-2xl font-bold">CALL NOW <span className="text-white">📞</span></span>
          </a>
        </Button>
      </div>
    </div>
  </section>;
};
