'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function BabyGender() {
    const [selectedGender, setSelectedGender] = useState<string>('남자');

    const handleButtonClick = (gender: string) => {
        setSelectedGender(gender);
    };

    return (
        <>
            <h1 className='text-lg text-center font-medium mb-40'>
                아이의 성별을 알려주세요!
            </h1>
            <article className='mb-60'>
                <div className='flex items-center gap-8'>
                    <Button
                        className={`text-txt mx-auto hover:bg-primary-foreground ${selectedGender === '남자' ? 'bg-primary-foreground' : ''}`}
                        type='button'
                        variant={'outline'}
                        size={'md'}
                        fontWeight={'sm'}
                        onClick={() => handleButtonClick('남자')}>
                        남자
                    </Button>
                    <Button
                        className={`text-txt mx-auto hover:bg-primary-foreground ${selectedGender === '여자' ? 'bg-primary-foreground' : ''}`}
                        type='button'
                        variant={'outline'}
                        size={'md'}
                        fontWeight={'sm'}
                        onClick={() => handleButtonClick('여자')}>
                        여자
                    </Button>
                </div>
            </article>
        </>
    );
}
