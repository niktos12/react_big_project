import { ImageComponent } from "./Images";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export function Footer(){
    return(
        <div className="bg-[#141416] p-20 flex flex-col">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                    <ImageComponent path="/Wave.svg" className="w-[65px] h-[65px]"></ImageComponent>
                    <p className="font-semibold text-white text-2xl">DiveSea</p>
                </div>
                <div className="flex flex-row gap-16">
                    <a href="#" className="font-medium text-[#B9B9B9]">Privacy Policy</a>
                    <a href="#" className="font-medium text-[#B9B9B9]">Term & Conditions</a>
                    <a href="#" className="font-medium text-[#B9B9B9]">About Us</a>
                    <a href="#" className="font-medium text-[#B9B9B9]">Contact</a>
                </div>
            </div>
            <div className="h-[1px] w-full opacity-25 bg-[#818181] my-6 mb-10"></div>
            <div className="flex flex-row justify-between">
                <p className="text-[#999999] font-medium">© 2023 EATLY All Rights Reserved.</p>
                <div className="flex flex-row gap-10">
                    <FaInstagram className="w-[30px] h-[30px] text-[#999999] hover:text-[#FFFFFF] duration-500 cursor-pointer"></FaInstagram>
                    <FaLinkedinIn className="w-[30px] h-[30px] text-[#999999] hover:text-[#FFFFFF] duration-500 cursor-pointer"></FaLinkedinIn>
                    <FaFacebookF className="w-[30px] h-[27px] text-[#999999] hover:text-[#FFFFFF] duration-500 cursor-pointer"></FaFacebookF>
                    <FaTwitter className="w-[30px] h-[30px] text-[#999999] hover:text-[#FFFFFF] duration-500 cursor-pointer"></FaTwitter>
                </div>
            </div>
        </div>
    );
}