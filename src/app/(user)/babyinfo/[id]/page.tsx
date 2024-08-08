import React from 'react';
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
    const content = pageComponent.find(page => page.id === params.id);

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
                className='font-notoSansKr fixed my-[60px] box-border bottom-0'
                variant={'default'}>
                다음
            </Button>
        </section>
    );
}
