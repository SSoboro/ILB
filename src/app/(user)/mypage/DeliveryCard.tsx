import React from 'react';
import Link from 'next/link';
import DeliveryStatusItems from './DeliveryStatusItems';

export default function DeliveryCard() {
    return (
        <>
            <div className='flex justify-between items-end mb-4 text-sm'>
                <span className='font-bold'>배송 현황</span>
                <Link
                    className='text-10 font-medium text-txt-foreground leading-3'
                    href={'/mypage/delivery'}>
                    자세히 보기
                </Link>
            </div>
            <DeliveryStatusItems bgColor='bg-card' />
        </>
    );
}
