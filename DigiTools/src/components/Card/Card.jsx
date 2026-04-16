import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const purchaseHandler = (product, cartProducts, setCartProducts) => {
    let isPresent = false;
    for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].name === product.name) {
            alert("Product already in cart!");
            isPresent = true;
            break;
        }
    };
    
    if (!isPresent) {
        const updatedCart = [...cartProducts, product];
        setCartProducts(updatedCart);
    }
    
};

const Card = ({ product, cartProducts, setCartProducts }) => {
    // console.log(product.tag);
    return (
        <div className='flex flex-col justify-between gap-2 p-5 border border-[#d8cbcb] rounded-lg shadow-md relative'>
            <img className='w-10 h-10' src={product.icon} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {
                product.features.map((feature, index) => <p key={index}><FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "rgb(30, 232, 50)" }}
                /> {feature}</p>)
            }

            <p className = {`absolute top-2 right-2 text-[12px] font-medium  px-2 py-1 rounded-full ${product.tag === "new" ? "text-[#0a883e] bg-[#dbfce7]" : product.tag ==="best seller" ? "text-[#bb4d00] bg-[#fef3c6]" : "text-purple-600 bg-[#e1e7ff]"} `}>{product.tag}</p>
            <button onClick={() => purchaseHandler(product, cartProducts, setCartProducts)} className='btn bg-linear-to-r from-blue-500 to-purple-600 text-white border-0 rounded-full py-2 px-4 hover:from-blue-600 hover:to-purple-700'>Buy Now</button>
        </div>
    );
};

export default Card;