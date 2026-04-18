
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

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

      <div className='bg-white flex flex-col items-center justify-center py-30 px-50 gap-20'>
        
        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-[48px] font-extrabold text-[#101727]'>Simple, Transparent Pricing</h1>
          <p className='text-[16px] font-normal text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>


        <div className='flex gap-10'>

          <div className='bg-[#f9fafc] rounded-2xl shadow-2xl p-6 w-95 h-auto'>
            <div className='flex flex-col gap-6'>
              <div>
                <h2 className='text-[24px] font-bold text-[#101727]'>Starter</h2>
                <p className='text-[16px] font-normal text-[#627382]'>Perfect for getting started</p>
              </div>
              <div>
                <p className='text-[40px] font-bold text-black'>$0<span className='text-[20px] font-normal text-[#627382]'>/Month</span></p>
              </div>
              

              <div className='h-40'>
                <p className='text-[16px] font-medium text-[#627382]'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(30, 232, 50)" }}
                  /> Access to 10 free tools</p>
                <p className='text-[16px] font-medium text-[#627382]'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(30, 232, 50)" }}
                  /> Basic templates</p>
                <p className='text-[16px] font-medium text-[#627382]'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(30, 232, 50)" }}
                  /> Community support</p>
                <p className='text-[16px] font-medium text-[#627382]'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(30, 232, 50)" }}
                  /> 1 project per month</p>
              </div>


            </div>

            <button className='btn w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white border-0 rounded-full py-2 px-4 hover:from-blue-600 hover:to-purple-700'>Choose Plan</button>
          </div>

          <div className='bg-[#f9fafc] rounded-2xl shadow-2xl p-6 w-95 h-auto bg-linear-to-r from-[#4f39f6] to-[#9514fa]'>
            <div className='flex flex-col gap-6'>
              <div>
                <h2 className='text-[24px] font-bold text-white'>Pro</h2>
                <p className='text-[16px] font-normal text-white'>Perfect for getting started</p>
              </div>
              <div>
                <p className='text-[40px] font-bold text-white'>$29<span className='text-[20px] font-normal text-white'>/Month</span></p>
              </div>
              

              <div className='h-40'>
                <p className='text-[16px] font-medium text-white'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(255, 255, 255)" }}
                  /> Access to all premium tools</p>
                <p className='text-[16px] font-medium text-white'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(255, 255, 255)" }}
                  /> Unlimited templates</p>
                <p className='text-[16px] font-medium text-white'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(255, 255, 255)" }}
                  /> Priority support</p>
                <p className='text-[16px] font-medium text-white'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(255, 255, 255)" }}
                  /> Unlimited projects</p>

                <p className='text-[16px] font-medium text-white'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(255, 255, 255)" }}
                  /> Cloud sync</p>

                <p className='text-[16px] font-medium text-white'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(255, 255, 255)" }}
                  /> Advanced analytics</p>
              </div>


            </div>

            <button className='btn w-full bg-white text-black border-0 rounded-full py-2 px-4 '><span className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent'>Start Pro Trial</span></button>
          </div>



          <div className='bg-[#f9fafc] rounded-2xl shadow-2xl p-6 w-95 h-auto'>
            <div className='flex flex-col gap-6'>
              <div>
                <h2 className='text-[24px] font-bold text-[#101727]'>Enterprise</h2>
                <p className='text-[16px] font-normal text-[#627382]'>For teams and businesses</p>
              </div>
              <div>
                <p className='text-[40px] font-bold text-black'>$99<span className='text-[20px] font-normal text-[#627382]'>/Month</span></p>
              </div>
              

              <div className='h-40'>
                <p className='text-[16px] font-medium text-[#627382]'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(30, 232, 50)" }}
                  /> Everything in Pro</p>
                <p className='text-[16px] font-medium text-[#627382]'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(30, 232, 50)" }}
                  /> Team collaboration</p>
                <p className='text-[16px] font-medium text-[#627382]'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(30, 232, 50)" }}
                  /> Custom integrations</p>
                <p className='text-[16px] font-medium text-[#627382]'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(30, 232, 50)" }}
                  /> Dedicated support</p>
                <p className='text-[16px] font-medium text-[#627382]'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(30, 232, 50)" }}
                  /> SLA guarantee</p>
                <p className='text-[16px] font-medium text-[#627382]'><FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "rgb(30, 232, 50)" }}
                  /> Custom branding</p>
              </div>


            </div>

            <button className='btn w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white border-0 rounded-full py-2 px-4 hover:from-blue-600 hover:to-purple-700'>Contact Sales</button>
          </div>
        </div>
      </div>

      <div className='bg-[#101727] pt-30 pb-7.5 px-50 flex flex-col justify-between gap-20'>
        <div className='flex h-65 justify-between text-white border border-b-[#627382] border-t-0 border-l-0 border-r-0'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[24px] font-bold'>DigiTools</h1>
            <p className='text-[16px] font-normal'>Premium digital tools for creators,<br />professionals, and businesses. Work smarter<br />with our suite of powerful tools.</p>
          </div>

          <div className='flex flex-col gap-3.5'>
            <h1 className='text-[20px] font-medium'>Product</h1>
            <p className='text-[16px] font-normal'>Features</p>
            <p className='text-[16px] font-normal'>Pricing</p>
            <p className='text-[16px] font-normal'>Templates</p>
            <p className='text-[16px] font-normal'>Integrations</p>
          </div>

          <div className='flex flex-col gap-3.5'>
            <h1 className='text-[20px] font-medium'>Company</h1>
            <p className='text-[16px] font-normal'>About Us</p>
            <p className='text-[16px] font-normal'>Careers</p>
            <p className='text-[16px] font-normal'>Blog</p>
            <p className='text-[16px] font-normal'>Careers</p>
            <p className='text-[16px] font-normal'>Press</p>
          </div>

          <div className='flex flex-col gap-3.5'>
            <h1 className='text-[20px] font-medium'>Resource</h1>
            <p className='text-[16px] font-normal'>Documentation</p>
            <p className='text-[16px] font-normal'>Help Center</p>
            <p className='text-[16px] font-normal'>Community</p>
            <p className='text-[16px] font-normal'>Contact</p>
          </div>

          <div className='flex flex-col gap-3.5'>
            <h1 className='text-[20px] font-medium'>Social Links</h1>
            <div className='flex items-center gap-2 text-2xl'>
                <AiFillInstagram />
                <FaFacebookSquare />
                <BsTwitterX />

            </div>
          </div>

        </div>

        <div className='flex items-center justify-between text-[#627382]'>
        <div>
          <p className='text-[#627382] text-[16px]'>
          © 2024 DigiTools. All rights reserved.
          </p>
        </div>
        <div className='flex gap-5'>
          <p className='text-[#627382] text-[16px]'>Privacy Policy</p>
          <p className='text-[#627382] text-[16px]'>Terms of Service</p>
          <p className='text-[#627382] text-[16px]'>Cookies</p>
        </div>
        </div>
      </div>

    </>
  )
}

export default App
