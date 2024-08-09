'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Nav from './Nav';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='fixed py-2.5 px-5 w-[375px] top-0 bg-transparent z-10'>
            <nav className='flex justify-between items-center'>
                <Link href={'/'}>
                    <Image
                        src={'/logo_icon.svg'}
                        alt='logo'
                        width={36}
                        height={36}
                    />
                </Link>
                <button className='w-9 h-9' onClick={handleOnClick}>
                    <RxHamburgerMenu className='mx-auto w-7 h-7 text-[#4C4646]' />
                </button>
            </nav>
            {isOpen && <Nav />}
        </header>
    );
}
