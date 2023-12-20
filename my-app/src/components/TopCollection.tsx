import { ImageComponent } from "./Images";
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import { FaEthereum } from "react-icons/fa";
export function TopCollection(){
    return(
        <div className="flex flex-col justify-center items-center mt-40 mb-20">
            <h1 className="#141416 text-4xl font-semibold mb-20">Top Collection</h1>
            <table>
                <thead>
                    <tr className="flex flex-row gap-[80px] mb-8">
                        <th className="mr-24 text-[#93989A] text-xl m:mr-20">Collection</th>
                        <th className="text-[#93989A] text-xl">Volume</th>
                        <th className="mr-2 ml-14 text-[#93989A] text-xl x:hidden x:ml-0">24h %</th>
                        <th className="text-[#93989A] text-xl sm:hidden">Floor Price</th>
                        <th className="text-[#93989A] text-xl md:hidden">Owners</th>
                        <th className="text-[#93989A] text-xl sm:hidden">Items</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col gap-8">
                    <tr className="flex flex-row items-center border-b-2 border-[#EDF2F7] gap-28 pb-4">
                        <td className="flex flex-row gap-4">
                            <ImageComponent path="/user1.png" className="w-[65px] h-[65px] m:w-[50px] m:h-[50px]"></ImageComponent>
                            <div className="flex flex-col">
                                <p className="text-[#141416] text-2xl font-medium text-theme-change m:text-xl">Alex Ca.</p>
                                <p className="text-[#64748B] text-xl m:text-base">By Alex</p>
                            </div>
                        </td>
                        <td className="flex flex-row x:flex-col">
                            <div className="flex flex-row">
                                <FaEthereum className="w-[22px] h-[21px]"></FaEthereum>
                                <p className="text-[#141416] text-xl font-semibold text-theme-change">8,456</p>
                            </div>
                            <p className="hidden x:flex text-[#10C352] text-base font-medium ml-1">+ 27.78%</p>
                        
                        </td>
                        <td className="x:hidden">
                            <p className="text-[#10C352] text-xl font-medium x:hidden">+ 27.78%</p>
                        </td>
                        <td className="flex flex-row sm:hidden">
                        <FaEthereum className="w-[22px] h-[21px]"></FaEthereum>
                            <p className="text-[#141416] text-xl font-semibold text-theme-change">3,5</p>
                        </td>
                        <td className="md:hidden">
                            <p className=" text-[#010101] text-xl font-medium text-theme-change">2.2K</p>
                        </td>
                        <td className="sm:hidden">
                            <p className="text-[#010101] text-xl font-medium text-theme-change">500</p>
                        </td>
                    </tr>
                    <tr className="flex flex-row items-center gap-28 border-b-2 border-[#EDF2F7] pb-4">
                        <td className="flex flex-row gap-4">
                        <ImageComponent path="/user2.png" className="w-[65px] h-[65px] m:w-[50px] m:h-[50px]"></ImageComponent>
                            <div className="flex flex-col">
                                <p className="text-[#141416] text-2xl font-medium text-theme-change m:text-xl">Alex Ca.</p>
                                <p className="text-[#64748B] text-xl m:text-base">By Alex</p>
                            </div>
                        </td>
                        <td className="flex flex-row x:flex-col">
                            <div className="flex flex-row">
                                <FaEthereum className="w-[22px] h-[21px]"></FaEthereum>
                                <p className="text-[#141416] text-xl font-semibold text-theme-change">4,780</p>
                            </div>
                            <p className="hidden x:flex text-[#10C352] text-base font-medium ml-1">+ 27.78%</p>
                        
                        </td>
                        <td className="x:hidden">
                            <p className="text-[#10C352] text-xl font-medium x:hidden">+ 27.78%</p>
                        </td>
                        <td className="flex flex-row sm:hidden">
                        <FaEthereum className="w-[22px] h-[21px]"></FaEthereum>
                            <p className="text-[#141416] text-xl font-semibold text-theme-change">7,9</p>
                        </td>
                        <td className="md:hidden">
                            <p className=" text-[#010101] text-xl font-medium text-theme-change">3.4K</p>
                        </td>
                        <td className="sm:hidden">
                            <p className="text-[#010101] text-xl font-medium text-theme-change">900</p>
                        </td>
                    </tr>
                    <tr className="flex flex-row items-center gap-28 border-b-2 border-[#EDF2F7] pb-4">
                        <td className="flex flex-row gap-4">
                        <ImageComponent path="/user1.png" className="w-[65px] h-[65px] m:w-[50px] m:h-[50px]"></ImageComponent>
                            <div className="flex flex-col">
                                <p className="text-[#141416] text-2xl font-medium text-theme-change m:text-xl">Alex Ca.</p>
                                <p className="text-[#64748B] text-xl m:text-base">By Alex</p>
                            </div>
                        </td>
                        <td className="flex flex-row x:flex-col">
                            <div className="flex flex-row">
                                <FaEthereum className="w-[22px] h-[21px]"></FaEthereum>
                                <p className="text-[#141416] text-xl font-semibold text-theme-change">8,456</p>
                            </div>
                            <p className="hidden x:flex text-[#10C352] text-base font-medium ml-1">+ 27.78%</p>
                        
                        </td>
                        <td className="x:hidden">
                            <p className="text-[#10C352] text-xl font-medium x:hidden">+ 27.78%</p>
                        </td>
                        <td className="flex flex-row sm:hidden">
                        <FaEthereum className="w-[22px] h-[21px]"></FaEthereum>
                            <p className="text-[#141416] text-xl font-semibold text-theme-change">3,5</p>
                        </td>
                        <td className="md:hidden">
                            <p className=" text-[#010101] text-xl font-medium text-theme-change">2.2K</p>
                        </td>
                        <td className="sm:hidden">
                            <p className="text-[#010101] text-xl font-medium text-theme-change">500</p>
                        </td>
                    </tr>
                    <tr className="flex flex-row items-center gap-28 border-b-2 border-[#EDF2F7] pb-4">
                        <td className="flex flex-row gap-4">
                        <ImageComponent path="/user2.png" className="w-[65px] h-[65px] m:w-[50px] m:h-[50px]"></ImageComponent>
                            <div className="flex flex-col">
                                <p className="text-[#141416] text-2xl font-medium text-theme-change m:text-xl">Alex Ca.</p>
                                <p className="text-[#64748B] text-xl m:text-base">By Alex</p>
                            </div>
                        </td>
                        <td className="flex flex-row x:flex-col">
                            <div className="flex flex-row">
                                <FaEthereum className="w-[22px] h-[21px]"></FaEthereum>
                            <p className="text-[#141416] text-xl font-semibold text-theme-change">4,780</p>
                            </div>
                            <p className="hidden x:flex text-[#10C352] text-base font-medium ml-1">+ 27.78%</p>
                        </td>
                        <td className="x:hidden">
                            <p className="text-[#10C352] text-xl font-medium x:hidden">+ 27.78%</p>
                        </td>
                        <td className="flex flex-row sm:hidden">
                        <FaEthereum className="w-[22px] h-[21px]"></FaEthereum>
                            <p className="text-[#141416] text-xl font-semibold text-theme-change">7,9</p>
                        </td>
                        <td className="md:hidden">
                            <p className=" text-[#010101] text-xl font-medium text-theme-change">3.4K</p>
                        </td>
                        <td className="sm:hidden">
                            <p className="text-[#010101] text-xl font-medium text-theme-change">900</p>
                        </td>
                    </tr>
                </tbody>
                
            </table>
            <div className="flex flex-row w-full justify-end mb-5"><a className="mt-20 text-[#ACADB9] text-right text-lg mr-40 flex flex-row gap-4 sm:mr-10" href="#">Explore All
            <ArrowSmallRightIcon className="w-[25px] h-[25px]"></ArrowSmallRightIcon>
            </a>
            
            </div>
        </div>
    );
}