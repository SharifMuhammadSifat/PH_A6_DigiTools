
import './App.css'
import { Suspense, useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Products from './components/Products/Products.jsx';
import Dot from './assets/dot.png';
import Banner from './assets/banner.png';
import { CiPlay1 } from "react-icons/ci";
import { User } from "lucide-react";
import { Package } from "lucide-react";
import { Rocket } from "lucide-react";

const fetchProducts = async () => {
  let products = await fetch("/products.json");
  return products.json();
};

function App() {

  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const productPromise = fetchProducts();


  return (
    <>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="userGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f39f6" />
            <stop offset="100%" stopColor="#9514fa" />
          </linearGradient>
        </defs>
      </svg>
      <div className="manrope">
        <Navbar cartTotal={cartTotal}></Navbar>
        <div className='px-50 py-16 flex items-center justify-center'>
          <div>
            <div className='flex items-center bg-[#e1e7ff] p-2.5 gap-1 rounded-full w-fit mb-4'><img className='h-4 w-4' src={Dot} alt="Dot" /> <p className='text-[16px] bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent font-medium'>New: Ai-Powered Tools Available</p></div>
            <h1 className='lg:text-[72px] text-[60px] font-extrabold text-[#101727]'>Supercharge Your <span className='bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>Digital Workflow</span></h1>
            <p className='text-[18px] font-normal text-[#627382] mb-4'>Access premium AI tools, design assets, templates, and productivity<br />
              software—all in one place. Start creating faster today.<br />
              Explore Products
            </p>
            <div className='flex gap-2.5'>
              <button className='btn text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] outline-0 rounded-full'>Explore Products</button>
              <button className="btn btn-outline btn-primary rounded-full"><CiPlay1 />
                Watch Demo</button>
            </div>
          </div>
          <img src={Banner} alt="Banner" className='shadow-2xl lg:w-200' />
        </div>

        <div className='px-50 py-15 flex items-center justify-between bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white'>
          <div className='flex flex-col items-center px-25'>
            <h1 className='text-[60px] font-extrabold'>50K+</h1>
            <p className='text-[24px] font-medium'>Active Users</p>
          </div>
          <div className='flex flex-col items-center border-x-2 border-[#f6f6f6] w-1/2 px-25'>
            <h1 className='text-[60px] font-extrabold'>200+</h1>
            <p className='text-[24px] font-medium'>Premium Tools</p>
          </div>
          <div className='flex flex-col items-center px-25'>
            <h1 className='text-[60px] font-extrabold'>4.9</h1>
            <p className='text-[24px] font-medium'>Rating</p>
          </div>
        </div>
          <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <Products productPromise = {productPromise} cartProducts = {cartProducts} setCartProducts = {setCartProducts} cartTotal={cartTotal} setCartTotal={setCartTotal}></Products>
          </Suspense>
      </div>

      <div className='bg-[#f9fafc] flex flex-col items-center justify-center py-30 px-50 gap-20'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-[48px] font-extrabold text-[#101727]'>Get Started in 3 Steps</h1>
          <p className='text-[16px] font-normal text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className='flex items-center justify-center gap-10'>

          <div className='flex flex-col items-center justify-center gap-5 bg-white rounded-4xl shadow-2xl px-15 py-10 w-95 h-95 text-center relative'>
            <div className='bg-purple-200 w-25 h-25 flex items-center justify-center rounded-full'>
              <User stroke="url(#userGrad)" size={60} />
            </div>
            <h2 className='text-[24px] font-bold text-[#101727]'>Create an Account</h2>
            <p className='text-[16px] font-normal text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
            <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] w-10 h-10 rounded-full flex items-center justify-center absolute right-5 top-3 text-white font-bold text-md'>
              <p>01</p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center gap-5 bg-white rounded-4xl shadow-2xl px-15 py-10 w-95 h-95 text-center relative'>
            <div className='bg-purple-200 w-25 h-25 flex items-center justify-center rounded-full'>
              <Package stroke="url(#userGrad)" size={60} />
            </div>
            <h2 className='text-[24px] font-bold text-[#101727]'>Choose Products</h2>
            <p className='text-[16px] font-normal text-[#627382]'>Browse our catalog and select the tools
that fit your needs.</p>
            <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] w-10 h-10 rounded-full flex items-center justify-center absolute right-5 top-3 text-white font-bold text-md'>
              <p>02</p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center gap-5 bg-white rounded-4xl shadow-2xl px-15 py-10 w-95 h-95 text-center relative'>
            <div className='bg-purple-200 w-25 h-25 flex items-center justify-center rounded-full'>
              <Rocket stroke="url(#userGrad)" size={60} />
            </div>
            <h2 className='text-[24px] font-bold text-[#101727]'>Start Creating</h2>
            <p className='text-[16px] font-normal text-[#627382]'>Download and start using your premium 
tools immediately.</p>
            <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] w-10 h-10 rounded-full flex items-center justify-center absolute right-5 top-3 text-white font-bold text-md'>
              <p>03</p>
            </div>
          </div>

          
        </div>

        
        
      </div>
    </>
  )
}

export default App
