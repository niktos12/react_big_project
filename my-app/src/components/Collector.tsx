import {ImageComponent} from "./Images";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import List from "./List";
export function Collector(){
    return(
        <div className="flex flex-row justify-center gap-20 mb-40 xl:justify-end x:gap-10">
            <div className="flex flex-col gap-11 items-start mt-12">
                <h1 className="text-4xl text-[#18181B] font-semibold text-theme-change"><span className="text-[#C5C5C5]">Just Unleash -</span><br></br>Your Inner Collector</h1>
                <List/>
                <button className="flex flex-row bg-black text-white font-medium rounded-xl py-4 px-6 gap-3 mt-5 btn-theme">Explore More
                    <ArrowSmallRightIcon className="w-[25px] h-[25px]"></ArrowSmallRightIcon>
                </button>
            </div>
            <div className="">
                <ImageComponent path="/CollectorImg.png" className="h-[613px] xl:w-[653px]"></ImageComponent>
            </div>
        </div>
    ); 
    }
    