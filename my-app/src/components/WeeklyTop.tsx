import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperWeeklyTop } from './SwiperWeeklyTop';
import SwiperCore from 'swiper';
import { useEffect, useState } from 'react';

export function WeeklyTop(){
    const [theme,setTheme] = useState<'light'| 'dark'>('light');
    useEffect(()=> {
        document.body.className = theme;
    }, [theme])
    return(
        <div className={`${theme === 'dark' ? 'bg-[#12141D]' : 'bg-[#F1F1F1]'} flex flex-col justify-center items-center swiper-bg-change`}>
            <h1 className="text-4xl font-semibold text-[#C5C5C5] mt-16">Weekly - Top NFT</h1>
            <SwiperWeeklyTop/>
        </div>
    );
}
