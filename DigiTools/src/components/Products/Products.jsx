import React from 'react';
import { use,useState } from 'react';
import Card from '../Card/Card.jsx';





const Products = ({ productPromise }) => {
    const [selectedBtn, setSelectedBtn] = useState("products");
    
    const toggler = () => {
    if (selectedBtn === "products") {
            setSelectedBtn("cart");
        } else {
            setSelectedBtn("products");
        }
    };


    const productData = use(productPromise);

    return (
        <div className='px-50 py-30 flex flex-col items-center justify-center'>
            <h1 className='text-[48px] font-extrabold text-[#101727] mb-4' >Premium Digital Tools</h1>
            <p className='text-[16px] font-normal text-[#627382] text-center'>Choose from our curated collection of premium digital products designed<br/>to boost your productivity and creativity.</p>
            <div className='flex flex-col items-center justify-center w-full'>
                <div className='flex items-center justify-center shadow-2xl gap-2.5 my-10 w-fit'>
                    <button onClick={toggler} className={`btn border-0 rounded-full ${selectedBtn === "products" ? "bg-linear-to-r from-blue-500 to-purple-600 text-white" : "bg-white text-[#101727]"}`}>Products</button>
                    <button onClick={toggler} className={`btn border-0 rounded-full ${selectedBtn === "cart" ? "bg-linear-to-r from-blue-500 to-purple-600 text-white" : "bg-white text-[#101727]"}`}>Cart</button>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {productData.map(product => <Card key = {product.key} product = {product}></Card>)}
                </div>

            </div>
        </div>
    );
};

export default Products;