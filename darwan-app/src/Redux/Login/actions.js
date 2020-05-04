import 
{
    LOGIN_USER,
    LOGOUT_USER
}
from '../actions';
import axios from "axios";

export const loginUserAsync = (userData, history) => {
  return (dispatch) => {
    console.log(userData.email);
    console.log(userData.password);
   
    const options = {
      method: 'post',
      url: 'https://runnerappbe.azurewebsites.net/api/auth/adminlogin',
      data: {
        email:userData.email,
        password: userData.password
      }
    };
      axios(options)
        .then(userDataRes => {
           console.log("Login detail")
           console.log(userDataRes);
           history.push("/dashboard")
           localStorage.setItem("user_name","Ameen");           
           dispatch(loginUser(userDataRes, history));
        })
        .catch(err => {
          alert("INVALID EMAIL AND PASSWORD");
      
          
        });
  };
};

export const logoutAsync = history => {
  return (dispatch) => {
    localStorage.removeItem("user_name");
    dispatch(logoutUser(history));
  };
};

export const loginUser = (user, history) => ({
  type: LOGIN_USER,
  payload: { user, history }
});

export const logoutUser = history => ({
  type: LOGOUT_USER,
  payload: { history }
});


