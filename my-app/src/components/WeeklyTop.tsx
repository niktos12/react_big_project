import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperWeeklyTop } from './SwiperWeeklyTop';
import SwiperCore from 'swiper';

export function WeeklyTop(){
    
    return(
        <div className="bg-[#F1F1F1] flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold text-[#C5C5C5] mt-16">Weekly - Top NFT</h1>
            <SwiperWeeklyTop/>
        </div>
    );
}