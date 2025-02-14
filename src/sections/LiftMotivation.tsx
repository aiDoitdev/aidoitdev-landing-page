import Button from "@/components/common/Button";

export const LiftMotivation = () => {
  return (
    <section className="h-[300px] sm:h-[400px] md:h-[492px] flex items-center">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center leading-tight">
          READY FOR LIFTOFF?
        </h1>

        <div className="flex justify-center gap-4 mt-8">
          <a href="https://cal.com/aidoit.dev/mvp"
             target="_blank"
             rel="noopener noreferrer"
             className="bg-[#FF3B1D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#FF3B1D]/90">
            SCHEDULE STRATEGY CALL
          </a>
        </div>

        <div className="flex justify-center mt-6">
          <div className="inline-flex items-center px-4 py-2 bg-[#FF3B1D] rounded-lg text-white text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
              ONLY 3 SLOTS LEFT FOR MARCH
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}; 