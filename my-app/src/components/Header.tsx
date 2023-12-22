import { useState , useEffect} from 'react';
import { ImageComponent } from './Images';
import { SlMagnifier } from "react-icons/sl";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { getBackgroundColor } from './GetBgHeader';
import { CgMenu } from "react-icons/cg";


export function Header(){
    const [open,setOpen] = useState<boolean>(false);
    const [theme,setTheme] = useState<'light' | 'dark'>('light');
    const [scrolled, setScrolled] = useState<'scrolled' | 'notScrolled'>('notScrolled');
    const backgroundColor = getBackgroundColor(scrolled,theme)
    useEffect(() => {
        const handleScrolled = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setScrolled(scrollTop > 0 ? 'scrolled' : 'notScrolled') 
        }
        window.addEventListener('scroll', handleScrolled);
        return () => {
            window.removeEventListener('scroll', handleScrolled);
        }
    }, [] );

    const ToggleTheme = () =>{ 
        setTheme(theme === 'dark' ? 'light' : 'dark'); 
    }

    useEffect(() => {
        document.body.className = theme;
        document.querySelector('.swiper-bg-change')?.classList.toggle('dark-theme')
        document.querySelectorAll('.text-theme-change').forEach(el => el.classList.toggle('dark-text'));
        document.querySelectorAll('.hover-change').forEach(el => el.classList.toggle('dark-hover'));
        document.querySelectorAll('.btn-theme').forEach(el => el.classList.toggle('dark-btn'));
        document.querySelectorAll('.border-theme').forEach(el => el.classList.toggle('dark-border'));
    }, [theme])


    return(
        <div 
            className={`  flex flex-row justify-between items-center gap-28 py-11 px-20 sticky top-0 z-50 2xl:gap-20 sm:flex-col sm:gap-10 sm:p-8`} 
            style={{backgroundColor , transition: scrolled === 'scrolled' ? 'background-color 500ms' : 'none'}}
        >
            <div 
                className='flex flex-row gap-12 items-center 2xl:gap-8 sm:hidden'
            >
                <ImageComponent 
                    path={`${theme === 'light' ? '/Logo.svg' : '/Wave.svg'}`} 
                    className='w-[53px] h-[53px]'>
                </ImageComponent>
                <a 
                    href="#discover" 
                    className='text-lg text-color font-medium uppercase sm:hidden'
                >Discover</a>
                <a 
                    href="#creators" 
                    className='text-lg text-color font-medium uppercase sm:hidden'
                >Creators</a>
                <a 
                    href="#sell" 
                    className='text-lg text-color font-medium uppercase sm:hidden'
                >Sell</a>
                <a 
                    href="#stats" 
                    className='text-lg text-color font-medium uppercase sm:hidden'
                >Stats</a>
            </div>
            <div 
                className='flex flex-row items-center sm:justify-between sm:gap-10 sm:w-full'
            >
                
                <ImageComponent 
                    path={`${theme === 'light' ? '/Logo.svg' : '/Wave.svg'}`} 
                    className='w-[53px] h-[53px] hidden sm:flex'
                ></ImageComponent>
                {theme === 'light' ? 
                <FaMoon 
                    className={`w-[23px] h-[23px] cursor-pointer mr-6 sm:hidden`} 
                    onClick={ToggleTheme}
                ></FaMoon> :
                <FaSun 
                    className={`w-[23px] h-[23px] cursor-pointer mr-6 text-[#F9F9F9] sm:hidden`} 
                    onClick={ToggleTheme}
                ></FaSun>}
                
                <SlMagnifier 
                    className='x:hidden absolute ml-14 w-[23px] h-[23px] text-[#9D9D9D]'
                ></SlMagnifier>
                <input 
                    type='text' 
                    placeholder='Search Art Work / Creator' 
                    className={`x:hidden px-12 py-4 bg-[#EDEDED] input-text rounded-lg text-lg ${theme === 'light' ? 'text-[#141416]' : 'text-[#141416]'}`}
                ></input>
                <div 
                    className='hidden sm:flex'
                >
                    {theme === 'light' ? 
                    <FaMoon 
                        className={`w-[23px] h-[23px] cursor-pointer mr-6`} 
                        onClick={ToggleTheme}
                    ></FaMoon> :
                    <FaSun 
                        className={`w-[23px] h-[23px] cursor-pointer mr-6 text-[#F9F9F9]`} 
                        onClick={ToggleTheme}
                    ></FaSun>}
                    <CgMenu 
                        className={`w-[31px] h-[23px] cursor-pointer ${theme === 'light' ? 'text-[#141416]' : 'text-[#F9F9F9]'} hidden sm:flex`} 
                        onClick={() => setOpen(!open)}></CgMenu>
                </div>
                <button 
                    className={`bg-[#141416] text-white text-lg uppercase py-4 px-6 rounded-2xl ml-6 xl:text-base sm:hidden`}
                >Connect wallet</button>
                
            </div>
            {open && 
            <div 
                className='flex flex-col justify-center items-center gap-6 text-center border-t-2 border-theme w-full py-2 border-[#141416]'
            >
                <a 
                    href="#discover" 
                    className='text-lg text-color font-medium uppercase border-b-2 border-[#141416] border-theme'
                >Discover</a>
                <a 
                    href="#creators" 
                    className='text-lg text-color font-medium uppercase border-b-2 border-[#141416] border-theme'
                >Creators</a>
                <a 
                    href="#sell" 
                    className='text-lg text-color font-medium uppercase border-b-2 border-[#141416] border-theme'
                >Sell</a>
                <a 
                    href="#stats" 
                    className='text-lg text-color font-medium uppercase border-b-2 border-[#141416] border-theme'
                >Stats</a>
                <button 
                    className='bg-[#141416] text-white text-lg uppercase py-2 px-4 rounded-2xl xl:text-base btn-theme font-semibold'>Connect Wallet</button>
                </div>}
        </div>
    );
}