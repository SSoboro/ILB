import ProductItem from '@/components/ProductItem';

export default function SubItemList() {
    return (
        <div className='grid grid-cols-[100px_100px_100px] justify-around gap-y-7 py-7 mb-[60px] border-[1px] border-primary-foreground rounded-[30px]'>
            {Array.from({ length: 10 }).map((_, i) => (
                <ProductItem key={i} />
            ))}
        </div>
    );
}
