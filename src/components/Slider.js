import React from 'react'
// swiper 
import Ra from '../images/r1.png'
import Ro from '../images/r2.png'
import Ri from '../images/r3.png'
import { useState } from 'react'

export default function Slider() {
  const [width, setWidth ] = useState(0)
    function handleNext() { 
      if (width == -600) {
        setWidth(width)
      } else {
        setWidth(width - 300)
      }
      console.log(width)
    }
    function handlePrev() {
      if (width == 0) {
        setWidth(width)
      } else {
        setWidth(width + 300)
      }
    }


    return (
      <div className='overflow-hidden relative'>
        <div className='flex justify-end space-x-5 absolute top-0 right-0 z-50'>
          <button onClick={handlePrev} className="text-blue px-3 py-2 border text-2xl font-semibold rounded-lg hover:shadow-md hover:scale-105 duration-200">&lt;</button>
          <button onClick={handleNext} className="text-blue px-3 py-2 border text-2xl font-semibold rounded-lg hover:shadow-md hover:scale-105 duration-200">&gt;</button>
        </div>
        {/* container */}
        <div className={`flex py-6 w-[1800px] justify-between pt-10 translate-x-[${width}px] duration-200`} style={{ transform: `translateX(${width}px)` }}>

          {/* card */}
          <div className='hover:bg-gradient-to-t hover:from-[#e6ebff] hover:to-white w-[272px] p-4 flex flex-col space-y-2 hover:scale-105 duration-500 rounded-lg hover:shadow-xl cursor-pointer hover:shadow-[#e6ebff]'>
            <img src={Ra} alt='r1'/>
            <span><span className='text-oranges'>$</span><span className='text-gray-400 font-semibold'>47,043</span></span>
            <h3 className='text-primary text-2xl font-bold capitalize tracking-wide'>aliva priva jardin</h3>
            <p className='text-xs text-slate-400'>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</p>
          </div>

          {/* card */}
          <div className='hover:bg-gradient-to-t hover:from-[#e6ebff] hover:to-white w-[272px] p-4 flex flex-col space-y-2 hover:scale-105 duration-500 rounded-lg hover:shadow-xl cursor-pointer hover:shadow-[#e6ebff]'>
            <img src={Ro} alt='r1'/>
            <span><span className='text-oranges'>$</span><span className='text-gray-400 font-semibold'>47,043</span></span>
            <h3 className='text-primary text-2xl font-bold capitalize tracking-wide'>assati garden city</h3>
            <p className='text-xs text-slate-400'>Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat</p>
          </div>

          {/* card */}
          <div className='hover:bg-gradient-to-t hover:from-[#e6ebff] hover:to-white w-[272px] p-4 flex flex-col space-y-2 hover:scale-105 duration-500 rounded-lg hover:shadow-xl cursor-pointer hover:shadow-[#e6ebff]'>
            <img src={Ri} alt='r1'/>
            <span><span className='text-oranges'>$</span><span className='text-gray-400 font-semibold'>47,043</span></span>
            <h3 className='text-primary text-2xl font-bold capitalize tracking-wide'>Citralan Puri Serang</h3>
            <p className='text-xs text-slate-400'>Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten</p>
          </div>

          {/* card */}
          <div className='hover:bg-gradient-to-t hover:from-[#e6ebff] hover:to-white w-[272px] p-4 flex flex-col space-y-2 hover:scale-105 duration-500 rounded-lg hover:shadow-xl cursor-pointer hover:shadow-[#e6ebff]'>
            <img src={Ra} alt='r1'/>
            <span><span className='text-oranges'>$</span><span className='text-gray-400 font-semibold'>47,043</span></span>
            <h3 className='text-primary text-2xl font-bold capitalize tracking-wide'>aliva priva jardin</h3>
            <p className='text-xs text-slate-400'>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</p>
          </div>

          {/* card */}
          <div className='hover:bg-gradient-to-t hover:from-[#e6ebff] hover:to-white w-[272px] p-4 flex flex-col space-y-2 hover:scale-105 duration-500 rounded-lg hover:shadow-xl cursor-pointer hover:shadow-[#e6ebff]'>
            <img src={Ro} alt='r1'/>
            <span><span className='text-oranges'>$</span><span className='text-gray-400 font-semibold'>47,043</span></span>
            <h3 className='text-primary text-2xl font-bold capitalize tracking-wide'>assati garden city</h3>
            <p className='text-xs text-slate-400'>Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat</p>
          </div>

          {/* card */}
          <div className='hover:bg-gradient-to-t hover:from-[#e6ebff] hover:to-white w-[272px] p-4 flex flex-col space-y-2 hover:scale-105 duration-500 rounded-lg hover:shadow-xl cursor-pointer hover:shadow-[#e6ebff]'>
            <img src={Ri} alt='r1'/>
            <span><span className='text-oranges'>$</span><span className='text-gray-400 font-semibold'>47,043</span></span>
            <h3 className='text-primary text-2xl font-bold capitalize tracking-wide'>Citralan Puri Serang</h3>
            <p className='text-xs text-slate-400'>Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten</p>
          </div>
        </div>
      </div>
  )
}
