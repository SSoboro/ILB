'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import BabyMonth from './BabyMonth';
import BabyBirth from './BabyBirth';
import BabyBody from './BabyBody';
import BabyGender from './BabyGender';
import BabyName from './BabyName';
import { Button } from '@/components/ui/button';

interface PageComponent {
    id: string;
    component: React.ReactNode;
}

const pageComponent: PageComponent[] = [
    { id: '1', component: <BabyName /> },
    { id: '2', component: <BabyMonth /> },
    { id: '3', component: <BabyGender /> },
    { id: '4', component: <BabyBirth /> },
    { id: '5', component: <BabyBody /> },
];

export default function Babyinfo({ params }: { params: { id: string } }) {
    const paramsNum = parseInt(params.id);
    const [pageNum, setPageNum] = useState(paramsNum + 1 || 1);
    const route = useRouter();

    const handleNextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let nextPage = pageNum + 1;

        if (params.id === '5') {
            route.push('/login');
        } else {
            setPageNum(nextPage);
            route.push(`/babyinfo/${pageNum}`);
        }
    };

    const content = pageComponent.find(page => parseInt(page.id) === paramsNum);

    return (
        <section>
            <Image
                src={'/logo_M.svg'}
                alt='ILB'
                width={60}
                height={60}
                className='mb-[18px] mx-auto'
            />
            {content?.component}
            <Button
                type='button'
                className='font-notoSansKr mb-[60px] box-border bottom-0'
                variant={'default'}
                onClick={handleNextPage}>
                다음
            </Button>
        </section>
    );
}
