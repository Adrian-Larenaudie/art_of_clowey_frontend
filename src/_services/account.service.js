// import des modules nécessaires
import Axios from './caller.service.js';

// requête de connexion
let login = (credentials) => {
    return Axios.put('/auth/login', credentials);
};

// requête de déconnexion
let logout = () => {
    localStorage.removeItem('accessToken');
};

let saveUser = (accessToken) => {
    localStorage.setItem('accessToken', accessToken);
};

let getAccessToken = () => {
    return localStorage.getItem('accessToken');
};

let isLogged = () => {
    let accessToken = localStorage.getItem('accessToken');
    return !! accessToken;
};

let getHeaderConfig = (json) => {
    let accessToken = localStorage.getItem('accessToken')
    if(json) {
        return {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        };
    } else {
        return {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data'
            }
        };
    }
    
};

export const accountService = {
    login,
    logout,
    saveUser,
    isLogged,
    getAccessToken,
    getHeaderConfig,
};