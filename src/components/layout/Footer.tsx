import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='py-[40px] px-[15px] bg-[#EAF0EE] flex flex-col gap-[45px]'>
            <Image
                className='-ml-2.5'
                width={85}
                height={85}
                src={'/logo_color.svg'}
                alt=''
            />
            <div className='flex flex-col gap-[2px]'>
                <p className='text-txt-foreground text-sm font-bold'>
                    주)소보로
                </p>
                <p className='text-txt-foreground text-sm'>대표 : 여윤민</p>
                <p className='text-txt-foreground text-sm '>
                    서울특별시 중구 퇴계로 324, 10층
                </p>
                <p className='text-txt-foreground text-sm'>
                    사업자등록번호 000-0000-0000
                </p>
                <p className='text-txt-foreground text-sm'>
                    통신판매업 신고번호 : 0000-서울서초-0000
                </p>
            </div>

            <div className='flex flex-col items-start gap-[5px]'>
                <div className='text-sm font-bold text-txt-foreground'>
                    서비스 이용약관
                </div>
                <div className='text-sm font-bold text-txt-foreground'>
                    개인정보 처리방침
                </div>
            </div>

            <p className='text-sm text-txt-foreground'>
                Copyright ⓒ 2024 주식회사 소보로 All rights reserved.
            </p>
        </footer>
    );
}
