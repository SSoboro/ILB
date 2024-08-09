import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/Accordion';

import { ChevronDown } from 'lucide-react';
import MonthAvatar from './MonthAvatar';
import ProductItem from '@/components/ProductItem';

import ProductCardText from './ProductCardText';
import { Product } from '@/types';
type Props = {
    stepInfo: {
        step: number;
        month: string;
        characteristic: string[];
    };
};

const getData = async () => {
    const res = await fetch('https://api.fesp.shop/products', {
        method: 'GET',
        headers: {
            // 'Content-Type': 'application/json',
            'client-id': '05-ILB',
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};

export default async function ProductCard({
    stepInfo: { step, month, characteristic },
}: Props) {
    const { item }: { item: Product[] } = await getData();
    const dataFilter: Product[] = item.filter(item => item.step === step);
    return (
        <AccordionItem
            className='relative bg-[#FFEBEE] rounded-xl border-0'
            // value값 card 마다 다르게 주어야한다.
            value={`item-${step}`}>
            {/* <MonthCheck /> */}
            <AccordionTrigger className='py-5 px-4 hover:no-underline flex-col items-start justify-center'>
                <div className='flex gap-6'>
                    <MonthAvatar month={month} />
                    <div className='py-2.5'>
                        {characteristic.map((text, idx) => (
                            <ProductCardText text={text} key={idx} />
                        ))}
                    </div>
                </div>
                <ChevronDown className='self-center h-4 w-4 transition-transform duration-200' />
            </AccordionTrigger>
            <AccordionContent className='px-2.5 py-2.5'>
                <div className='bg-white py-4 px-2.5 rounded-xl grid grid-cols-3 gap-2.5'>
                    {dataFilter.map(item => {
                        return <ProductItem item={item} key={item._id} />;
                    })}
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}
