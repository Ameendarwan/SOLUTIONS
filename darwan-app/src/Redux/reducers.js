
import { reducer as ToastrReducer } from 'react-redux-toastr';
import {combineReducers} from 'redux'
import login from "./Login/reducer"



const reducers = combineReducers({
    toastr: ToastrReducer,
    login
    
  });
  
  export default reducers;