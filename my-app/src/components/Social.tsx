import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export function Social(){
    return(
        <div className="flex flex-row gap-10">
            <FaInstagram className="w-[30px] h-[30px] text-[#999999] hover:text-[#FFFFFF] duration-500 cursor-pointer"></FaInstagram>
            <FaLinkedinIn className="w-[30px] h-[30px] text-[#999999] hover:text-[#FFFFFF] duration-500 cursor-pointer"></FaLinkedinIn>
            <FaFacebookF className="w-[30px] h-[27px] text-[#999999] hover:text-[#FFFFFF] duration-500 cursor-pointer"></FaFacebookF>
            <FaTwitter className="w-[30px] h-[30px] text-[#999999] hover:text-[#FFFFFF] duration-500 cursor-pointer"></FaTwitter>
        </div>
        
    );
}