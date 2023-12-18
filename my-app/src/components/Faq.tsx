import { Disclosure } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
export function Faq(){
    const [theme, setTheme] = useState<'light'| 'dark'>('light');
  useEffect(() => {
    document.body.className = theme;
    
  }, [theme]);
    return(
        <div className="flex flex-col justify-center items-center mb-40 mt-40">
            <h1 className="text-5xl font-semibold text-[#18181B] text-center leading-snug mb-20 text-theme-change">Frequently Asked 
                <br></br>
                <span className="text-[#C5C5C5]">Questions</span>
            </h1>
            <Disclosure>
                {({open}) => (
                <>
                    <Disclosure.Button className={`flex flex-row justify-between items-center w-[85%] px-3 hover:bg-[#E6E8EC] rounded-2xl hover-change duration-500`}>
                        <p className='text-2xl text-[#323142] font-semibold text-theme-change'>What is an NFT?</p>
                        <XCircleIcon className={` w-[35px] h-[35px] ${open ? '' :  'rotate-45 transform'}`}></XCircleIcon>
                    </Disclosure.Button>
                    <Disclosure.Panel className='px-20 py-2 w-[90%]'>
                    NFT stands for ‘non-fungible token’. Non-fungible means that something is unique and can’t be replaced. 
                    By contrast, physical money and cryptocurrencies are fungible, 
                    which means they can be traded or exchanged for one another.
                    </Disclosure.Panel>
                    <div className='w-[85%] h-[2px] bg-[#ADADAD] mt-4 mb-10'></div>
                </>
                )}
            </Disclosure>
            <Disclosure>
                {({open}) => (
                    <>
                        <Disclosure.Button className='flex flex-row justify-between items-center w-[85%] px-3 hover:bg-[#E6E8EC] rounded-2xl hover-change duration-500'>
                        <p className='text-2xl text-[#323142] font-semibold text-theme-change'>What can I use NFTs for?</p>
                        <XCircleIcon className={` w-[35px] h-[35px] ${open ? '' :  'rotate-45 transform'}`}></XCircleIcon>
                        </Disclosure.Button>
                        <Disclosure.Panel className='px-20 py-2 w-[90%]'>
                        Companies can use NFTs to offer unique rewards to their customers. An NFT can grant special access or privileges,
                         transfer ownership of a rare digital collectible, or create a personalized digital experience.
                         Rewards that are tokenized into NFTs may also be traded or sold.
                        </Disclosure.Panel>
                        <div className='w-[85%] h-[2px] bg-[#ADADAD] mt-4 mb-10'></div>
                    </>
                )}
            </Disclosure>
            <Disclosure>
                {({open}) => (
                    <>
                        <Disclosure.Button className='flex flex-row justify-between items-center w-[85%] px-3 hover:bg-[#E6E8EC] rounded-2xl hover-change duration-500'>
                        <p className='text-2xl text-[#323142] font-semibold text-theme-change'>What is the difference between an NFT and cryptocurrency?</p>
                        <XCircleIcon className={` w-[35px] h-[35px] ${open ? '' :  'rotate-45 transform'}`}></XCircleIcon>
                        </Disclosure.Button>
                        <Disclosure.Panel className='px-20 py-2 w-[90%]'>
                        Cryptocurrency is an encrypted form of digital currency that relies on blockchain technology 
                        and doesn't depend on financial institutions to verify transactions. NFTs are one-of-a-kind 
                        digital assets that are stored on a blockchain and cannot be duplicated or cloned.
                        </Disclosure.Panel>
                        <div className='w-[85%] h-[2px] bg-[#ADADAD] mt-4 mb-10'></div>
                    </>
                )}
            </Disclosure>
            <Disclosure>
                {({open}) => (
                    <>
                        <Disclosure.Button className='flex flex-row justify-between items-center w-[85%] px-3 hover:bg-[#E6E8EC] rounded-2xl hover-change duration-500'>
                        <p className='text-2xl text-[#323142] font-semibold text-theme-change'>How much is an NFT worth?</p>
                        <XCircleIcon className={` w-[35px] h-[35px] ${open ? '' :  'rotate-45 transform'}`}></XCircleIcon>
                        </Disclosure.Button>
                        <Disclosure.Panel className='px-20 py-2 w-[90%]'>
                        $0.0922
                        </Disclosure.Panel>
                        <div className='w-[85%] h-[2px] bg-[#ADADAD] mt-4 mb-10'></div>
                    </>
                )}
            </Disclosure>
            <Disclosure>
                {({open}) => (
                    <>
                        <Disclosure.Button className='flex flex-row justify-between items-center w-[85%] px-3 hover:bg-[#E6E8EC] rounded-2xl hover-change duration-500'>
                        <p className='text-2xl text-[#323142] font-semibold text-theme-change'>How do I purchase an NFT on your platform ?</p>
                        <XCircleIcon className={` w-[35px] h-[35px] ${open ? '' :  'rotate-45 transform'}`}></XCircleIcon>
                        </Disclosure.Button>
                        <Disclosure.Panel className='px-20 py-2 w-[90%]'>
                        Yes, you can buy NFT on our platform, and also exchange your NFT between other people.
                        </Disclosure.Panel>
                        <div className='w-[85%] h-[2px] bg-[#ADADAD] mt-4 mb-10'></div>
                    </>
                )}
            </Disclosure>
        </div>
    );
}