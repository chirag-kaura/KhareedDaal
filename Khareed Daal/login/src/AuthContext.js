import React,{createContext, useContext, useState,useEffect} from 'react';
import axios from 'axios'; 
const AuthContext =createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);

    useEffect(() => {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const token = rememberMe ? localStorage.getItem('userToken') : sessionStorage.getItem('userToken');
    
        if (token) {
          // Replace this with your actual token validation and user authentication logic
          validateTokenAndLogin(token).catch(console.error);
        }
      }, []);

      const validateTokenAndLogin = async (token) => {
        // Implement token validation and update state accordingly
         try {
            const response = await axios.post('/api/validate_token', { token });
            if (response.data.isValid) {
                // Assuming your API response includes the user data
                setUser(response.data.user);
            } else {
                console.log("Token is invalid or expired");
                // Handle token expiration or invalidity
            }
        } catch (error) {
            console.error("Error validating token:", error);
        }
      };

      
    

    const login =(username,password) => {
        console.log(`Logging in ${username} with password ${password}`);
        setUser({id: '123',username});
    };
    const logout =() => {
        
        setUser(null);
    ;}

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth= () => useContext(AuthContext);
