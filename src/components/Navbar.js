import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Search from '../assets/search.svg'
import './Navbar.css'

function Navbar() {
  const [nav, setNav] = useState(true)
  function HandleMenu(){
    if(!nav){
      alert('close navbar')
    }else{
      alert('open')
    }
  }
  return (
    <div className='z-50 fixed w-full px-5 sm:px-8 md:px-12 lg:px-20 2xl:px-40 primary-color flex justify-between items-center text-xs font-normal'>
      {/* <div className='lg:w-80 bg-slate-600'> */}
        <div className='static lg:flex md:items-center gap-2 sm:gap-3 md:gap-6 lg:gap-2 2xl:gap-8'>
          <img src={Logo} alt="" style={{'width':'172px'}} className='cursor-pointer'/>
          <nav className='flex flex-col px-5 sm:px-8 md:px-12 absolute bg-white w-full left-0 lg:flex-row lg:bg-transparent lg:static lg:gap-5 2xl:gap-12'>
            {[
              ['Home', '/home'],
              ['Services', '/services'],
              ['About Us', '/about'],
              ['Faq', '/faq'],
              ['Contact', '/contact'],
              ['Blog', '/blog'],
            ].map(([title, url]) => (
              <a href={url} key={url} className="uppercase hover:border-b-2 lg:hover:border-b-0 pb-2 pt-2 sm:text-custom-text-color-black lg:text-white text hover:custom-hover">{title}</a>
            ))}
          </nav>
        </div>
        <div className='flex justify-between items-center gap-5'>
          <img src={Search} className='cursor-pointer' />
          <div className='customField customBtn flex text-center text-white justify-center items-center gap-3' style={{ width: '163px', height: '41px', borderRadius: '50px', background: 'rgba(89, 89, 89, 0.40)'}}>
            <a href='' className='hover customText'>Sign In</a>
            <span className='h-7 customBorder ' style={{ borderRight: '1px solid gray'}}></span>
            <a href='' className='hover customText'>Sign Up</a> 
          </div>
            <i className="fa-solid fa-bars text-white text-xl hover cursor-pointer lg:hidden" onClick={HandleMenu}></i>
        </div>
    </div>
  )
}

export default Navbar