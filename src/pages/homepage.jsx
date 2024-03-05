import { Link } from "react-router-dom";
import Homelayout from "../layopt/homelayout";
import HomepageImage from "../Images/homePageMainImage.png"
function Homepage()
{
   return(
           <Homelayout>
               <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                  <div className="w-1/2 space-y-6">
                       <h1 className="text-5xl font-semibold">
                           Find out best <span></span>
                           <span className="text-yellow-500 font-bold">
                                     Online Cources
                           </span>
                       </h1>
                       <p className="">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quisquam.
                       </p>
                       <div className="space-x-6">
                          <Link to="/courses">
                             <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 translate-all ease-in-out duration-300">
                                 Explore Course
                             </button>
                          </Link>

                          <Link to="/contact">
                             <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold cursor-pointer hover:bg-yellow-600 translate-all ease-in-out duration-300">
                                 Contact Us
                             </button>
                          </Link>
                       </div>
                  </div>
                  <div className="w-1/2 flex items-center justify-center">
                      <img src={HomepageImage} alt="homepage image" />
                  </div>
               </div>
           </Homelayout>
   )
}
export default Homepage;