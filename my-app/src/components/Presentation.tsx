import { ImageComponent } from "./Images";
import { useState, useEffect } from "react";
import { IoStarSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

export function Presentation(){
    const [theme,setTheme] = useState<'light'| 'dark'>('light');
    useEffect(()=> {
        document.body.className = theme;
    }, [theme])
    return(
        <div 
            className="flex flex-row items-center justify-start gap-20 p-20 pb-40 x:flex-col xm:p-5" id="discover">
            <div className="flex flex-col items-start gap-2 w-1/2 pr-20 x:w-full x:pr-0 x:items-center x:text-center">
                <div className="h-[1px] opacity-20 w-[138px] bg-[#201F1F] mb-0.5"></div>
                <h1 className={`capitalize text-6xl font-semibold mb-1.5 text-theme-change`}>Discover And Create NFTs</h1>
                <p className="text-lg text-[#676767] font-normal mb-8">Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a  
                 <span className="text-[#141416] font-semibold text-theme-change"> $20 bonus.</span>
                </p>
                <div className="flex flex-row gap-5 mb-16 xm:mb-5">
                    <button className="rounded-lg py-3 px-6 bg-black text-white uppercase text-base font-medium btn-theme hover-change duration-500">Explore more</button>
                    <button className="hover:bg-[#615c5c] hover:text-white duration-500 rounded-lg py-3 px-5 bg-[#F9F9F9] text-black uppercase border border-black text-base font-medium">Create nft</button>
                </div>
                <div className="flex flex-row gap-11 xm:hidden">
                    <div className="">
                        <p className={`text-4xl font-semibold text-theme-change`}>430K+</p>
                        <p className="text-[#848586] text-sm">Art Works</p>
                    </div>
                    <div className="">
                        <p className="text-[#141416] text-4xl font-semibold text-theme-change">159K+</p>
                        <p className="text-[#848586] text-sm">Creators</p>
                    </div>
                    <div className="">
                        <p className="text-[#141416] text-4xl font-semibold text-theme-change">87K+</p>
                        <p className="text-[#848586] text-sm">Collections</p>
                    </div>
                </div>
                <div className="xm:flex flex-row w-full gap-4 items-end hidden justify-center">
                    <div className="flex flex-row items-end">
                        <IoStarSharp className="w-[40px] h-[40px] text-[#00B67A]"></IoStarSharp>
                        <p className="text-[#141416] text-xl font-semibold text-theme-change">Trustpilot</p>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <div className="flex flex-row">
                            <FaStar className="text-[#F59E0B]"></FaStar>
                            <FaStar className="text-[#F59E0B]"></FaStar>
                            <FaStar className="text-[#F59E0B]"></FaStar>
                            <FaStar className="text-[#F59E0B]"></FaStar>
                            <FaStar className="text-[#F59E0B]"></FaStar>
                        </div>
                        <p className="text-theme-change text-xl font-semibold text-[#334155] opacity-70 ">4900+</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 ml-20 x:relative x:h-[300px] md:w-full xm:ml-0">
                    <ImageComponent path={'/cardPres.png'} alt='' className='mb-20 absolute right-80 top-36 ml-20 object-cover mt-20 xl:w-[280px] h-[280px] xl:top-48
                    xl:right-72 x:mt-0 x:top-10 md:ml-0 md:right-80 m:right-56 m:w-[200px] m:h-[200px] xm:w-[150px] xm:h-[150px] xs:right-44'></ImageComponent>
                    <ImageComponent path="/cardPres2.png" alt='' className='mt-32 right-0 absolute top-[265px] xl:w-[250px] h-[280px] x:mt-0 x:top-[110px] x:hidden'></ImageComponent>
                    <ImageComponent path="/presIconSpecial.png"
                     alt=""
                     className="hidden x:block absolute top-[110px] right-0 md:right-6 m:right-0 m:w-[200px] h-[200px] xm:w-[150px] xm:h-[150px] xm:right-10 xm:top-[80px] xs:right-0"></ImageComponent>
                    <ImageComponent path="/DotOrnament.svg" alt='' className='absolute right-0 top-48 x:hidden'></ImageComponent>
                    <ImageComponent 
                    path="/Arrow01.png" 
                    alt='' 
                    className='absolute right-44 top-60 xl:right-36 x:top-0 md:right-44 m:right-24 xm:w-[100px] xm:h-[100px] xm:right-36 xs:right-24'></ImageComponent>
            </div>
            

        </div>
    );
}