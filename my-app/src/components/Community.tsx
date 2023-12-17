import { ImageComponent } from "./Images";
export function Community(){
    return(
        <div className="flex flex-col justify-center items-center mb-56">
            <div className="border-2 border-[#D2D2D2] rounded-[1061px] w-[1061px] h-[1061px] flex flex-col justify-center items-center 
            relative">
                <ImageComponent path="/iconForCircle.png" className="absolute top-[25px] left-[255px]"></ImageComponent>
                <ImageComponent path="/iconForCircle2.png" className="absolute top-[150px] right-[105px] "></ImageComponent>
                <ImageComponent path="/iconForCircle3.png" className="absolute bottom-[145px] right-[100px]"></ImageComponent>
                <ImageComponent path="/iconForCircle4.png" className="absolute bottom-[180px] left-[85px]"></ImageComponent>
                <div className="border-2 border-[#D2D2D2] rounded-[831px] w-[831px] h-[831px] flex flex-col gap-7 justify-center items-center
                relative">
                    <ImageComponent path="/iconForCircle5.png" className="absolute top-[40px] right-[160px]"></ImageComponent>
                    <ImageComponent path="/iconForCircle6.png" className="absolute bottom-[320px] right-[-30px]"></ImageComponent>
                    <ImageComponent path="/iconForCircle7.png" className="absolute bottom-[35px] right-[165px]"></ImageComponent>
                    <ImageComponent path="/iconForCircle8.png" className="absolute top-[150px] left-[50px]"></ImageComponent>
                    <div className="not-animate flex flex-col justify-center items-center gap-7">
                        <h1 className="text-[#18181B] text-4xl font-bold text-center">Join The <span className="text-[#C5C5C5]"><br></br>Community</span></h1>
                        <p className="opacity-70 text-[#12141D] text-center text-lg">Our vibrant community is full of collectors, artists, and enthusiasts<br></br> who share a passion for one-of-a-kind digital.</p>
                        <button className="mt-2 bg-black text-white font-medium py-4 px-6 rounded-xl">Join  Our Community</button>
                    </div>
                </div>
           </div>
        </div>
    );
}