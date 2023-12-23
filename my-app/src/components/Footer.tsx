import { ImageComponent } from "./Images";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Social } from "./Social";
export function Footer(){
    return(
        <div className="bg-[#141416] p-20 flex flex-col xm:px-10">
            <div className="flex flex-row justify-between items-center md:flex-col md:justify-start md:items-start">
                <div className="flex flex-row items-center md:justify-between md:w-full m:flex-col m:justify-start m:items-start m:gap-5">
                    <div className="flex flex-row items-center gap-2">
                        <ImageComponent path="/Wave.svg" className="w-[65px] h-[65px]"></ImageComponent>
                        <p className="font-semibold text-white text-2xl">DiveSea</p>
                    </div>
                    <div className="hidden md:flex">
                        <Social/>
                    </div>
                    
                </div>
                <div className="flex flex-row gap-16 md:flex-col md:gap-7 md:mt-10">
                    <a className="font-medium text-[#B9B9B9] md:uppercase hover:underline">Privacy Policy</a>
                    <a className="font-medium text-[#B9B9B9] md:uppercase hover:underline">Term & Conditions</a>
                    <a className="font-medium text-[#B9B9B9] md:uppercase hover:underline">About Us</a>
                    <a className="font-medium text-[#B9B9B9] md:uppercase hover:underline">Contact</a>
                </div>
            </div>
            <div className="h-[1px] w-full opacity-25 bg-[#818181] my-6 mb-10"></div>
            <div className="flex flex-row justify-between">
                <p className="text-[#999999] font-medium">© 2023 EATLY All Rights Reserved.</p>
                <div className="md:hidden">
                    <Social/>
                </div>
                
            </div>
        </div>
    );
}