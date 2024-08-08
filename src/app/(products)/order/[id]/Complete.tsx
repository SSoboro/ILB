import Image from 'next/image';
import Link from 'next/link';

export default function Complete() {
    return (
        <main>
            <section className='flex flex-col items-center'>
                <Image
                    width={100}
                    height={100}
                    src={'/baby_complete.svg'}
                    alt='웃고 있는 아이 이미지'
                />
                <h1 className='mt-5'>정기 구독이 신청되었습니다</h1>
                <div className='mt-[42px] flex gap-[15px]'>
                    <Link
                        className='flex items-center border border-primary-foreground justify-center bg-white w-40 h-default font-medium rounded-default'
                        href={'/'}>
                        홈으로 가기
                    </Link>
                    <Link
                        className='flex items-center bg-primary-foreground justify-center w-40 h-default font-medium rounded-default'
                        href={'#'}>
                        구독상품 보러가기
                    </Link>
                </div>
            </section>
            <div className='mt-10 relative w-[375px] bg-[#F7EFEF] h-[16px]'></div>
            <article>
                <h2 className='my-[18px] font-bold text-lg'>배송정보</h2>
                <div className='relative w-[375px] bg-[#F7EFEF] h-[1px]'></div>

                <div className='flex mt-6'>
                    <p className=' text-txt-foreground'>수령인</p>
                    <p className='ml-[46px]'>소보로</p>
                </div>
                <div className='flex mt-3.5'>
                    <p className='text-txt-foreground'>휴대폰</p>
                    <p className='ml-[46px]'>0101717171771</p>
                </div>
                <div className='flex mt-3.5'>
                    <p className='text-txt-foreground'>주소지</p>
                    <p className='ml-[46px]'>서울특별시 중구 퇴계로 324,10층</p>
                </div>
            </article>
            <div className='mt-10 relative w-[375px] bg-[#F7EFEF] h-[16px]'></div>

            <article className='pb-[60px]'>
                <h2 className='my-[18px] font-bold text-lg'>결제정보</h2>
                <div className='relative w-[375px] bg-[#F7EFEF] h-[1px]'></div>
                <div className='flex flex-col gap-3.5 mt-10'>
                    <div className='flex justify-between'>
                        <p className='text-txt-foreground'>상품 총 금액</p>
                        <p className='font-bold'>62,000원</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-txt-foreground'>정 배송 할인 금액</p>
                        <p className='font-bold'>12,000원</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-txt-foreground'>배송비</p>
                        <p className='font-bold'>0원</p>
                    </div>
                    <hr className='border-[#CDC5C5]' />
                    <div className='flex justify-between'>
                        <p className='text-lg font-bold'>결제 금액</p>
                        <p className='text-lg font-bold'>50,0000원</p>
                    </div>
                </div>
            </article>
        </main>
    );
}
