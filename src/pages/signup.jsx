import { useState } from "react";
import Homelayout from "../layopt/homelayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {toast} from "react-hot-toast";
import {createAccount}  from "../redux/slices/authslice.jsx";
function Signup()
{
   const dispatch=useDispatch();
   const navigate=useNavigate();

    const [previewimage,setpreviewimage]=useState("");

    const [signupData,setSignupData]=useState({
      fullname: "",
      email: "",
      password: "",
      avatar: ""
    })

    function handalUserInput(e){
      const {name,value} = e.target;
      setSignupData({
        ...signupData,
        [name]:value
      })
    }

    function getImage(event)
    {
      event.preventDefault();
      // getting the image
      const uploadedImage=event.target.files[0];

      // console.log(uploadedImage);
      if(uploadedImage)
      {
        setSignupData({
          ...signupData,
          avatar:uploadedImage
        });

        const fileReader=new FileReader();
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener("load",function(){
          setpreviewimage(this.result)
        })
      }
    }

   async function createNewAccount(event)
    {
      event.preventDefault();
      if(!signupData.fullname || !signupData.email || !signupData.password ||!signupData.avatar)
      {
        toast.error("please fill all the details");
        return;
      }
      
      // checking name field length
      if(signupData.fullname.length < 5)
      {
        toast.error("FullName must be 5 charecter");
        return;
      }

      // checking email validation
      if(!signupData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
      {
        toast.error("Invalid email ID");
        return;
      }

      // checking password validation
      if(!signupData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm))
      {
        toast.error("at least 8 characters , must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number,Can contain special characters")
        return;
      }

      const formData = new FormData();
      formData.append("fullname",signupData.fullname);
      formData.append("email",signupData.email);
      formData.append("password",signupData.password);
      formData.append("avatar",signupData.avatar);

      // dispatch create account action
  
      const response = await dispatch(createAccount(formData));
      console.log(response);
      if(response ?.payload ?.success)
           navigate("/");

      setSignupData({
        fullname:"",
        email:"",
        password:"",
        avatar:""
      });
      setpreviewimage("");
    }
     return(
         <Homelayout>
             <div className="flex items-center justify-center h-[100vh]">
               <form onSubmit={createNewAccount} noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]" >
                   <h1 className="text-center text-2xl font-bold">Registration Page</h1>
                  <label htmlFor="image_uplodes" className="cursor-pointer">
                      { previewimage ? (
                        <img className="w-24 h-24 rounded-full m-auto" src={previewimage} />
                      ) : (
                        <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                      )}
                  </label>

                  <input
                  onChange={getImage}
                  className="hidden" 
                  type="file" 
                  name="image_uplodes"
                  id="image_uplodes"
                  accept=".jpg ,.jpeg ,.png ,.svg"
                  />

                  <div className="flex flex-col gap-1">
                     <label htmlFor="fullname" className="font-semibold">Name</label>
                     <input 
                     type="text" 
                     required
                     name="fullname"
                     id="fullname"
                     placeholder="Enter Your Name..."
                     className="bg-transparent px-2 py-1 border"
                     onChange={handalUserInput}
                     value={signupData.fullname}
                     />
                  </div>



                  <div className="flex flex-col gap-1">
                     <label htmlFor="email" className="font-semibold">Email</label>
                     <input 
                     type="email" 
                     required
                     name="email"
                     id="email"
                     placeholder="Enter Your Email..."
                     className="bg-transparent px-2 py-1 border"
                     onChange={handalUserInput}
                     value={signupData.email}
                     />
                  </div>

                  <div className="flex flex-col gap-1">
                     <label htmlFor="password" className="font-semibold">Password</label>
                     <input 
                     type="password" 
                     required
                     name="password"
                     id="password"
                     placeholder="Enter Your Password..."
                     className="bg-transparent px-2 py-1 border"
                     onChange={handalUserInput}
                     value={signupData.password}
                     />
                  </div>

                  <button type="submit" className="mt-1 py-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 font-semibold text-lg cursor-pointer">
                    Create account
                  </button>
                  <p className="text-center">
                      Already have an account ? <Link to="/login" className="link text-accent cursor-pointer">Login</Link>
                  </p>
               </form>
             </div>
         </Homelayout>
     );
}
export default Signup;