import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";
import axiosInstance from "../../helpers/axiosinstances";

const initialState = {
    isloggedin:localStorage.getItem("isloggedin") || false,
    role:localStorage.getItem("role") || "",
    data:localStorage.getItem("data") != undefined ? JSON.parse(localStorage.getItem("data")) : {}
}

export const createAccount = createAsyncThunk("/auth/signup", async (data) =>{
   try{
        const res= axiosInstance.post("user/register",data);  //backend part use
        toast.promise(res,{
            loading : "Wait! creating your account",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to create account"
        })
        return (await res).data;
   } catch(error)
   {
       toast.error(error?.response?.data?.message);
   }
})


export const login = createAsyncThunk("/auth/login", async (data) =>{
    try{
         const res= axiosInstance.post("user/login",data);  //backend part use
         toast.promise(res,{
             loading : "Wait! authentication in progrees ...",
             success:(data)=>{
                 return data?.data?.message;
             },
             error:"Failed to Login"
         })
         return (await res).data;
    } catch(error)
    {
        toast.error(error?.response?.data?.message);
    }
 })

export const logout = createAsyncThunk("/auth/logout", async()=>{
   try {
     
    const res= axiosInstance.get("user/logout");  //backend part use
         toast.promise(res,{
             loading : "Wait! Logout in progrees ...",
             success:(data)=>{
                 return data?.data?.message;
             },
             error:"Failed to Logout"
         })
         return (await res).data;


   } catch (error) {
       toast.error(error?.response?.data?.message);
   }
})

export const updateProfile = createAsyncThunk("/user/update/profile", async(data)=>{
    try {   
     const res= axiosInstance.get(`user/update/${data[0]}`, data[1]);  //backend part use
          toast.promise(res,{
              loading : "Wait! Profile Update progrees ...",
              success:(data)=>{
                  return data?.data?.message;
              },
              error:"Failed Profile Update"
          })
          return (await res).data;
 
 
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
 })

export const getUserData = createAsyncThunk("/user/details", async()=>{
    try {
      
     const res= axiosInstance.get("user/me");  //backend part use
          return (await res).data;
 
    } catch (error) {
        toast.error(error.message);
    }
 })

const authslice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(login.fulfilled,(state,action)=>{
            localStorage.getItem("data",JSON.stringify(action?.payload?.user));
            localStorage.setItem("isloggedin",true);
            localStorage.setItem("role",action?.payload?.user?.role);
            state.isloggedin = true;
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role;
        })
        .addCase(logout.fulfilled,(state)=>{
            localStorage.clear();
            state.data = {};
            state.isloggedin = false;
            state.role = "";
        })
        .addCase(getUserData.fulfilled,(state,action)=>{
            if(!action?.payload?.user) return;
            localStorage.getItem("data",JSON.stringify(action?.payload?.user));
            localStorage.setItem("isloggedin",true);
            localStorage.setItem("role",action?.payload?.user?.role);
            state.isloggedin = true;
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role;
        })
    }
});

// export const {}=authslice.actions;
export default authslice.reducer;