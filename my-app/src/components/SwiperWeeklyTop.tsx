import { Swiper , SwiperSlide , useSwiper } from "swiper/react";
import { Autoplay , Navigation} from 'swiper/modules';
import SwiperCore from "swiper";
import { ImageComponent } from '../components/Images';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaEthereum } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
export function SwiperWeeklyTop(){

    function NextSlide(){
        const swiper = useSwiper();
        return(
            <div className='bg-[#FCFCFD] flex flex-row p-5 gap-8 rounded-2xl shadow-[0_43px_34px_-25px_rgba(15,15,15,0.12)] absolute
             top-[80%] z-20 mx-auto right-[45%] lg:right-[40%] sm:right-[35%] xm:right-[30%]'>
                <div className='prev-button cursor-pointer'>
                    <HiOutlineArrowNarrowLeft onClick={() => swiper.slidePrev()} className='hover:scale-[1.15] duration-500 w-[27px] h-[27px] text-[#929292]
                    hover:text-[#23262F]'/>
                </div>
                <div className='h-[25px] w-[2px] bg-[#E6E8EC]'></div>
                <div className='next-button cursor-pointer'>
                    <HiOutlineArrowNarrowRight onClick={() => swiper.slideNext()} className='hover:scale-[1.15] duration-500  w-[27px] h-[27px] text-[#929292]
                    hover:text-[#23262F]'/>
                </div>
            </div>
        );
    }
    SwiperCore.use([Autoplay]);
    return(
        <Swiper
        slidesPerView={4.5}
        loop={true}
        direction="horizontal"
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        speed={1000}
        navigation={
            {
                nextEl: '.next-button',
                prevEl: '.prev-button',
            }
        
        }
        breakpoints={{
            1401:{
                slidesPerView: 4.5
            },
            1005:{
                slidesPerView: 3.5
            },
            711:{
                slidesPerView: 2.5
            },
            568:{
                slidesPerView: 2
            },
            480:{
                slidesPerView: 1.7
            },
            420:{
                slidesPerView: 1.5
            },
            300:{
                slidesPerView: 1.2
            }
        }}
        className="flex flex-row items-center gap-4 mt-20 mb-20 pb-20" 
        >
            <SwiperSlide style={{width: '300px'}} className="rounded-2xl bg-white !flex flex-col justify-center items-center py-4 
            shadow-xl">
                <ImageComponent path={'/SunGlass1.png'} alt="" className="w-[255px] rounded-2xl  h-[255px] mb-4"/>
                <div className="flex flex-col flex-start items-start w-[240px]">
                    <p className="text-[#141416] text-xl font-semibold mb-3">Sun-Glass</p>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col">
                            <p className="text-[#94A3B8] font-normal">Current bid</p>
                            <div className="flex flex-row">
                            <FaEthereum className="w-[21px] h-[21px] text-[#141416]"></FaEthereum>
                                <p className="text-base font-medium text-[#141416]">1.75</p>
                            </div>  
                        </div>
                        <button className="hover:bg-[#E6E8EC] hover:text-[#141416] duration-500 uppercase bg-[#141416] text-white text-sm font-semibold py-4 px-6 rounded-2xl ml-8">place bid</button>
                    </div>
                </div>
                
            </SwiperSlide>
            <SwiperSlide style={{width: '300px'}} className="rounded-2xl bg-white !flex flex-col justify-center items-center py-4 
            shadow-xl">
                <ImageComponent path={'/SunGlass2.png'} alt="" className="w-[255px] rounded-2xl  h-[255px] mb-4"/>
                <div className="flex flex-col flex-start items-start w-[240px]">
                    <p className="text-[#141416] text-xl font-semibold mb-3">Sun-Glass</p>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col">
                            <p className="text-[#94A3B8] font-normal">Current bid</p>
                            <div className="flex flex-row">
                            <FaEthereum className="w-[21px] h-[21px] text-[#141416]"></FaEthereum>
                                <p className="text-base font-medium text-[#141416]">1.75</p>
                            </div>  
                        </div>
                        <button className="hover:bg-[#E6E8EC] hover:text-[#141416] duration-500 uppercase bg-[#141416] text-white text-sm font-semibold py-4 px-6 rounded-2xl ml-8">place bid</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{width: '300px'}} className="rounded-2xl bg-white !flex flex-col justify-center items-center py-4
            shadow-xl">
                <ImageComponent path={'/SunGlass3.png'} alt="" className="w-[255px] rounded-2xl  h-[255px] mb-4"/>
                <div className="flex flex-col flex-start items-start w-[240px]">
                    <p className="text-[#141416] text-xl font-semibold mb-3">Sun-Glass</p>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col">
                            <p className="text-[#94A3B8] font-normal">Current bid</p>
                            <div className="flex flex-row">
                            <FaEthereum className="w-[21px] h-[21px] text-[#141416]"></FaEthereum>
                                <p className="text-base font-medium text-[#141416]">1.75</p>
                            </div>  
                        </div>
                        <button className="hover:bg-[#E6E8EC] hover:text-[#141416] duration-500 uppercase bg-[#141416] text-white text-sm font-semibold py-4 px-6 rounded-2xl ml-8">place bid</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{width: '300px'}} className="rounded-2xl bg-white !flex flex-col justify-center items-center py-4
            shadow-xl">
                <ImageComponent path={'/SunGlass4.png'} alt="" className="w-[255px] rounded-2xl  h-[255px] mb-4"/>
                <div className="flex flex-col flex-start items-start w-[240px]">
                    <p className="text-[#141416] text-xl font-semibold mb-3">NuEvey</p>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col">
                            <p className="text-[#94A3B8] font-normal">Current bid</p>
                            <div className="flex flex-row">
                            <FaEthereum className="w-[21px] h-[21px] text-[#141416]"></FaEthereum>
                                <p className="text-base font-medium text-[#141416]">1.25</p>
                            </div>  
                        </div>
                        <button className="hover:bg-[#E6E8EC] hover:text-[#141416] duration-500 uppercase bg-[#141416] text-white text-sm font-semibold py-4 px-6 rounded-2xl ml-8">place bid</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{width: '300px'}} className="rounded-2xl bg-white !flex flex-col justify-center items-center py-4
            shadow-xl"> 
                <ImageComponent path={'/NuEvey.jpg'} alt="" className="w-[255px] rounded-2xl  h-[255px] mb-4"/>
                <div className="flex flex-col flex-start items-start w-[240px]">
                    <p className="text-[#141416] text-xl font-semibold mb-3">NuEvey</p>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col">
                            <p className="text-[#94A3B8] font-normal">Current bid</p>
                            <div className="flex flex-row">
                            <FaEthereum className="w-[21px] h-[21px] text-[#141416]"></FaEthereum>
                                <p className="text-base font-medium text-[#141416]">1.25</p>
                            </div>  
                        </div>
                        <button className="hover:bg-[#E6E8EC] hover:text-[#141416] duration-500 uppercase bg-[#141416] text-white text-sm font-semibold py-4 px-6 rounded-2xl ml-8">place bid</button>
                    </div>
                </div>
            </SwiperSlide>  
            <SwiperSlide style={{width: '300px'}} className="rounded-2xl bg-white !flex flex-col justify-center items-center py-4
            shadow-xl">
                <ImageComponent path={'/SunGlass1.png'} alt="" className="w-[255px] rounded-2xl  h-[255px] mb-4"/>
                <div className="flex flex-col flex-start items-start w-[240px]">
                    <p className="text-[#141416] text-xl font-semibold mb-3">Sun-Glass</p>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col">
                            <p className="text-[#94A3B8] font-normal">Current bid</p>
                            <div className="flex flex-row">
                            <FaEthereum className="w-[21px] h-[21px] text-[#141416]"></FaEthereum>
                                <p className="text-base font-medium text-[#141416]">1.75</p>
                            </div>  
                        </div>
                        <button className="hover:bg-[#E6E8EC] hover:text-[#141416] duration-500 uppercase bg-[#141416] text-white text-sm font-semibold py-4 px-6 rounded-2xl ml-8">place bid</button>
                    </div>
                </div>
            </SwiperSlide>
            <NextSlide/>
        </Swiper>
    );
}