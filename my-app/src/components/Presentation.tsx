import ArrowPic from '../img/Arrow01.png'
import cardPres from '../img/cardPres.png'
import cardPres2 from '../img/cardPres2.png'
import Dots from '../img/DotOrnament.svg'


export function Presentation(){
    return(
        <div className="flex flex-row items-center justify-start gap-20 p-20 pb-40">
            <div className="flex flex-col items-start gap-2 w-1/2 pr-20">
                <div className="h-[1px] opacity-20 w-[138px] bg-[#201F1F] mb-0.5"></div>
                <h1 className="capitalize text-6xl text-[#141416] font-semibold mb-1.5">Discover And Create NFTs</h1>
                <p className="text-lg text-[#676767] font-normal mb-8">Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a  
                 <span className="text-[#141416] font-semibold"> $20 bonus.</span>
                </p>
                <div className="flex flex-row gap-5 mb-16">
                    <button className="rounded-lg py-3 px-6 bg-black text-white uppercase text-base font-medium">Explore more</button>
                    <button className="rounded-lg py-3 px-5 bg-[#F9F9F9] text-black uppercase border border-black text-base font-medium">Create nft</button>
                </div>
                <div className="flex flex-row gap-11">
                    <div className="">
                        <p className="text-[#141416] text-4xl font-semibold">430K+</p>
                        <p className="text-[#848586] text-sm">Art Works</p>
                    </div>
                    <div className="">
                        <p className="text-[#141416] text-4xl font-semibold">159K+</p>
                        <p className="text-[#848586] text-sm">Creators</p>
                    </div>
                    <div className="">
                        <p className="text-[#141416] text-4xl font-semibold">87K+</p>
                        <p className="text-[#848586] text-sm">Collections</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 ml-20">
                    <img src={cardPres} alt='' className='mb-20 absolute right-80 top-36 ml-20 object-cover mt-20'></img>
                    <img src={cardPres2} alt='' className='mt-32 right-0 absolute top-[265px]'></img>
                
                <img src={Dots} alt='' className='absolute right-0 top-48'></img>
                <img src={ArrowPic} alt='' className='absolute right-44 top-60 '></img>
            </div>
            

        </div>
    );
}