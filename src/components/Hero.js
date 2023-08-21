import React from 'react'
import '../universal-css/customize-fonts.css'
import PlayBtn from '../assets/play-button.svg'
import Layout from './Layout'

function Hero() {
  return (
    <div class="pt-10 font-poppins h-full primary-color px-5 sm:px-8 md:px-12 lg:px-20 2xl:px-40">
        <div className=' py-10 flex flex-col gap-y-10'>
            <h2 className='primary text-xl mt-20 tracking-widest'>WELCOME TO VIKING UNIVERSE</h2>
            <h1 className='text text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wider'>YOUR GATEWAY TO <br /> <span className='primary'>ENDLESS</span> POSSIBLITIES.</h1>
            <div className='divider'></div>
            <p className='text-white text-xs md:text-sm'>Step into our universe and unlock a treasure trove of art designs, innovative IT solutions, and expert business management services. Whether you seek inspiration, technical expertise, or strategic guidance, our website is your ultimate destination. Prepare to embark on an extraordinary journey where your needs are met, ambitions are realized, and your universe expands. Join us and discover the infinite potential that awaits within the realms of Viking Universe.</p>
        </div>
        {/* <Layout 
        label={'WELCOME TO VIKING UNIVERSE'}
        first={'YOUR GATEWAY TO'}
        highlight={'ENDLESS'}
        second={'POSSIBLITIES'}
        description={'Step into our universe and unlock a treasure trove of art designs, innovative IT solutions, and expert business management services. Whether you seek inspiration, technical expertise, or strategic guidance, our website is your ultimate destination. Prepare to embark on an extraordinary journey where your needs are met, ambitions are realized, and your universe expands. Join us and discover the infinite potential that awaits within the realms of Viking Universe.'}
        /> */}
        <div className='flex gap-4 items-center pb-20 2xl:pt-10'>
            <img src={PlayBtn} alt="" />
            <p className='uppercase text-white text-xs md:text-sm'>About us</p>
        </div>
    </div>
  )
}

export default Hero