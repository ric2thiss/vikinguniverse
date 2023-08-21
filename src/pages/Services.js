import React from 'react'
import Layout from '../components/Layout'
import GridCell from '../components/GridCell'

function Services() {
  return (
    <div class="pt-10 font-poppins h-full primary-color px-5 sm:px-8 md:px-12 lg:px-20 2xl:px-40">
        <div className=' py-10 flex flex-col gap-y-10'>
            <h2 className='primary text-xl mt-20 uppercase tracking-widest'>Services</h2>
            <h1 className='text text-3xl sm:text-4xl md:text-5xl font-bold text-white'>LOREM IPSUM <span className='primary'>LOREM</span> IPSUM.</h1>
            <div className='divider'></div>
            <p className='text-white text-xs md:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mi vitae lacus venenatis aliquet. Nunc semper felis in elit commodo cursus. Nulla facilisi. Cras pulvinar faucibus libero, ac facilisis lectus. Suspendisse quis nunc auctor, interdum mi sed, tempus mi. Sed suscipit leo nec odio feugiat, eget bibendum nisl dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mi vitae lacus venenatis aliquet. Nunc semper felis in elit commodo cursus. Nulla facilisi. Cras pulvinar faucibus libero, ac facilisis lectus. Suspendisse quis nunc auctor, interdum mi sed, tempus mi. Sed suscipit leo nec odio feugiat, eget bibendum nisl dapibus.</p>
        </div>
        {/* <Layout 
        label={'Services'}
        first={'LOREM IPSUM'}
        highlight={'LOREM '}
        second={'IPSUM'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mi vitae lacus venenatis aliquet. Nunc semper felis in elit commodo cursus. Nulla facilisi. Cras pulvinar faucibus libero, ac facilisis lectus. Suspendisse quis nunc auctor, interdum mi sed, tempus mi. Sed suscipit leo nec odio feugiat, eget bibendum nisl dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mi vitae lacus venenatis aliquet. Nunc semper felis in elit commodo cursus. Nulla facilisi. Cras pulvinar faucibus libero, ac facilisis lectus. Suspendisse quis nunc auctor, interdum mi sed, tempus mi. Sed suscipit leo nec odio feugiat, eget bibendum nisl dapibus.'}
        /> */}
        <div className='flex gap-4 items-center pb-20 2xl:pt-2'>
            <GridCell />
        </div>
    </div>
  )
}

export default Services