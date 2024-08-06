import Image from 'next/image';
import DeliveryStatusItems from '../DeliveryStatusItems';
import StatusList from './StatusList';

export default function Delivery() {
    return (
        <section className='pb-20'>
            <Image
                src={'/logo_M.svg'}
                width={60}
                height={60}
                alt='logo'
                className='mb-2 mx-auto'
            />
            <h1 className='mb-10 font-bold text-center'>배송조회</h1>
            <DeliveryStatusItems bgColor='#ffffff' />
            <StatusList />
        </section>
    );
}
