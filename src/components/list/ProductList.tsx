import { Accordion } from '@/components/ui/Accordion';

import ProductCard from './ProductCard';

export default function ProductList() {
    return (
        <ul>
            <Accordion
                className='flex flex-col gap-5'
                type='single'
                collapsible>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Accordion>
        </ul>
    );
}
