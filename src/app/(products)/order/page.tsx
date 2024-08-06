'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

type ItemSelect = 'maintain' | 'chage';

export default function OrderPage() {
    const [selectChecked, setSelectChecked] = useState<ItemSelect>('maintain');

    const handleButtonCheck = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.currentTarget as HTMLButtonElement;
        setSelectChecked(target.id as ItemSelect);
    };
    return (
        <section>
            <h1 className='mt-7 font-bold text-[28px]'>
                우리 아이의 개월수에 맞는
                <br />
                물품을 보내드릴까요?
            </h1>
            <div className='mt-[150px] flex justify-between'>
                <Button
                    id='maintain'
                    onClick={handleButtonCheck}
                    variant={`${selectChecked === 'maintain' ? 'checked' : 'outline'}`}
                    size={'md'}
                    fontSize={'sm'}
                    fontWeight={'sm'}
                    radius={'md'}>
                    네, 보내주세요
                </Button>
                <Button
                    id='chage'
                    onClick={handleButtonCheck}
                    variant={`${selectChecked === 'chage' ? 'checked' : 'outline'}`}
                    size={'md'}
                    fontSize={'sm'}
                    fontWeight={'sm'}
                    radius={'md'}>
                    다른 개월수의 물품을
                    <br /> 받고 싶어요.
                </Button>
            </div>
            <Button className='mt-60 font-notoSansKr' variant={'default'}>
                다음
            </Button>
        </section>
    );
}
