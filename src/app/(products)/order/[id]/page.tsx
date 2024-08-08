import React from 'react';
import CheckBabyInfo from './CheckBabyInfo';
import DeliveryInfo from './Delivery';
import Complete from './Complete';
import PaymentInfo from './Payment';
import { Button } from '@/components/ui/button';

interface PageComponent {
    id: string;
    component: React.ReactNode;
}

const pageComponent: PageComponent[] = [
    { id: '1', component: <CheckBabyInfo /> },
    { id: '2', component: <DeliveryInfo /> },
    { id: '3', component: <PaymentInfo /> },
];

export default function OrderPage({ params }: { params: { id: string } }) {
    const content = pageComponent.find(page => page.id === params.id);

    return (
        <section>
            {content?.component}
            <Button className='mt-60 font-notoSansKr' variant={'default'}>
                다음
            </Button>
        </section>
    );
}
