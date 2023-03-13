import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionleft?: boolean;
  imagSrc:string;
  title: string;

};

function Skill ({ directionleft, title, imagSrc }: Props): JSX.Element {
  return (
    <div className="group relative flex cursor-pointer ">

      <motion.img
        initial={{
          x: directionleft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={imagSrc}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale
     transition duration-300 ease-in-out
     "
    
      />

      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24
  md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
>
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
