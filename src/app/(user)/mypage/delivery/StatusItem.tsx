import { StatusInfo } from './StatusList';

export default function StatusItem({ data }: { data: StatusInfo }) {
    return (
        <div
            className={`flex gap-[50px] py-[13px] pl-[5px] ${data.isActive ? '' : 'text-[#968F8F]'} text-sm border-b-[1px] border-border`}>
            <div className='text-center'>
                <p className='mb-1'>{data.date}</p>
                <p>{data.time}</p>
            </div>
            <div className=''>
                <p className='mb-1 font-bold'>{data.status}</p>
                <p>{data.location}</p>
            </div>
        </div>
    );
}
