import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../components/footer";
import { useDispatch ,useSelector} from "react-redux";
import { logout } from "../redux/slices/authslice";
function Homelayout({children})
{
    const dispatch=useDispatch();
    const navigate=useNavigate();

    // for checking if user is looged in
    const isloggedin = useSelector((state)=>state?.auth?.isloggedin);

    // displaying the options accto role
    const role=useSelector((state)=>state?.auth?.role);

    function changewidth()
    {
        const drowside=document.getElementsByClassName("drawer-side");
        drowside[0].style.width="auto";
    }
    function hidedrawer()
    {
        const element=document.getElementsByClassName("drawer-toggle");
        element[0].checked=false;

        const drowside=document.getElementsByClassName("drawer-side");
        drowside[0].style.width="0";
    }

   async function handlelogout(e)
    {
          e.preventDefault();
          const response = await dispatch(logout());
          console.log(response);
          if(response?.payload?.success)
          navigate("/")
    }
   return(
       <>

           <div className="min-h-[90vh]">
                <div className="drawer absolute left-0 z-50 w-fit">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="cursor-pointer relative">
                    <FiMenu
                        onClick={changewidth}
                        size={"32px"}
                        className={"font-bold m-4"}
                    />
                </label>
            </div> 

            <div className="drawer-side">
             <label htmlFor="my-drawer" className="drawer-overlay"></label>
             <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="w-fit absolute right-2 z-50">
                <button onClick={hidedrawer}>
                <AiFillCloseCircle size={24}/> 
                </button>
            </li>
            {/* <li><a>Sidebar Item 2</a></li> */}
          
            <li>
                <Link to="/">Home</Link>
            </li>
             

            {isloggedin && role ==="ADMIN" && (
                <li>
                    <Link to="/admin/dashboard">Admin Dashboard</Link>
                </li>
            )}

            {isloggedin && role ==="ADMIN" && (
                <li>
                    <Link to="/course/create">Create new Course</Link>
                </li>
            )}
            <li>
                <Link to="/courses">Courses</Link>
            </li>

            <li>
                <Link to="/contact">Contact Us</Link>
            </li>

            <li>
                <Link to="/about">About Us</Link>
            </li>

             {!isloggedin && (
                <li className="absolute bottom-4 w-[90%]">
                 <div className="w-full flex items-center justify-center">
                       <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                           <Link to="/login">Login</Link>
                       </button>
                       <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                           <Link to="/signup">Signup</Link>
                       </button>
                 </div>
                 </li>
             )}

           
             {isloggedin && (
                <li className="absolute bottom-4 w-[90%]">
                        <div className="w-full flex items-center justify-center">
                       <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                           <Link to="/user/profile">Profile</Link>
                       </button>

                       <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                           <Link onClick={handlelogout}>Logout</Link>
                       </button>
                 </div>
                 </li>
             )}
             </ul>
           </div>
                </div>

                {children}

                <Footer/>
           </div>
       </>
   )
}
export default Homelayout;