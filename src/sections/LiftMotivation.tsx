import Button from "@/components/common/Button";

export const LiftMotivation = () => {
  return (
    <section className="h-[300px] sm:h-[400px] md:h-[492px] flex items-center">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center leading-tight">
          READY FOR LIFTOFF?
        </h1>

      
        <div className="flex justify-center gap-4 mt-8">
         <Button>
          <a href="https://cal.com/aidoit.dev/mvp"
             target="_blank"
             rel="noopener noreferrer"
             >
            SCHEDULE STRATEGY CALL
          </a>
          </Button>
        </div>
        

        <div className="flex justify-center mt-6">
          <div className="inline-flex items-center px-4 py-2 bg-[#FF3B1D] rounded-lg text-white text-sm">
            <span className="flex items-center gap-2">
            
            <div className="relative inline-flex">
               <div className="w-4 h-4 bg-[#FFD700] rounded-full"></div>
               <div className="w-4 h-4 bg-[#FFD700] rounded-full absolute top-0 left-0 animate-ping"></div>
               <div className="w-4 h-4 bg-[#FFD700] rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
              Only 3 Slots Left for {new Date().toLocaleString('default', { month: 'short' })}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}; 