import LogoIcon from '@/assets/logo.svg'
import MenuIcon from '@/assets/icon-menu.svg'
import JoinWaitlistButton from '@/components/common/JoinWaitlistButton';

export const Header = () => {
  return <header className="py-4 border-b border-white/15 md:border-none">
    <div className="container">
      <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
        <div className='flex items-center'>
          <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15 '>
           <LogoIcon className="h-8 w-8"/>
          </div>
          <h1 className='px-2'>AiDOiT</h1>
        </div>
        <div className='hidden md:block'>
          <nav className='flex gap-8 text-sm'>
            <a href ="#" className=' text-white/70 hover:text-white transition'></a>
            <a href ="#" className=' text-white/70 hover:text-white transition'></a>
            <a href ="#" className=' text-white/70 hover:text-white transition'></a>
            <a href ="#" className=' text-white/70 hover:text-white transition'></a>
          </nav>
        </div>
        <div className='flex gap-4 items-center'>
          <JoinWaitlistButton />
        </div>
      </div>
    </div>
  </header>
};
