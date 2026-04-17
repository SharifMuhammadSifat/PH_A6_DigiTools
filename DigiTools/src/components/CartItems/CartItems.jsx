import React from 'react';
import { toast } from 'react-toastify';


const CartItems = ({ product, cartProducts, setCartProducts, cartTotal, setCartTotal }) => {
    const removeHandler = (product, cartProducts, setCartProducts, cartTotal, setCartTotal) => {
        const updatedCart = cartProducts.filter(item => item.name !== product.name);
        setCartProducts(updatedCart);
        setCartTotal(cartTotal - 1);
        toast("Item removed from cart!");
    }
    return (
        <>
            <div className='flex justify-between items-center bg-[#e1e7ff] p-5 rounded-lg shadow-md'>
                <div className='flex items-center gap-2.5'>
                    <img src={product.icon} alt={product.name} />
                    <div>
                        <p className = "text-[20px] font-semibold text-[#101727]">{product.name}</p>
                        <p className = "text-[16px] font-medium text-[#627382]">${product.price}</p>
                    </div>
                </div>
                <button onClick={() => removeHandler(product, cartProducts, setCartProducts, cartTotal, setCartTotal)} className='btn'>Remove</button>
            </div>
        </>
        
    );
};

export default CartItems;