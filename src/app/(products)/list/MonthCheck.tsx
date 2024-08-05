import Image from 'next/image';

export default function MonthCheck() {
    return (
        <div className='absolute -top-[45px] right-[5px] flex items-center gap-[7px]'>
            <p className=' px-[15px] py-[4px] text-base border-[1px] rounded-2xl'>
                꼬꼬미(9개월)
            </p>
            <Image
                src={'/monthCheckCharacter.svg'}
                width={60}
                height={51}
                alt=''
            />
        </div>
    );
}
