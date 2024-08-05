import Image from 'next/image';
import avartatImg from '@/assets/sample_avatar.svg';

export default function MonthAvatar() {
    return (
        <div>
            <div className='relative h-[74px] w-[74px] bg-white rounded-full'>
                <Image
                    className='absolute top-[5px] left-2.5'
                    width={50}
                    src={avartatImg}
                    alt=''
                />
            </div>
            <p className='text-sm text-txt-foreground mt-2.5'>아기 개월 수</p>
        </div>
    );
}
