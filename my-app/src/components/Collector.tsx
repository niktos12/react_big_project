import {ImageComponent} from "./Images";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import List from "./List";
export function Collector(){
    return(
        <div className="flex flex-row justify-center gap-20 mb-40">
            <div className="flex flex-col gap-11 items-start mt-12">
                <h1 className="text-4xl text-[#18181B] font-semibold"><span className="text-[#C5C5C5]">Just Unleash -</span><br></br>Your Inner Collector</h1>
                <List/>
                <button className="flex flex-row bg-black text-white font-medium rounded-xl py-4 px-6 gap-3 mt-5">Explore More
                    <ArrowSmallRightIcon className="text-white w-[25px] h-[25px]"></ArrowSmallRightIcon>
                </button>
            </div>
            <div className="">
                <ImageComponent path="/CollectorImg.png" className="h-[613px]"></ImageComponent>
            </div>
        </div>
    ); 
    }
    