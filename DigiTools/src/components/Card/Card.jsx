import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Card = ({ product }) => {
    console.log(product);
    return (
        <div className='flex flex-col justify-between gap-2 p-5 border rounded-lg shadow-md relative'>
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
            <button className='bg-linear-to-r from-blue-500 to-purple-600 text-white border-0 rounded-full py-2 px-4 hover:from-blue-600 hover:to-purple-700'>Buy Now</button>
        </div>
    );
};

export default Card;