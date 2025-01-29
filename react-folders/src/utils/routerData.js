import { About, Home, Login } from "./routingPages";

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

    // auth token data
    {
        id:2,
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
        id:3,
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