import Image from 'next/image';
import SubItemList from './SubItemList';

export default function Subscribe() {
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
                    <span className='text-sm'>시각과 청각이 발달해요.</span>
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
                        물체에 손을 뻗고 입으로 가져가요.
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
            <SubItemList />
        </section>
    );
}
