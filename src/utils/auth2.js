export function getToken(){
    return localStorage.getItem('access-token')
}

export function setToken(token){
    localStorage.setItem("access-token",token)
}

export function isLogined(){
    if (localStorage.getItem("access-token")) {
        return true;
    } 
    return false;
}