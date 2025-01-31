import { About, Forgetpassword, Home, Login, Signup } from "./routingPages";

export const RouterData=[
   
    {
        id:1,
        name:"Login",
        path:"/",
        element:<Login/>,
        image:"",
        exact:true,
        index:true,
        show:true,
        auth:true
    },

    {
        id:2,
        name:"Signup",
        path:"/signup",
        element:<Signup/>,
        image:"",
        exact:true,
        index:true,
        show:true,
        auth:true
    },

    {
        id:3,
        name:"Forget password",
        path:"/forget-password",
        element:<Forgetpassword/>,
        image:"",
        exact:true,
        index:true,
        show:true,
        auth:true
    },


    // auth token data
    {
        id:4,
        name:"Home",
        path:"/home",
        element:<Home/>,
        image:"",
        exact:false,
        index:false,
        show:true,
        auth:false
    },
    {
        id:5,
        name:"About",
        path:"/about",
        element:<About/>,
        image:"",
        exact:true,
        index:true,
        show:true,
        auth:false
    }
]