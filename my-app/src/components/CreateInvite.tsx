import { ImageComponent } from "./Images";
export function CreateInvite(){
    return(
        <div className="flex justify-center mb-40">
            <div className="bg-[#141416] flex flex-row w-[80%] justify-between items-center p-8 rounded-[30px] pl-12 lg:flex-col lg;justify-center lg:items-center m:p-4">
                <div className="flex flex-col lg:items-center m:justify-center m:text-center">
                    <h1 className="text-white text-4xl font-semibold mb-3">Create and Sell NFTs</h1>
                    <p className="text-[#D4D4D4] font-medium mb-12 text-xl">World’s Largest NFT Place</p>
                    <div className="flex flex-row gap-7">
                        <button className="hover:bg-[#615c5c] hover:text-white duration-500 py-4 px-6 bg-white rounded-xl text-[#141416] font-semibold xm:text-sm xm:py-2 xm:px-3">Explore More</button>
                        <button className="hover:bg-[#E6E8EC] hover:text-[#141416] duration-500 py-4 px-6 rounded-xl border-2 border-white text-white font-semibold  xm:text-sm xm:py-2 xm:px-3">Sell Artwork</button>
                    </div>
                </div>
                <div className="lg:mt-4 m:max-w-[270px] ">
                    <ImageComponent path="/CreateInvite.png"></ImageComponent>
                </div>
            </div>
        </div>    
    );
}