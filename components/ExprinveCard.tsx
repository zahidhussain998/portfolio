import React from "react";
import { motion } from "framer-motion";

type Props = {
  description: string;
  about: string;
  imagSrc: string;
  title: string;
  Image: string;
  per: String;
  amount: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  year: string;
};

const ExprinveCard = ({
  description,
  about,
  title,
  imagSrc,
  image4,
  Image,
  amount,
  per,
  image1,
  image2,
  image3,
  year
}: Props) => {
  return (
    <div>
      <article
        className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-
      [500px] md:2-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden "
      >
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-full h-32 w-32 object-cover object-center"
          src={Image}
          alt="image"
        />

        <div className="px-9 md:px:10">
          <h4 className="tet-4xl font-light">{amount}</h4>
          <p className="font-bold text-2xl mt-1"> {per}</p>
          <div className="flex space-x-2 my-2">

          <img
              className="h-10 w-10 rounded-full"
              src={image1}
              alt="image1"
            />
            <img
              className="h-10 w-10 rounded-full"
              src={image2}
              alt="image2"
            />
            <img
              className="h-10 w-10 rounded-full"
              src={image3}
              alt="image3"
            />
              <img
              className="h-10 w-10 rounded-full"
              src={image4}
              alt="image4"
            />
           
          </div>

          <p className="uppercase py-5 text-gray-300">
            {year}
          </p>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>{title}</li>
            <li>{description}</li>
            <li>{about}</li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default ExprinveCard;
