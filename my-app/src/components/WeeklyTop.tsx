import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import  SunGlassFirst  from '../img/SunGlass1.png'
import  SunGlassSecond  from '../img/SunGlass2.png'
import  SunGlassThird  from '../img/SunGlass3.png'
import  SunGlassFourth  from '../img/SunGlass4.png'
import NuEvey from '../img/NuEvey.png'
import { SwiperWeeklyTop } from './SwiperWeeklyTop';
import ArrowRight from '../img/ArrowRight.svg'
import ArrowLeft from '../img/ArrowLeft.svg'
import SwiperCore from 'swiper';

export function WeeklyTop(){
    
    return(
        <div className="bg-[#F1F1F1] flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold text-[#C5C5C5] mt-16">Weekly - Top NFT</h1>
            <SwiperWeeklyTop/>
        </div>
    );
}