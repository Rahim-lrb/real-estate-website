import React, {useEffect} from 'react'
import Hero from '../images/hero-image.png'
import Value from '../images/value.png'
// icons
import Equinix from '../images/equinix.png'
import Realty from '../images/realty.png' 
import Tower from  '../images/tower.png'
import Prologis from '../images/prologis.png'
import Logo from '../images/logo2.png'
// slider
import Slider from '../components/Slider'
import Cards from '../components/Cards'
import Contact from '../images/contact.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Home() {
  useEffect(() => {
    Aos.init({duration: 1000})
}, [])
  return (
    <div className=''>
      {/* ! hero */}
      <section  className='pt-[4.5rem] bg-[#000000] flex space-y-16 flex-col text-center m-h-[700px]
      lg:gap-16 lg:text-left lg:flex-row lg:items-center lg:px-28 sm:px-12'>
        <div data-aos='fade-right' className='flex flex-col mx-auto space-y-3 lg:w-1/2'>
          <div className='relative'>
            <div className='absolute -top-3 right-[200px] w-16 h-16 bg-gradient-to-r from-[#8f552c] to-[#994300 ] rounded-full flex justify-center items-center'></div>
            <h2 className='text-white text-4xl sm:text-6xl font-semibold capitalize opacity-80 sm:leading-[1.1]'>Discover <br/> Most Suitable <br/> Property</h2>
          </div>
          <p className='text-gray-500 pt-6 w-[400px] text-sm pb-5 lg:mb-5'>Find a variety of properties that suit you very easily Forget all difficulties in finding a residence for you</p>

          <div className='relative sm:w-[430px] w-[300px] mx-auto lg:mx-0'>
            <svg className='absolute top-4 left-4 fill-current text-blue' stroke="" fill="" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true"  height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
            <input className='w-full py-4 px-16 border-2 border-gray-400 rounded-lg outline-none' type='text'/>
            <button className='absolute top-2 right-2 bg-gradient-to-r from-blue to-blueGradient hover:scale-105 duration-200 capitalize text-white px-5 py-2 rounded'>search</button>
          </div>

          <div className='sm:w-[430px] flex items-center py-3 justify-between w-[300px] mx-auto lg:mx-0'>
            <div ><span className='flex '><span className='text-white sm:text-3xl text-xl'>9,000</span> <span className='text-yellow-500 text-3xl'>+</span></span><span class="secondaryText">Premium Product</span></div>
            <div ><span className='flex '><span className='text-white sm:text-3xl text-xl'>2,000</span> <span className='text-yellow-500 text-3xl'>+</span></span><span class="secondaryText">happy customer</span></div>
            <div ><span className='flex '><span className='text-white sm:text-3xl text-xl'>28</span> <span className='text-yellow-500 text-3xl'>+</span></span><span class="secondaryText">awards winning</span></div>
          </div>
        </div>
        <div data-aos='fade-left' className='w-[24rem] h-[32rem] rounded-t-2xl mx-auto'>
          <img alt='hero' src={Hero} className='w-full rounded-t-full'/>
        </div>
      </section>

      {/* choices */}
      <section >
        {/* icons */}
        <div data-aos='fade-up' className='flex flex-col space-y-10 pb-10 pt-2 px-10  md:flex-row justify-between w-100 items-center'>
          <img className='w-[144px] h-[70px]' src={Prologis} alt='pr'/>
          <img className='w-[144px] h-[70px]' src={Equinix} alt='eq'/>
          <img className='w-[144px] h-[70px]' src={Realty} alt='re'/>
          <img className='w-[144px] h-[70px]' src={Tower} alt='te'/>
        </div>
        <div>
            <div className='container p-8'>
              <h2 className='text-oranges text-2xl font-semibold capitalize mb-2'>best choices</h2>
              <h3 className='text-primary text-3xl font-bold capitalize'>popular residencies</h3>
              {/* swiper */}
            </div>
        </div>
      </section>
      <section className='px-9 -mt-7'>
        <Slider></Slider>              
      </section>

      {/* value section */}
      <section data-aos="fade-right" data-aos-delay="500" className='px-8 flex flex-col-reverse text-center space-y-6
      lg:flex-row lg:justify-between lg:items-center'>
        <div className='mx-auto mt-6'>
          <img alt='value' src={Value} className='w-[476px] h-[555px] rounded-t-full border-gray-200 border-8'/>
        </div>
        <div className=' lg:w-1/2 '>
          <h2 className='text-oranges capitalize text-2xl font-semibold mb-3'>our value</h2>
          <h3 className='text-primary text-3xl font-bold capitalize'>Value We Give to You</h3>
          <p className='text-gri text-sm font-normal py-4'>We always ready to help by providing the best services for you. <br/>We believe a good place to live can make your life better</p>
          {/* list */}
          <Cards></Cards>
        </div>
      </section>

      {/*  contact us*/}
      <section data-aos="fade-left" data-aos-delay="500" id='contact' className='p-8 flex flex-col space-y-7 lg:flex-row lg:justify-between lg:items-center lg:space-x-8 lg:gap-8'> 
        <div className='lg:w-1/2 '>
          <h2 className='text-oranges capitalize text-2xl font-semibold mb-2'>our contact us</h2>
          <h3 className='text-primary text-3xl font-bold capitalize'>easy to contact us</h3>
          <p className='text-gri text-sm font-normal py-4'>We always ready to help by providing the best services for you. We believe a good place to live can make your life better</p>
          {/* icons */}
          <div className='mt-8  space-y-6 lg:grid lg:grid-cols-2 lg:space-x-4 lg:items-center '>
            {/* card */}
            <div className='lg:relative lg:top-3 lg:m-2 border-2 p-4 border-gray-100 rounded-lg space-y-4 hover:scale-105 hover:shadow-lg duration-300'>
              <div className='flex flex-start space-x-4'>
                <div className='bg-[#eeeeff] p-2 rounded-lg'><svg className='fill-current text-blue' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path></svg></div>
                <div>
                  <h2 className='capitalize font-semibold tex-xl'>call</h2>
                  <h3 className='text-gri'>021 123 145 14</h3>
                </div>
              </div>
              <button className='rounded-md w-full py-2 capitalize font-semibold text-blue bg-[#eeeeff] hover:bg-blue hover:text-white duration-300 hover:scale-95'>call now</button>
            </div>

            {/* card */}
            <div className='border-2 p-4 border-gray-100 rounded-lg space-y-4 hover:scale-105 hover:shadow-lg duration-300'>
              <div className='flex flex-start space-x-4'>
                <div className='bg-[#eeeeff] p-2 rounded-lg'><svg className='fill-current text-blue' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg></div>
                <div>
                  <h2 className='capitalize font-semibold tex-xl'>chat</h2>
                  <h3 className='text-gri'>021 123 145 14</h3>
                </div>
              </div>
              <button className='rounded-md w-full py-2 capitalize font-semibold text-blue bg-[#eeeeff] hover:bg-blue hover:text-white duration-300 hover:scale-95'>call now</button>
            </div>

            {/* card */}
            <div className='border-2 p-4 border-gray-100 rounded-lg space-y-4 hover:scale-105 hover:shadow-lg duration-300'>
              <div className='flex flex-start space-x-4'>
                <div className='bg-[#eeeeff] p-2 rounded-lg'><svg className='fill-current text-blue' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg></div>
                <div>
                  <h2 className='capitalize font-semibold tex-xl'>video call</h2>
                  <h3 className='text-gri'>021 123 145 14</h3>
                </div>
              </div>
              <button className='rounded-md w-full py-2 capitalize font-semibold text-blue bg-[#eeeeff] hover:bg-blue hover:text-white duration-300 hover:scale-95'>call now</button>
            </div>

            {/* card */}
            <div className='border-2 p-4 border-gray-100 rounded-lg space-y-4 hover:scale-105 hover:shadow-lg duration-300'>
              <div className='flex flex-start space-x-4'>
                <div className='bg-[#eeeeff] p-2 rounded-lg'><svg className='fill-current text-blue' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clip-rule="evenodd"></path></svg>
                </div>
                <div>
                  <h2 className='capitalize font-semibold tex-xl'>message</h2>
                  <h3 className='text-gri'>021 123 145 14</h3>
                </div>
              </div>
              <button className='rounded-md w-full py-2 capitalize font-semibold text-blue bg-[#eeeeff] hover:bg-blue hover:text-white duration-300 hover:scale-95'>call now</button>
            </div>
          </div>
        </div>

        <div className='mx-auto lg:w-1/2'>
          <img alt='value' src={Contact} className='w-[476px] h-[555px] rounded-t-full border-gray-200 border-8'/>
        </div>
      </section>

      {/* get started */}
      <div id='start'>
        <div className='p-8 bg-blue text-center m-8 border-4 border-[#5d77d6] rounded-xl'>
          <h1 className='text-white text-2xl sm:text-3xl font-bold capitalize'>get started with Homyz</h1>
          <p className='text-[#a6bef0] my-4 text-sm sm:text-md'>Subscribe and find super attractive price quotes from us.<br/>Find your residence soon</p>
          <button className='bg-[#5a73d7] hover:bg-[#4860c4] duration-200 text-white outline-none px-5 py-3 rounded-xl capitalize font-semibold border-2 border-white'>get started</button>
        </div>
      </div>

      {/* footer */}
      <footer className='py-8'>
        <div className='flex flex-col text-center space-y-5 w-100 px-8 md:flex-row md:justify-between md:items-center'>
          <div className='text-center'>
            <img alt='logo2' src={Logo} className='pb-4 w-[120px] mx-auto'/>
            <p className='text-sm text-[#8c9ab8] font-medium flex-1'>Our vision is to make the world<br/>the best place to live for them.</p>
          </div>
        
          <div className=''>
            <h2 className='text-3xl capitalize text-[#1f3e72] font-bold'>information</h2>
            <p className='text-sm text-[#8c9ab8] font-medium pb-5'>145 New York, FL 5467, USA</p>
            <ul className='flex space-x-3 justify-center'>
              <li className='capitalize cursor-pointer font-medium'>property</li>
              <li className='capitalize cursor-pointer font-medium'>services</li>
              <li className='capitalize cursor-pointer font-medium'>product</li>
              <li className='capitalize cursor-pointer font-medium'>about us</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
