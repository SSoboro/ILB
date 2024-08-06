import Image from 'next/image';

export default function MonthAvatar() {
    return (
        <div>
            <div className='relative h-[74px] w-[74px] bg-white rounded-full'>
                <Image
                    className='absolute top-[5px] left-2.5'
                    width={50}
                    height={50}
                    src={'/sample_avatar.svg'}
                    alt=''
                />
            </div>
            <p className='text-sm text-txt-foreground mt-2.5'>아기 개월 수</p>
        </div>
    );
}
