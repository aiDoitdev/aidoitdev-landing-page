import Button from "@/components/common/Button";
import starsBg from '@/assets/stars.png'
import EmailInput from "@/components/common/EmailInput";

export const Hero = () => {
  return <section className="h-[492px] flex items-center"
  style={{backgroundImage: `url(${starsBg.src})`}}
  >
    <div className="container">
      <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">Ai DO iT</h1>
      <p className="text-lg text-white/70 mt-5 text-center">Helping Devs to boost the productivity</p>
      <div className="flex justify-center mt-5">
      <EmailInput/>
      </div>
    </div>
  </section>;
};
