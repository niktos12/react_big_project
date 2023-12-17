import { QueueListIcon } from "@heroicons/react/24/solid";
import { ChartBarSquareIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { ImageComponent } from "./Images";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { FaEthereum } from "react-icons/fa";
import { useEffect, useState } from "react";
export function Marketplace(){

    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-[#141416] text-4xl font-semibold mb-16">Explore Marketplace</h1>
            <div className="flex flex-row gap-5 mb-20">
                <button className="border-[2.2px] bg-[#F9F9F9] rounded-xl border-[#141416] p-4 px-6" >All</button>
                <button className="border-[2.2px] bg-[#F9F9F9] rounded-xl border-[#141416] p-4 px-6 flex flex-row gap-2 text-[#1A202C]">
                    <QueueListIcon className="w-[25px] h-[25px]"></QueueListIcon>Category</button>
                <button className="border-[2.2px] bg-[#F9F9F9] rounded-xl border-[#141416] p-4 px-6 flex flex-row gap-2 text-[#1A202C]">
                    <ChartBarSquareIcon className="w-[25px] h-[25px]"></ChartBarSquareIcon>Collection</button>
                <button className="border-[2.2px] bg-[#F9F9F9] rounded-xl border-[#141416] p-4 px-6 flex flex-row gap-2 text-[#1A202C]">
                    <CurrencyDollarIcon className="w-[25px] h-[25px]"></CurrencyDollarIcon>Price</button>
            </div>
            <div className="grid grid-cols-[repeat(4,285px)] gap-10 gap-y-16 mb-20">
                <div className="bg-white rounded-3xl flex flex-col p-4 gap-4 shadow-2xl card">
                    <ImageComponent path="/SunGlass1.png" className="rounded-2xl h-[255px]"></ImageComponent>
                    <h2 className="text-[#141416] text-xl font-semibold">Sun-Glass</h2>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <p className="text-[#94A3B8] text-base">Current bid</p>
                            <div className="flex flex-row">
                                <FaEthereum className="w-[20px] h-[20px]"></FaEthereum>
                                <p className="font-medium text-lg price" id="cost">1.75</p>
                            </div>
                        </div>
                        <button className="uppercase bg-[#141416] text-white text-sm font-semibold py-4 px-6 rounded-2xl ml-8">place bid</button>
                    </div>
                </div>
                <div className="bg-white rounded-3xl flex flex-col p-4 gap-4 shadow-2xl card">
                    <ImageComponent path="/SunGlass2.png" className="rounded-2xl h-[255px]"></ImageComponent>
                    <h2 className="text-[#141416] text-xl font-semibold">Sun-Glass</h2>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <p className="text-[#94A3B8] text-base">Current bid</p>
                            <div className="flex flex-row">
                            <FaEthereum className="w-[20px] h-[20px]"></FaEthereum>
                                <p className="font-medium text-lg price" id="cost">1.75</p>
                            </div>
                        </div>
                        <button className="uppercase bg-[#141416] text-white text-sm font-semibold py-4 px-6 rounded-2xl ml-8">place bid</button>
                    </div>
                </div>
                <div className="bg-white rounded-3xl flex flex-col p-4 gap-4 shadow-2xl card">
                    <ImageComponent path="/SunGlass3.png" className="rounded-2xl h-[255px]"></ImageComponent>
                    <h2 className="text-[#141416] text-xl font-semibold">Sun-Glass</h2>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <p className="text-[#94A3B8] text-base">Current bid</p>
                            <div className="flex flex-row">
                            <FaEthereum className="w-[20px] h-[20px]"></FaEthereum>
                                <p className="font-medium text-lg price" id="cost">1.75</p>
                            </div>
                        </div>
                        <button className="uppercase bg-[#141416] text-white text-sm font-semibold py-4 px-6 rounded-2xl ml-8">place bid</button>
                    </div>
                </div>
                <div className="bg-white rounded-3xl flex flex-col p-4 gap-4 shadow-2xl card">
                    <ImageComponent path="/SunGlass4.png" className="rounded-2xl h-[255px]"></ImageComponent>
                    <h2 className="text-[#141416] text-xl font-semibold">NuEvey</h2>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <p className="text-[#94A3B8] text-base">Current bid</p>
                            <div className="flex flex-row">
                            <FaEthereum className="w-[20px] h-[20px]"></FaEthereum>
                                <p className="font-medium text-lg price" id="cost">1.25</p>
                            </div>
                        </div>
                        <button className="uppercase bg-[#141416] text-white text-sm font-semibold py-4 px-6 rounded-2xl ml-8">place bid</button>
                    </div>
                </div>
                <div className="bg-white rounded-3xl flex flex-col p-4 gap-4 shadow-2xl card">
                    <ImageComponent path="/SunGlass3.png" className="rounded-2xl h-[255px]"></ImageComponent>
                    <h2 className="text-[#141416] text-xl font-semibold">Sun-Glass</h2>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <p className="text-[#94A3B8] text-base">Current bid</p>
                            <div className="flex flex-row">
                            <FaEthereum className="w-[20px] h-[20px]"></FaEthereum>
                                <p className="font-medium text-lg price" id="cost">1.75</p>
                            </div>
                        </div>
                        <button className="uppercase bg-[#141416] text-white text-sm font-semibold py-4 px-6 rounded-2xl ml-8">place bid</button>
                    </div>
                </div>
                <div className="bg-white rounded-3xl flex flex-col p-4 gap-4 shadow-2xl card">
                    <ImageComponent path="/SunGlass4.png" className="rounded-2xl h-[255px]"></ImageComponent>
                    <h2 className="text-[#141416] text-xl font-semibold">NuEvey</h2>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <p className="text-[#94A3B8] text-base">Current bid</p>
                            <div className="flex flex-row">
                            <FaEthereum className="w-[20px] h-[20px]"></FaEthereum>
                                <p className="font-medium text-lg price" id="cost">1.25</p>
                            </div>
                        </div>
                        <button className="uppercase bg-[#141416] text-white text-sm font-semibold py-4 px-6 rounded-2xl ml-8">place bid</button>
                    </div>
                </div>
                <div className="bg-white rounded-3xl flex flex-col p-4 gap-4 shadow-2xl card">
                    <ImageComponent path="/SunGlass2.png" className="rounded-2xl h-[255px]"></ImageComponent>
                    <h2 className="text-[#141416] text-xl font-semibold">Sun-Glass</h2>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <p className="text-[#94A3B8] text-base">Current bid</p>
                            <div className="flex flex-row">
                            <FaEthereum className="w-[20px] h-[20px]"></FaEthereum>
                                <p className="font-medium text-lg price" id="cost">1.75</p>
                            </div>
                        </div>
                        <button className="uppercase bg-[#141416] text-white text-sm font-semibold py-4 px-6 rounded-2xl ml-8">place bid</button>
                    </div>
                </div>
                <div className="bg-white rounded-3xl flex flex-col p-4 gap-4 shadow-2xl card">
                    <ImageComponent path="/SunGlass1.png" className="rounded-2xl h-[255px]"></ImageComponent>
                    <h2 className="text-[#141416] text-xl font-semibold">Sun-Glass</h2>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <p className="text-[#94A3B8] text-base">Current bid</p>
                            <div className="flex flex-row">
                            <FaEthereum className="w-[20px] h-[20px]"></FaEthereum>
                                <p className="font-medium text-lg price" id="cost">1.75</p>
                            </div>
                        </div>
                        <button className="uppercase bg-[#141416] text-white text-sm font-semibold py-4 px-6 rounded-2xl ml-8">place bid</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full justify-end mt-5">
                <p className="flex flex-row gap-4 mb-20 text-[#ACADB9] text-right text-lg mr-40">Explore All <ArrowSmallRightIcon className="w-[25px] h-[25px]"></ArrowSmallRightIcon></p>
            </div>
            <div className="border-b-2 border-[#E6E8EC] w-[90%] mb-20"></div>
        </div>
    );
}