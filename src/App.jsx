import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage';
import Aboutus from "./pages/aboutus"
import Notfound from './pages/notfound';
import Signup from './pages/signup';
import Login from './pages/login';
import CourseList from './pages/course/courselist';
import Contact from './pages/contact';
import Denied from './pages/denied';
import CourseDescription from './pages/course/courseDescription';
import RequireAuth from './components/Auth/requireauth';
import CreateCourse from './pages/course/createcourse';
import Profile from './pages/user/profile';
import Editprofile from './pages/user/Editprofile';
import Checkout from './pages/Payment/checkout';
import Displaylectures from './pages/dashboard/displaylectures';
import AddLecture from './pages/dashboard/addlecture';
import AdminDashboard from './pages/dashboard/admindashboard';
function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/about" element={<Aboutus/>}> </Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/denied' element={<Denied/>}></Route>
        <Route path='/courses' element={<CourseList/>}></Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN","USER"]}/>}>
            <Route path='/course/description' element={<CourseDescription/>}/>
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
            <Route path='/course/create' element={<CreateCourse/>}/>
            <Route path='/course/addlecture' element={<AddLecture/>}/>
            <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN","USER"]}/>}>
            <Route path='/user/profile' element={<Profile/>}/>
            <Route path='/user/editprofile' element={<Editprofile/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/course/displaylectures' element={<Displaylectures/>}/>
        </Route>

        <Route path="*" element={<Notfound/>}> </Route>
      </Routes>
   </>
  )
}
export default App
