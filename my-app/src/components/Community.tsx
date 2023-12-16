export function Community(){
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="border-2 border-[#D2D2D2] rounded-[831px] w-[831px] h-[831px] flex flex-col gap-7 justify-center items-center">
                <h1 className="text-[#18181B] text-4xl font-bold text-center">Join The <span className="text-[#C5C5C5]"><br></br>Community</span></h1>
                <p className="opacity-70 text-[#12141D] text-center text-lg">Our vibrant community is full of collectors, artists, and enthusiasts<br></br> who share a passion for one-of-a-kind digital.</p>
                <button className="mt-2 bg-black text-white font-medium py-4 px-6 rounded-xl">Join  Our Community</button>
            </div>
        </div>
    );
}