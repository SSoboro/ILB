import Image from 'next/image';
import ItemList from './ItemList';

export default function OrderList() {
    return (
        <section>
            <Image
                src={'/baby_profile_img.svg'}
                alt='baby_img'
                width={60}
                height={60}
                className='mx-auto mb-2'
            />
            <h1 className='mb-7 font-bold text-center'>구독 상품 조회</h1>
            <p className='font-normal mb-7'>
                이번 달에는 이 상품들을 받으실 수 있어요!
            </p>
            <div className='pl-3 py-4 mb-7 bg-[#FFEBEC] rounded-3xl'>
                <div className='mb-2'>
                    <Image
                        src={'/icon/icon_baby_feet.svg'}
                        width={16}
                        height={16}
                        alt='feetIcon'
                        className='inline mr-2'
                    />
                    <span className='text-sm'>
                        머리를 가누고, 반사 행동이 나타나는 시기에요.
                    </span>
                </div>
                <div className='mb-2'>
                    <Image
                        src={'/icon/icon_baby_feet.svg'}
                        width={16}
                        height={16}
                        alt='feetIcon'
                        className='inline mr-2'
                    />
                    <span className='text-sm'>
                        엄마, 아빠의 목소리를 인식해요.
                    </span>
                </div>
                <div className='mb-2'>
                    <Image
                        src={'/icon/icon_baby_feet.svg'}
                        width={16}
                        height={16}
                        alt='feetIcon'
                        className='inline mr-2'
                    />
                    <span className='text-sm'>
                        엄마, 아빠의 목소리를 인식해요.
                    </span>
                </div>
                <div className='mb-2'>
                    <Image
                        src={'/icon/icon_baby_feet.svg'}
                        width={16}
                        height={16}
                        alt='feetIcon'
                        className='inline mr-2'
                    />
                    <span className='text-sm'>
                        엄마, 아빠의 목소리를 인식해요.
                    </span>
                </div>
            </div>
            <ItemList />
        </section>
    );
}
