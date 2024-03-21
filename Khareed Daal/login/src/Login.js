import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
import ReCAPTCHA from "react-google-recaptcha";
import PasswordInput from './PasswordInput';
import axios from 'axios';
import UserProfile from './User_Profile'

function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
    const [captchaValue, setCaptchaValue] = useState(null);
    const auth = useAuth();
    const [rememberMe, setRememberMe] = useState(false);
    const [twoFactorRequired, setTwoFactorRequired] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // console.log(password)
    const handleSubmit = async(e) => {

      e.preventDefault();
      if (!captchaValue) {
        console.log('Captcha is not verified.');
          return;
      }


      if (!username.trim() || !password.trim()) {
        alert('Both Username and password are required.');
        return;
      }

      try {
        const loginResponse = await auth.login(username, password);
        if (loginResponse && loginResponse.success) {
          // if (loginResponse.twoFactorRequired && loginResponse.user.email) {
          //   await sendOTP(loginResponse.user.email);
          // } else {
          //   handleTokenStorage(loginResponse.token);
          // }
          const from =location.state?.from?.pathname || '/User_Profile';
          navigate(from,{replace:true});
        } else {
          console.error('Login was unsuccessful or the response structure is incorrect.');
        }
      } catch (error) {
        console.error('An error occurred during login:', error);
      }
};
    
// const sendOTP = async (emailTo) => {

// const options = {
//             method: 'GET',
//             url: 'https://abir82-otp-service.p.rapidapi.com/',
//             params: {
//                 email_from: 'promatics.chiragkaura@gmail.com',
//                 password: 'Chirag@08012003',
//                 email_to: email
//             },
//             headers: {
//               'Content-Type': 'application/json',
//                 'X-RapidAPI-Key': 'a488d973a7msh096d8993e3841aap1ea754jsn17a66075f805',
//                 'X-RapidAPI-Host': 'abir82-otp-service.p.rapidapi.com'
//             }
//         };


//       try {
//             const response = await axios.request(options);
//             console.log(response.data);
//             if (response.data && response.data.success) {
          
//                 console.log('OTP sent successfully to email.');
//                 setTwoFactorRequired(true);
//             } else {
//                 console.log('Failed to send OTP to email.');
//             }
//         } catch (error) {
//             console.error('Error sending OTP to email:', error);
//         }
//     };


            
    const handleTokenStorage =(token) => {        
            if (rememberMe) {
              localStorage.setItem('userToken', token);
              localStorage.setItem('rememberMe', 'true');
            } else {
              sessionStorage.setItem('userToken', token);
              localStorage.setItem('rememberMe', 'false');
            }
          }
       


    
    const handleCaptchaChange = (value) => {
        console.log("Captcha value:", value);
        setCaptchaValue(value);
      };
    
  //   const verifyOtp = async (e) => {
  //     e.preventDefault();
    
  //     try {
  //       const response = await axios.get('https://abir82-otp-service.p.rapidapi.com/', {
  //         params: {
  //         email_to: email,
  //         otp: otp
  //       },
  //         headers: {
  //           'X-RapidAPI-Key': 'a488d973a7msh096d8993e3841aap1ea754jsn17a66075f805',
  //           'X-RapidAPI-Host': 'abir82-otp-service.p.rapidapi.com'
  //         }
  //       });
    
  //       if (response.data.verified) {
  //         console.log('OTP verified successfully.');
  //         handleTokenStorage(response.data.token)
        
  //       } else {
  //         console.log('Invalid OTP.');
  //       }
  //     } catch (error) {
  //       console.error('Error verifying OTP:', error);
  //     }

  // };

  return (
      
    <>
        
        {/* {twoFactorRequired ? (
            <form onSubmit={verifyOtp}>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
              <button type="submit">Verify OTP</button>
            </form>
          ) : ( */}
        <form onSubmit={handleSubmit} className="login-form">
            <label>
                Username: 
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password: 
                {/* Pass the setPassword function to handle password changes */}
                <PasswordInput onPasswordChange={setPassword} />
            </label>
            {/* <label>
                Your Email Id:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            </label> */}
            <ReCAPTCHA
        sitekey="6LcirGspAAAAAN6b9PO8BjW95peGwxpZNfX-Arec"
        onChange={handleCaptchaChange}
      />
      <button type="submit" disabled={!captchaValue}>Submit</button>
      <label>
            <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>
            Remember Me
      </label>
        </form>
          )
    </>
    );
};
export default Login;                                                                                                                                                            