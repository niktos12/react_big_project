import { ImageComponent } from "./Images";
export function CreateInvite(){
    return(
        <div className="flex justify-center mb-40">
            <div className="bg-[#141416] flex flex-row w-[80%] justify-between items-center p-8 rounded-[30px] pl-12">
                <div className="flex flex-col">
                    <h1 className="text-white text-4xl font-semibold mb-3">Create and Sell NFTs</h1>
                    <p className="text-[#D4D4D4] font-medium mb-12 text-xl">World’s Largest NFT Place</p>
                    <div className="flex flex-row gap-7">
                        <button className="py-4 px-6 bg-white rounded-xl text-[#141416] font-semibold">Explore More</button>
                        <button className="py-4 px-6 rounded-xl border-2 border-white text-white font-semibold">Sell Artwork</button>
                    </div>
                </div>
                <div>
                    <ImageComponent path="/CreateInvite.png"></ImageComponent>
                </div>
            </div>
        </div>    
    );
}