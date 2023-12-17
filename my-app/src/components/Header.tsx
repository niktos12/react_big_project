import { useState , useEffect} from 'react';
import { ImageComponent } from './Images';
import { SlMagnifier } from "react-icons/sl";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export function Header(){
    const [open,setOpen] = useState<boolean>(false);
    const [theme,setTheme] = useState<'light' | 'dark'>('light');
    const ToggleTheme = () =>{ 
        setTheme(theme === 'light' ? 'dark' : 'light'); 
    }
    useEffect(() => {
        document.body.className = theme;
        document.querySelector('.swiper-bg-change')?.classList.toggle('dark-theme')
    }, [theme])
    return(
        <div className="flex flex-row justify-between items-center gap-28 py-11 px-20 ">
            <div className='flex flex-row gap-12 items-center'>
                <ImageComponent path={'/Logo.svg'}></ImageComponent>
                <a href="#" className='text-lg text-color font-medium uppercase'>Discover</a>
                <a href="#" className='text-lg text-color font-medium uppercase'>Creators</a>
                <a href="#" className='text-lg text-color font-medium uppercase'>Sell</a>
                <a href="#" className='text-lg text-color font-medium uppercase'>Stats</a>
            </div>
            <div className='flex flex-row items-center'>
                {theme === 'light' ? <FaMoon className={`w-[23px] h-[23px] cursor-pointer mr-6`} onClick={ToggleTheme}></FaMoon> :
                <FaSun className={`w-[23px] h-[23px] cursor-pointer mr-6 text-[#F9F9F9]`} onClick={ToggleTheme}></FaSun>}
                
                <SlMagnifier className='absolute ml-14 w-[23px] h-[23px] text-[#9D9D9D]'></SlMagnifier>
                <input type='text' placeholder='Search Art Work / Creator' className='px-12 py-4 bg-[#EDEDED] input-text rounded-lg text-lg'></input>
                <button className={`bg-[#141416] text-white text-lg uppercase py-4 px-6 rounded-2xl ml-6`}>Connect wallet</button>
            </div>
            {open && <p>Открыт</p>}
        </div>
    );
}