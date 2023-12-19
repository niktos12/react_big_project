import { ImageComponent } from "./Images";
export function Community(){
    return(
        <div className="flex flex-col justify-center items-center h-[1000px] overflow-hidden relative">
            <div 
                className="border-2 border-[#D2D2D2] rounded-full max-w-[1061px] max-h-[1061px] w-full h-full 
                flex flex-col justify-center items-center absolute animate-spin 3xl:max-w-[800px] 3xl:max-h-[800px]"
            >
                <ImageComponent 
                    path="/iconForCircle.png" 
                    className="absolute top-[25px] left-[255px] 3xl:top-[-15px]"
                />
                <ImageComponent 
                    path="/iconForCircle2.png" 
                    className="absolute top-[150px] right-[105px] 3xl:top-[75px]"
                />
                <ImageComponent 
                    path="/iconForCircle3.png" 
                    className="absolute bottom-[145px] right-[100px] 3xl:bottom-[65px]"
                />
                <ImageComponent 
                    path="/iconForCircle4.png" 
                    className="absolute bottom-[180px] left-[85px] 3xl:bottom-[100px]"
                />
            </div>
                <div 
                    className="border-2 border-[#D2D2D2] rounded-full max-w-[831px] max-h-[831px] w-full h-full 
                    flex flex-col gap-7 justify-center items-center absolute animate-spin-reverse 3xl:max-w-[600px] 3xl:max-h-[600px]"
                >
                    <ImageComponent 
                        path="/iconForCircle5.png" 
                        className="absolute top-[40px] right-[160px] 3xl:top-[-5px]"/>
                    <ImageComponent 
                        path="/iconForCircle6.png" 
                        className="absolute bottom-[320px] right-[-25px]"
                        />
                    <ImageComponent 
                        path="/iconForCircle7.png" 
                        className="absolute bottom-[35px] right-[165px] 3xl:bottom-[-5px]"
                        />
                    <ImageComponent 
                        path="/iconForCircle8.png" 
                        className="absolute top-[150px] left-[50px] 3xl:top-[70px]"
                        />
                </div>
                    <div className="not-animate flex flex-col justify-center items-center gap-7">
                        <h1 className="text-[#18181B] text-4xl font-bold text-center text-theme-change">Join The 
                            <span className="text-[#C5C5C5]">
                                <br></br>Community
                            </span>
                        </h1>
                        <p className="opacity-70 text-[#12141D] text-center text-lg text-theme-change">
                            Our vibrant community is full of collectors, artists, and enthusiasts
                            <br></br> who share a passion for one-of-a-kind digital.
                        </p>
                        <button className="mt-2 bg-black text-white py-4 px-6 rounded-xl cursor-pointer btn-theme font-semibold">Join  Our Community</button>
                    </div>
        </div>
    );
}