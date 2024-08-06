import Link from 'next/link';

export default function Nav() {
    return (
        <nav className='flex flex-col'>
            <div className='py-[16px] px-[16px]  mb-[14px]'>
                <p>
                    <span className='font-bold'>소보로</span>님,
                </p>
                <p>소중한 우리 아이와 행복한 순간을 함께하세요!</p>
            </div>
            <Link className='py-[19px] px-[19px]' href='#'>
                홈
            </Link>
            <Link className='py-[19px] px-[19px]' href='#'>
                상품 리스트
            </Link>
            <Link className='py-[19px] px-[19px]' href='#'>
                (함께 보면 좋은 사이트)
            </Link>
            <Link className='py-[19px] px-[19px]' href='#'>
                (파트너사)
            </Link>
            <hr className='border-[#CDC5C5]' />
            <Link className='py-[19px] px-[19px]' href='#'>
                마이 페이지
            </Link>
            <Link className='py-[19px] px-[19px]' href='#'>
                설정
            </Link>
        </nav>
    );
}
