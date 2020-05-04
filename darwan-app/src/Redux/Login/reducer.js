import { LOGIN_USER, LOGOUT_USER } from "../actions";

const INT_STATE = {
  user: localStorage.getItem("user_Id"),
};

export default (state = INT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null };
    default:
      return { ...state };
  }
};
