import { useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../helpers/axiosinstances";
import Homelayout from "../layopt/homelayout";

function Contact(){

    const [userInput,setuserInput]=useState({
        name:"",
        email:"",
        message:""
    })

    function handleInputChange(e){
        const {name,value} = e.target;
        console.log(name,value);
        setuserInput({
            ...userInput,
            [name]:value
        })
    }

  async function onFormSubmit(e){
      e.preventDefault();
      if(!userInput.email || !userInput.name || !userInput.message)
      {
          toast.error("all fields are mandatory");
          return
      }

       // checking email validation
       if(!userInput.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
       {
         toast.error("Invalid email ID");
         return;
       }

    //    try {
    //        const response = axiosInstance.post()
    //    } catch (error) {
           
    //    }
    }
  return(
      <>
         <Homelayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form 
                    noValidate
                    onSubmit={onFormSubmit}
                    className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]">

                    <h1 className="text-3xl font-semibold">
                        Contact Form
                    </h1>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name" className="text-xl font-semibold">
                            Name
                        </label>
                        <input 
                            className="bg-transparent border px-2 py-1 rounded-sm"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            onChange={handleInputChange}
                            value={userInput.name}
                        />

                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="email" className="text-xl font-semibold">
                            Email
                        </label>
                        <input 
                            className="bg-transparent border px-2 py-1 rounded-sm"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleInputChange}
                            value={userInput.email}
                        />

                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="message" className="text-xl font-semibold">
                            Message
                        </label>
                        <textarea 
                            className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
                            id="message"
                            name="message"
                            placeholder="Enter your email"
                            onChange={handleInputChange}
                            value={userInput.message}
                        />

                    </div>
                    <button type="submit"
                        className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
                    >
                        Submit
                    </button>

                </form>
            </div>
        </Homelayout>
      </>
  )
}
export default Contact;