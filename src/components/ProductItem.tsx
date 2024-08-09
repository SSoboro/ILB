import { Product } from '@/types';
import Image from 'next/image';

type Props = {
    item: Product;
};

export default function ProductItem({ item }: Props) {
    return (
        <div className='flex flex-col items-center'>
            <div>
                <div className='bg-[#D9D9D9] w-[92px] h-[92px] rounded-xl'>
                    {/* <Image
                        src={item.image}
                        width={92}
                        height={92}
                        className='rounded-xl'
                        alt=''
                    /> */}
                </div>
            </div>
            <p className='text-center mt-2 break-keep'>{item.name}</p>
        </div>
    );
}
