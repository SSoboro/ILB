import Image from 'next/image';

export default function ProductCertification() {
    return (
        <article className='bg-[#FFF9F3] flex flex-col px-5 py-[62px]'>
            <div className='mb-[42px]'>
                <p className='text-3xl font-light mb-2'>아이들에게 이로운</p>
                <p className='text-3xl font-light'>제품만을 엄선합니다</p>
            </div>
            <div className='grid grid-cols-2 justify-items-center'>
                <div className='flex flex-col justify-center items-center text-center w-[156px] h-[156px]'>
                    <Image
                        className='text-center'
                        width={70}
                        height={50}
                        src={'/logo_icon.svg'}
                        alt=''
                    />
                    <p className='font-bold'>원산지권리</p>
                    <p className='text-sm'>중국,일본산 미사용</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center w-[156px] h-[156px]'>
                    <Image
                        className='text-center'
                        width={70}
                        height={50}
                        src={'/logo_icon.svg'}
                        alt=''
                    />
                    <p className='font-bold'>도라에몽 주머니</p>
                    <p className='text-sm'>갖고싶은대로 가져간다</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center w-[156px] h-[156px]'>
                    <Image
                        className='text-center'
                        width={70}
                        height={50}
                        src={'/logo_icon.svg'}
                        alt=''
                    />
                    <p className='font-bold'>Non-GMO</p>
                    <p className='text-sm'>안전한 원료만 사용</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center w-[156px] h-[156px]'>
                    <Image
                        className='text-center'
                        width={70}
                        height={50}
                        src={'/logo_icon.svg'}
                        alt=''
                    />
                    <p className='font-bold'>친환경 포장</p>
                    <p className='text-sm'>지구를 생각하는 패키징</p>
                </div>
            </div>
        </article>
    );
}
