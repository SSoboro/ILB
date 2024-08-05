import React from 'react';
import Link from 'next/link';
import { CiCreditCard1 } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';
import { CiDeliveryTruck } from 'react-icons/ci';
import { CiGift } from 'react-icons/ci';
import { GoChevronRight } from 'react-icons/go';

interface DeliveryStatus {
    label: string;
    isActive: boolean;
    icon: React.ReactNode;
}

const deliveryStatuses: DeliveryStatus[] = [
    {
        label: '입금/결제',
        isActive: true,
        icon: <CiCreditCard1 className='w-8 h-9' />,
    },
    {
        label: '배송준비중',
        isActive: false,
        icon: <CiShoppingCart className='w-9 h-9' />,
    },
    {
        label: '배송중',
        isActive: false,
        icon: <CiDeliveryTruck className='w-9 h-9' />,
    },
    {
        label: '배송완료',
        isActive: false,
        icon: <CiGift className='w-9 h-8' />,
    },
];

export default function DeliveryCard() {
    return (
        <>
            <div className='flex justify-between items-end mb-4 text-sm'>
                <span className='font-bold'>배송 현황</span>
                <Link
                    className='text-10 font-medium text-txt-foreground leading-3'
                    href={''}>
                    자세히 보기
                </Link>
            </div>
            <div className='flex justify-between py-3 px-[29px] mb-8 w-full bg-card rounded-2xl'>
                {deliveryStatuses.map((status, i) => (
                    <>
                        <div
                            key={i}
                            className={`flex flex-col justify-between items-center gap-[3px] ${status.isActive ? '' : 'text-txt-foreground'}`}>
                            {status.icon}
                            <span className='text-[10px] leading-[14px] font-medium'>
                                {status.label}
                            </span>
                        </div>
                        {i < deliveryStatuses.length - 1 && (
                            <GoChevronRight className='mt-2.5 text-[#CED4DA]' />
                        )}
                    </>
                ))}
            </div>
        </>
    );
}