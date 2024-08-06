import { ChevronDown } from 'lucide-react';

import MonthAvatar from './MonthAvatar';
import ProductItem from '@/components/ProductItem';
import MonthCheck from './MonthCheck';
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/Accordion';

export default function ProductCard() {
    return (
        <AccordionItem
            className='relative bg-[#FFEBEE] rounded-xl border-0'
            // value값 card 마다 다르게 주어야한다.
            value='item-1'>
            <MonthCheck />
            <AccordionTrigger className='py-5 px-4 hover:no-underline flex-col items-start justify-center'>
                <div className='flex gap-6'>
                    <MonthAvatar />
                    <div className='py-2.5'>
                        <p>아이 특징 1입니다 야호</p>
                        <p>아이 특징 1입니다 야호</p>
                    </div>
                </div>
                <ChevronDown className='self-center h-4 w-4 transition-transform duration-200' />
            </AccordionTrigger>
            <AccordionContent className='px-2.5 py-2.5'>
                <div className='bg-white py-4 px-2.5 rounded-xl grid grid-cols-3 gap-2.5'>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}
