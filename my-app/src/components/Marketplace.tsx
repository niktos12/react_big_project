import { QueueListIcon } from "@heroicons/react/24/solid";
import { ChartBarSquareIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { ImageComponent } from "./Images";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { FaEthereum } from "react-icons/fa";
import { useEffect, useState } from "react";
export function Marketplace(){
    const [show, setShow] = useState<boolean>(false);
   
    const HandleShow = () =>{
        setShow(!show);
    }
    
    
    type Card = {
        name: string;
        image: string;
        price: number;
        category: string;
        id: number;
        collection?: string;
    }
    
    const array : Card[] = [
        {
            name:'Sun-glass',
            image:'/SunGlass1.png',
            price: 1.75,
            category: 'Glasses',
            collection: 'Collection 1',
            id: 1,
        },
        {
            name:'Sun-glass',
            image:'/SunGlass2.png',
            price: 1.75,
            category: 'Glasses',
            collection: 'Collection 1',
            id: 2,
        },
        {
            name:'Sun-glass',
            image:'/SunGlass3.png',
            price: 1.75,
            category: 'Glasses',
            collection: 'Collection 1',
            id: 3,
        },
        {
            name:'NuEvey',
            image:'/SunGlass4.png',
            price: 1.25,
            category: 'Glasses',
            collection: 'Collection 1',
            id: 4,
        },
        {
            name:'Sun-glass',
            image:'/SunGlass3.png',
            price: 1.75,
            category: 'Glasses',
            collection: 'Collection 1',
            id: 5,
        },
        {
            name:'NuEvey',
            image:'/SunGlass4.png',
            price: 1.25,
            category: 'Glasses',
            collection: 'Collection 1',
            id: 6,
        },
        {
            name:'Sun-glass',
            image:'/SunGlass2.png',
            price: 1.75,
            category: 'Glasses',
            collection: 'Collection 1',
            id: 7,
        },
        {
            name:'Sun-glass',
            image:'/SunGlass1.png',
            price: 1.75,
            category: 'Glasses',
            collection: 'Collection 1',
            id: 8,
        },
    ]
    
    const CardComponent: React.FC<{ card: Card }> = ({ card }) => (
        <div className={`bg-white rounded-3xl flex flex-col p-4 gap-4 shadow-2xl card`}>
                         <ImageComponent path={card.image} className="rounded-2xl h-[255px]"/>
                         <h2 className="text-[#141416] text-xl font-semibold">{card.name}</h2>
                         <div className="flex flex-row">
                             <div className="flex flex-col">
                                 <p className="text-[#94A3B8] text-base">Current bid</p>
                                 <div className="flex flex-row">
                                     <FaEthereum className="w-[20px] h-[20px]"></FaEthereum>
                                     <p className="text-[#141416] text-lg font-medium">{card.price}</p>
                                 </div>
                             </div>
                             <button className="uppercase bg-[#141416] text-white text-sm font-semibold py-4 px-6 rounded-2xl ml-8 text-theme-change bg-theme-change">place bid</button>
                         </div>
             </div>
      );

    return(
        <div className="flex flex-col justify-center items-center" id="sell">
            <h1 className="text-[#141416] text-4xl font-semibold mb-16 text-theme-change">Explore Marketplace</h1>
            <div className="flex flex-row gap-5 mb-20 m:grid m:grid-cols-2 ">
                <button className="border-[2.2px] bg-[#F9F9F9] rounded-xl border-[#141416] p-4 px-6 text-[#1A202C]" 
                 key={'all'}>All</button>
                <button className="border-[2.2px] bg-[#F9F9F9] rounded-xl border-[#141416] p-4 px-6 flex flex-row gap-2 text-[#1A202C]" 
                 key={'category'}>
                    <QueueListIcon className="w-[25px] h-[25px]"></QueueListIcon>Category</button>
                <button className="border-[2.2px] bg-[#F9F9F9] rounded-xl border-[#141416] p-4 px-6 flex flex-row gap-2 text-[#1A202C]" 
                 key={'collection'}>
                    <ChartBarSquareIcon className="w-[25px] h-[25px]"></ChartBarSquareIcon>Collection</button>
                <button className="border-[2.2px] bg-[#F9F9F9] rounded-xl border-[#141416] p-4 px-6 flex flex-row gap-2 text-[#1A202C]" 
                 key={'price'} >
                    <CurrencyDollarIcon className="w-[25px] h-[25px]"></CurrencyDollarIcon>Price</button>
            </div>
            <div className="grid grid-cols-[repeat(4,285px)] gap-10 gap-y-16 mb-20 3xl:grid-cols-[repeat(3,285px)] lg:grid-cols-[repeat(2,285px)] m:grid-cols-[repeat(1,285px)]">
                    {array.map((card,index) => (
                        <CardComponent key={index} card={card} />
                    ))}
                
            </div>
            <button className="hidden 2xl:flex bg-[#141416] text-white text-base font-semibold py-4 px-8 rounded-2xl cursor-pointer btn-theme
            " onClick={() => HandleShow()}>{show ? 'Hide' : 'Show All'}</button>
            <div className="flex flex-row w-full justify-end mt-5">
                <p className="flex flex-row gap-4 mb-20 text-[#ACADB9] text-right text-lg mr-40 cursor-pointer
                sm:mr-10 xl:mt-5">Explore All <ArrowSmallRightIcon className="w-[25px] h-[25px]"></ArrowSmallRightIcon></p>
            </div>
            <div className="border-b-2 border-[#E6E8EC] w-[90%] mb-20"></div>
        </div>
    );
}