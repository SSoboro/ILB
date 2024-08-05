import Link from 'next/link';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import LogoIcon from '@/assets/logo_icon.svg';

export default function Header() {
    return (
        <header className='py-4'>
            <nav className='flex justify-between'>
                <Link href={'/'}>
                    <Image src={LogoIcon} alt='logo' />
                </Link>
                <button className='w-6 h-6'>
                    <RxHamburgerMenu className='mx-auto w-5 h-5 text-[#4C4646]' />
                </button>
            </nav>
        </header>
    );
}
