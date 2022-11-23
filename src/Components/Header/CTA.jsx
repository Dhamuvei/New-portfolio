import React from 'react'
import CV from '../../Assets/Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href="https://docs.google.com/document/d/1YvnitwOWe-CZBNPJeVGoaQL0nCHj2RZn/edit?usp=share_link&ouid=105536371089480872139&rtpof=true&sd=true" download className='btn' target="_blank">Check My CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA