import { ImageComponent } from "./Images";
import { FaEthereum } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
export function RecentViewed(){
    return(
        <div className="absolute flex flex-col bg-white border border-[#EDF2F7] p-6 rounded-2xl gap-5 right-[200px] top-[1570px]
        shadow-[10px_10px_50px_0_rgba(20,20,22,0.10)] xl:right-[75px] xl:top-[1600px] x:hidden">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-[#1A202C] text-xl font-semibold">Recent Viewed</h1>
                <BsThreeDots className="w-[20px] h-[20px] text-[#CBD5E0] hover:text-[#1A202C] duration-500
                cursor-pointer"></BsThreeDots>
            </div>
            <div className="flex flex-row items-center">
                <ImageComponent path="/avatar_1.png" className="mr-3"></ImageComponent>
                <div className="flex flex-col mr-20 gap-1">
                    <p className="font-medium text-sm text-[#141416]">Alex Ca.</p>
                    <p className="text-sm font-normal text-[#64748B] text-xs">Alexy</p>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row">
                        <FaEthereum className="w-[20px] h-[18px] text-[#141416]"></FaEthereum>
                        <p className="text-[#141416] font-semibold">8,456</p>
                    </div>
                    <p className="text-[#10C352] text-xs ml-3">+23,00%</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
            <ImageComponent path="/avatar_2.png" className="mr-3"></ImageComponent>
                <div className="flex flex-col mr-20 gap-1">
                    <p className="font-medium text-sm text-[#141416]">Juliya S.</p>
                    <p className="text-sm font-normal text-[#64748B] text-xs">JuliyaS</p>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row">
                    <FaEthereum className="w-[20px] h-[18px] text-[#141416]"></FaEthereum>
                        <p className="text-[#141416] font-semibold">5,327</p>
                    </div>
                    <p className="text-[#E23333] text-xs ml-3">-32,01%</p>
                </div>
            </div>
                
            </div>
    );
}