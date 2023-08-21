import React from 'react'

function Layout(props) {
  return (
        <div className=' py-10 flex flex-col gap-y-10'>
            <h2 className='primary text-xl mt-20 uppercase'>{props.label}</h2>
            <h1 className='text text-3xl sm:text-4xl md:text-5xl font-bold text-white'>{props.first} <br /><span className='primary'>{props.highlight}</span> {props.second}.</h1>
            <div className='divider'></div>
            <p className='text-white text-xs md:text-sm'>{props.description}</p>
        </div>
  )
}

export default Layout