import React from 'react'
import { BiCheckCircle } from 'react-icons/bi';


 interface Props {
  text1: string;
   text2: string

 }

 export const AboutInfoBox = ({text1,text2}:Props)=>{
  return(
    <div className='block sm:flex items-center mb-[2rem] justify-between'>
   <div className='flex mb-4 sm:mb-0 items-center space-x-3'>
<BiCheckCircle className='w-[2rem] h-[2rem] text-yellow-300' />
<span className='text-[17px] text-white'>{text1}</span>
   </div>

   <div className='flex mb-4 sm:mb-0 items-center space-x-3'>
<BiCheckCircle className='w-[2rem] h-[2rem] text-yellow-300' />
<span className='text-[17px] text-white'>{text2}</span>
   </div>
    </div>
  )
}
export default AboutInfoBox









//  const AboutInfoBox = () => {
//   return (
//     <section className="flex items-center gap-8">
//       {/* Left Image */}
//       <div className="flex-shrink-0 w-[400px]">
//         <Image
//           src="/images/about1.webp"
//           alt="about"
//           width={400}
//           height={400}
//           className="w-full h-auto object-cover rounded-lg shadow-lg"
//         />
//       </div>

//       {/* Right Text */}
//       <div className="flex-1">
//         <p className="text-white text-opacity-60">
//           I am a passionate web developer with expertise in cloud computing and generative AI,
//           holding certification as a Cloud Applied Generative AI Engineer. I specialize in creating innovative web applications with a solid foundation in HTML, CSS,
//           TypeScript, and JavaScript. Skilled in frameworks like React, Tailwind CSS, and Next.js, I design intuitive and dynamic user interfaces that prioritize functionality and aesthetics.
//           With a strong focus on user experience, I leverage cloud computing to ensure my applications are scalable, secure, and efficient. My knowledge of generative AI enables me to add creative,
//           personalized elements to the applications I build, pushing the boundaries of user engagement. Driven by continuous learning and innovation, I strive to blend technical precision with creative
//           design to deliver meaningful, user-centered web solutions.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default AboutInfoBox;

