import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
    initial={{x: -200}}
    transition={{duration: 1}}
    whileInView={{opacity:1, x: 0}}

    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      
       <h2 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h2>
      
       <motion.img
       initial={{x: -200}}
       transition={{duration: 1}}
       viewport={{once:true}}
       whileInView={{opacity:1, x: 0}}

        src='https://avatars.githubusercontent.com/u/100913055?v=4'
        className='-mb-20 md:-mb-0 flex-shrink-0 rounded-full md:rounded-lg w-56 h-56 md:w-64 md:h-95 object-cover
        xl:w-[500px] xl:h-[500px]'
       />
       
       <div className='space-y-10 px-0 md:px-10'>

       <h4 className='text-4xl font-semibold'>

        here is {""}
         <span className='underline decoration-[#F7AB0A]/50'>little</span> {""}
         bit about me
       </h4>


         <p className='text-XS text-gray-500'>
            I am a self-taught Frontend Developer and Backend Developer. I am passionate about learning new technologies and building cool stuff. I am currently working on my skills and learning new technologies. I am also a competitive programmer and I love to solve problems. I am also a big fan of anime and I love to watch anime. I am also a big fan of football and I love to play football.
            </p>
       </div>
       
        </motion.div>
  )
}

export default About