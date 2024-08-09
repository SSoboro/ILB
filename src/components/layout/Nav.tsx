import Link from 'next/link';
import { PiXBold } from 'react-icons/pi';

export default function Nav() {
    return (
        <nav className='absolute flex flex-col top-0 left-0 w-full h-screen bg-white'>
            <PiXBold className='absolute top-[18px] right-5 w-6 h-6 text-[#4C4646]' />
            <div className='pt-[56px] px-[18px] mb-8'>
                <span className='font-bold'>소보로</span>
                님,
                <p className='mt-1'>
                    소중한 우리 아이와 행복한 순간을 함께하세요!
                </p>
            </div>
            <Link className='py-[19px] px-[19px]' href='/'>
                홈
            </Link>
            <Link className='py-[19px] px-[19px]' href='/list'>
                상품 리스트
            </Link>
            <Link className='py-[19px] px-[19px]' href='#'>
                (함께 보면 좋은 사이트)
            </Link>
            <Link className='py-[19px] px-[19px]' href='#'>
                (파트너사)
            </Link>
            <hr className='my-6 border-[#CDC5C5]' />
            <Link className='py-[19px] px-[19px]' href='/mypage'>
                마이 페이지
            </Link>
            <Link className='py-[19px] px-[19px]' href='#'>
                설정
            </Link>
        </nav>
    );
}
