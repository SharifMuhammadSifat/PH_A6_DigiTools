
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import Dot from './assets/dot.png';
import Banner from './assets/banner.png';
import { CiPlay1 } from "react-icons/ci";


function App() {


  return (
    <>
      <div className="manrope">
        <Navbar></Navbar>
        <div className='px-50 py-16 flex items-center justify-center'>
          <div>
            <div className='flex items-center bg-[#e1e7ff] p-2.5 gap-1 rounded-full w-fit mb-4'><img className='h-4 w-4' src={Dot} alt="Dot" /> <p className='text-[16px] bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent font-medium'>New: Ai-Powered Tools Available</p></div>
            <h1 className='lg:text-[72px] text-[60px] font-extrabold text-[#101727]'>Supercharge Your Digital Workflow</h1>
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
      </div>
    </>
  )
}

export default App
