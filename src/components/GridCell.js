import React from 'react'
import TemplateCell from './TemplateCell'
import Art from '../assets/design-art.svg'

function GridCell() {
  return (
    <div className='grid grid-flow-row lg:grid-cols-3 gap-7 lg:gap-5 p-4 w-full'>
        <TemplateCell 
        imgUrl={Art}
        label={'Design & Art'}
        title={'SPARK YOUR CREATIVITY, INSPIRE WITH'}
        highlight={'Design'}
        description={'Experience the magic of design and art as we ignite your imagination and inspire with our exceptional services. From captivating visuals to breathtaking aesthetics, we bring simplicity and beauty together, creating a powerful visual identity that leaves a lasting impression on your audience.'}
        />
        <TemplateCell 
        imgUrl={'design-art'}
        label={'Design & Art'}
        title={'SPARK YOUR CREATIVITY, INSPIRE WITH'}
        highlight={'Design'}
        description={'Experience the magic of design and art as we ignite your imagination and inspire with our exceptional services. From captivating visuals to breathtaking aesthetics, we bring simplicity and beauty together, creating a powerful visual identity that leaves a lasting impression on your audience.'}
        />
        <TemplateCell 
        imgUrl={'design-art'}
        label={'Design & Art'}
        title={'SPARK YOUR CREATIVITY, INSPIRE WITH'}
        highlight={'Design'}
        description={'Experience the magic of design and art as we ignite your imagination and inspire with our exceptional services. From captivating visuals to breathtaking aesthetics, we bring simplicity and beauty together, creating a powerful visual identity that leaves a lasting impression on your audience.'}
        />
        <TemplateCell 
        imgUrl={'design-art'}
        label={'Design & Art'}
        title={'SPARK YOUR CREATIVITY, INSPIRE WITH'}
        highlight={'Design'}
        description={'Experience the magic of design and art as we ignite your imagination and inspire with our exceptional services. From captivating visuals to breathtaking aesthetics, we bring simplicity and beauty together, creating a powerful visual identity that leaves a lasting impression on your audience.'}
        />
        <TemplateCell 
        imgUrl={'design-art'}
        label={'Design & Art'}
        title={'SPARK YOUR CREATIVITY, INSPIRE WITH'}
        highlight={'Design'}
        description={'Experience the magic of design and art as we ignite your imagination and inspire with our exceptional services. From captivating visuals to breathtaking aesthetics, we bring simplicity and beauty together, creating a powerful visual identity that leaves a lasting impression on your audience.'}
        />
        <TemplateCell 
        imgUrl={'design-art'}
        label={'Design & Art'}
        title={'SPARK YOUR CREATIVITY, INSPIRE WITH'}
        highlight={'Design'}
        description={'Experience the magic of design and art as we ignite your imagination and inspire with our exceptional services. From captivating visuals to breathtaking aesthetics, we bring simplicity and beauty together, creating a powerful visual identity that leaves a lasting impression on your audience.'}
        />
    </div>
  )
}

export default GridCell