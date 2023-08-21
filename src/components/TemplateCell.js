import React from 'react'
import '../universal-css/customize-fonts.css'

function TemplateCell(props) {
  return (
    <div className='flex flex-col relative p-5 gap-6 w-full border-hover hover:text-white'>
        <img src={props.imgUrl} className='absolute right-4' />
        <p className='text-xl text-white font-bold '>{props.label}</p>
        <p className='lg:text-3xl text-white font-bold'>{props.title} <span className='primary'>{props.highlight}</span></p>
        <div className='divider'></div>
        <p className='text-sm text-white'>{props.description}</p>
    </div>
  )
}

export default TemplateCell