import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RequireAuth({allowedRoles}){
   const {isloggedin,role} = useSelector((state)=>state.auth);

   return isloggedin && allowedRoles.find((myRole)=> myRole == role)?(
       <Outlet/>
   ):isloggedin ? (<Navigate to="/denied"/>) : (<Navigate to="login"/>)
}
export default RequireAuth;