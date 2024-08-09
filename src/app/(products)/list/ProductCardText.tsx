type Props = {
    text: string;
};

export default function ProductCardText({ text }: Props) {
    return <p className='text-left'>{text}</p>;
}
