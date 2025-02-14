import LogoIcon from '@/assets/logo.svg'
import MenuIcon from '@/assets/icon-menu.svg'
import JoinWaitlistButton from '@/components/common/JoinWaitlistButton';

export const Header = () => {
  return <header className="py-4 sm:py-6 border-b border-white/15 md:border-none fixed top-0 left-0 right-0 bg-black z-50">
    <div className="container">
      <div className="flex justify-between items-center md:border border-white/15 md:p-4 rounded-xl mx-auto">
        <div className='flex items-center'>
          <div className='border h-12 w-12 rounded-lg inline-flex justify-center items-center border-white/15'>
           <LogoIcon className="h-10 w-10"/>
          </div>
          <strong><h1 className='px-3 text-xl'>AiDOiT</h1></strong>
        </div>
        <div className='hidden md:block'>
          <nav className='flex gap-8 text-base'>
            <a href="#" className='text-white/70 hover:text-white transition'>How it works</a>
            <a href="#" className='text-white/70 hover:text-white transition'>Pricing</a>
            <a href="#" className='text-white/70 hover:text-white transition'>Works</a>
            <a href="#" className='text-white/70 hover:text-white transition'>Connect on X</a>
          </nav>
        </div>
        <div className='flex gap-4 items-center'>
          <a href="https://cal.com/aidoit.dev/mvp" 
             target="_blank" 
             rel="noopener noreferrer" 
             className='flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg hover:bg-white/90 transition text-base'>
            Let's Talk
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <button className='md:hidden'>
            <MenuIcon className="h-7 w-7"/>
          </button>
        </div>
      </div>
    </div>
  </header>
};
