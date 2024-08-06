import { Button } from '@/components/ui/button';

import { CiCreditCard1 } from 'react-icons/ci';
import { CiBank } from 'react-icons/ci';

export default function PaymentPage() {
    return (
        <section>
            <h1 className='mt-7 font-bold text-[28px]'>결제정보</h1>
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
            <div className='mt-10 left-0 absolute w-[375px] bg-[#F7EFEF] h-[16px]'></div>

            <h2 className='mt-[84px] font-bold text-[28px]'>결제수단 선택</h2>
            <div className='flex justify-between mt-10'>
                <Button
                    variant={'outline'}
                    size={'md'}
                    fontWeight={'sm'}
                    fontSize={'sm'}
                    radius={'md'}
                    className='justify-between p-[26px]'>
                    <CiCreditCard1 className='w-[52px] h-[52px]' />
                    카드
                </Button>
                <Button
                    variant={'outline'}
                    size={'md'}
                    fontWeight={'sm'}
                    fontSize={'sm'}
                    radius={'md'}
                    className='justify-between p-[26px]'>
                    <CiBank className='w-[52px] h-[52px]' />
                    계좌
                </Button>
            </div>
            <Button className='mt-[75px] font-notoSansKr' variant={'default'}>
                다음
            </Button>
        </section>
    );
}