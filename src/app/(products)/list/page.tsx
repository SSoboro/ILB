import ProductList from './ProductList';

export default function ListPage() {
    return (
        <section>
            <h1 className='text-lg font-medium py-7 px-1'>
                우리아이를 위해 준비했어요
            </h1>
            <ProductList />
        </section>
    );
}
