'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

const dummyMonth = [
    '0 ~ 4개월',
    '5 ~ 7개월',
    '8 ~ 10개월',
    '11 ~ 12개월',
    '13 ~ 15개월',
    '16 ~ 18개월',
    '19 ~ 24개월',
];

export default function BabyMonth() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    const buttonClicked = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <>
            <h1 className='text-lg text-center font-medium'>
                아이의 현재 나이를 알려주세요!
            </h1>
            <p className='text-lg text-center font-medium mb-[105px]'>
                (몇 개월인가요?)
            </p>
            <article className='grid grid-cols-2 gap-y-[30px] justify-center items-center gap-x-[43px] px-10'>
                {dummyMonth.map((month, index) => (
                    <Button
                        className={`text-txt mx-auto leading-5 h-11 hover:bg-primary-foreground ${selectedIndex === index ? 'bg-primary-foreground' : ''}`}
                        key={index}
                        type='button'
                        variant={'outline'}
                        size={'sm'}
                        fontSize={'sm'}
                        fontWeight={'sm'}
                        onClick={() => buttonClicked(index)}>
                        {month}
                    </Button>
                ))}
            </article>
        </>
    );
}
