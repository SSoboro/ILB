import Image from 'next/image';
import logo from '@/assets/logo_icon.svg';

export default function ProductCertification() {
    return (
        <section className='flex flex-col'>
            <div>
                <p className='text-3xl font-light'>아이들에게 이로운</p>
                <p className='text-3xl font-light'>제품만을 엄선합니다</p>
            </div>
            <div className='grid grid-cols-2 justify-items-center'>
                <div className='flex flex-col justify-center items-center text-center w-[156px] h-[156px]'>
                    <Image
                        className='text-center'
                        width={70}
                        height={50}
                        src={logo}
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
                        src={logo}
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
                        src={logo}
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
                        src={logo}
                        alt=''
                    />
                    <p className='font-bold'>친환경 포장</p>
                    <p className='text-sm'>지구를 생각하는 패키징</p>
                </div>
            </div>
        </section>
    );
}
