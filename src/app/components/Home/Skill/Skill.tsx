import React from 'react'
import Heading from '../Helper/Heading'
import SkillCard from './SkillCard'

export const Skill = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>

        <Heading  headingPrimary='Explor My skills' headingSub='My Skills'/>

        <div className='grid w-[80%] mt-[5rem] mx-auto  grid-cols-2 lg:grid-cols-3
        xl:grid-cols-3 gap-[1rem] items-center'>
      {/*Skills Card*/}

      <div 
       data-aos="flip-left" 
       data-aos-anchor-placement="top-center" 
       
      
      >
     <SkillCard image="/images/html.svg" percent="90" title="HTML" />
     </div>

     <div 
     data-aos="flip-left" 
     data-aos-anchor-placement="top-center" 
     data-aos-delay="200"
     
     >
     <SkillCard image="/images/css.svg" percent="85" title="CSS" />
     </div>

     <div 
     data-aos="flip-left" 
     data-aos-anchor-placement="top-center" 
     data-aos-delay="400"
     
     
     >
     <SkillCard image="/images/js.svg" percent="80" title="javaScript" />
     </div>


     <div  
     
     data-aos="flip-left" 
     data-aos-anchor-placement="top-center" 
     data-aos-delay="600"
     
     
     >
     <SkillCard image="/images/ts.svg" percent="90" title="typeScript"  />
     </div>


     <div 
     data-aos="flip-left" 
     data-aos-anchor-placement="top-center" 
     data-aos-delay="800"
     
     
     >
     <SkillCard image="/images/react.svg" percent="60" title="React" />
     </div>

     <div 
     data-aos="flip-left" 
     data-aos-anchor-placement="top-center" 
     data-aos-delay="1000"
     
     
     
     >
     <SkillCard image="/images/next.webp" percent="75" title="next.js" />
     </div>

     
     


     </div>
      </div>
    
  )
}

export default Skill
