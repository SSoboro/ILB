import { Accordion } from '@/components/ui/Accordion';

import ProductCard from './ProductCard';

interface Step {
    step: number;
    month: string;
    characteristic: string[];
}

export default function ProductList() {
    const stepArr: Step[] = [
        {
            step: 1,
            month: '0개월 ~ 4개월',
            characteristic: ['아이가 뛰어 놀아요', '아이가 울어요'],
        },
        {
            step: 2,
            month: '5개월 ~ 7개월',
            characteristic: ['아이가 뛰어 놀아요', '아이가 울어요'],
        },
        {
            step: 3,
            month: '8개월 ~ 10개월',
            characteristic: ['아이가 뛰어 놀아요', '아이가 울어요'],
        },
        {
            step: 4,
            month: '11개월 ~ 12개월',
            characteristic: ['아이가 뛰어 놀아요', '아이가 울어요'],
        },
        {
            step: 5,
            month: '13개월 ~ 15개월',
            characteristic: ['아이가 뛰어 놀아요', '아이가 울어요'],
        },
        {
            step: 6,
            month: '16개월 ~ 18개월',
            characteristic: ['아이가 뛰어 놀아요', '아이가 울어요'],
        },
        {
            step: 7,
            month: '19개월 ~ 24개월',
            characteristic: ['아이가 뛰어 놀아요', '아이가 울어요'],
        },
    ];

    return (
        <Accordion className='flex flex-col gap-5' type='single' collapsible>
            {stepArr.map((step, idx) => (
                <ProductCard stepInfo={step} key={idx} />
            ))}
        </Accordion>
    );
}
