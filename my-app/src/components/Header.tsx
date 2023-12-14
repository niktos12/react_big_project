export function Header(){
    return(
        <div className="flex flex-row justify-between items-center gap-28 py-11 px-20">
            <div className='flex flex-row gap-12 items-center'>
                <img src='/Logo.svg' alt=''></img>
                <a href="#" className='text-lg text-color font-medium uppercase'>Discover</a>
                <a href="#" className='text-lg text-color font-medium uppercase'>Creators</a>
                <a href="#" className='text-lg text-color font-medium uppercase'>Sell</a>
                <a href="#" className='text-lg text-color font-medium uppercase'>Stats</a>
            </div>
            <div className='flex flex-row items-center'>
                <img src='/IconSearch.svg' alt='' className='absolute ml-2'></img>
                <input type='text' placeholder='Search Art Work / Creator' className='px-12 py-4 bg-[#EDEDED] input-text rounded-lg text-lg'></input>
                <button className='bg-[#141416] text-white text-lg uppercase py-4 px-6 rounded-2xl ml-6'>Connect wallet</button>
            </div>
            
        </div>
    );
}