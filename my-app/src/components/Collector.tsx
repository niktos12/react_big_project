import {ImageComponent} from "./Images";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import List from "./List";
export function Collector(){
    return(
        <div className="flex flex-row justify-center gap-20 mb-40 xl:justify-end x:gap-10 lg:flex-col lg:justify-center lg:items-center lg:mb-20 xm:mb-0" id="stats">
            <div className="flex flex-col gap-11 items-start mt-12">
                <h1 className="text-4xl text-[#18181B] font-semibold text-theme-change"><span className="text-[#C5C5C5]">Just Unleash -</span><br></br>Your Inner Collector</h1>
                <List/>
                <button className="hover-change duration-500 flex flex-row bg-black text-white font-medium rounded-xl py-4 px-6 gap-3 mt-5 btn-theme">Explore More
                    <ArrowSmallRightIcon className="w-[25px] h-[25px]"></ArrowSmallRightIcon>
                </button>
            </div>
            <div className="">
                <ImageComponent path="/CollectorImg.png" className="h-[613px] xl:w-[653px] lg:w-full sm:max-w-[450px] sm:max-h-[400px] xm:max-w-[400px] xm:max-h-[400px]"></ImageComponent>
            </div>
        </div>
    ); 
    }
    