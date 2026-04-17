import React from 'react';
import Logo from '../../assets/digitools.png';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ cartTotal }) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm lg:px-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            <li>Products</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <img src={Logo} alt="DigiTools Logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-5 text-[16px] font-semibold text-[#101727]">
                        <li>Products</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-2 relative">
                    <FiShoppingCart />
                    <p className={`absolute top-0 right-37 bg-red-500 text-white text-xs rounded-full h-3.5 w-3.5 flex items-center justify-center ${cartTotal > 0 ? "block" : "hidden"}`}>
                        {cartTotal}
                    </p>
                    <p>Login</p>
                    <p className="text-white bg-linear-to-r from-blue-500 to-purple-500 rounded-full px-2.5 py-1">Get Started</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;