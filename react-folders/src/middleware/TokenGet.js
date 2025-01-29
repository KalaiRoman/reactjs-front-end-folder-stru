
export const getToken=()=>{
return localStorage.getItem("auth");
}
export const setToken=(params)=>{
    return localStorage.setItem("auth",params);
    }


    export const tokenRemove=()=>{
        localStorage.clear();
        sessionStorage.clear();
    }