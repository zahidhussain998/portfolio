import React from "react";
import { motion } from "framer-motion";
import ExprinveCard from "./ExprinveCard";

type Props = {};

const WorkExprience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
     md:min-w-full px-10 justify-evenly mx-auto items-center
    "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        exprience
      </h3>
      <div
        className="w-full flex
      space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        <ExprinveCard
          imagSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          title="Completed numerous freelance projects as a software developer for clients on Fiverr, including web development, software customization, and bug fixing."
          about="Successfully delivered high-quality work while meeting tight deadlines and communicating effectively with clients."
          description="Improved problem-solving and critical thinking skills by troubleshooting issues and finding creative solutions for clients."
          Image={"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/123625557/original/fa0cd9bbf2a481d0ee68a2dd1ff1a01d844253e7/design-a-logo-for-you-for-five-bucks.jpg"}
          per={"PRESENT DATE : 2020"}
          amount={"ENDED DATE : 2021"}
          image1={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}
          image2={"https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"}
          image3={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}
          image4={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} year={"started work : 2020"}        />

        <ExprinveCard
          imagSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          title="I have gained experience working on various projects on GitHub, including web development Application developement,"
          about="Some of my notable contributions include developing a web application using React and Node.js, and creating a web application using React and Firebase."
          description="I have also contributed to open-source projects, including a React component library and a React boilerplate."
          Image={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}
          per={"PRESENT DATE : 2021"}
          amount={"ENDED DATE : 2022"}
          image1={"https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"}
          image2={"https://cdn.cdnlogo.com/logos/n/80/next-js.svg"}
          image3={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}
          image4={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"} year={"started work : 2022"}        />
      </div>
    </motion.div>
  );
};
export default WorkExprience;
