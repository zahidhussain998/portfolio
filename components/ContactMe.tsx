import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  name: string;
    email: string;
    message: string;
    subject: string;
  };
  
type Props = {};

const ContactMe = (props: Props) => {
    const { register, handleSubmit,} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formdata) => {
        window.location.href = `mailto:zohaibhyd321@gmail.com?subject={formdata.subject}&body=Hi, my name is ${formdata.message} 
     ${formdata.name} ${formdata.email} (${formdata.subject});
    }`
};
  
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        ContactMe
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have get just what you need {""}
          <span className="decoration-[#F7AB0A]/50 underline">lets Talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+923403107703</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Pakistan Hyderabad Sindh</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">zohaibhyd321@gmail.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input  {...register('email')}  placeholder="Email" className="contactInput" type="email" />
          </div>
          <input  {...register('subject')}  placeholder="Subject" className="contactInput" type="text" />

          <textarea  {...register('message')}  placeholder="Message" className="contactInput" />

          <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-ls" >
            Submits
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
