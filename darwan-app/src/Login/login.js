import React, { Component,Fragment } from "react";
import { AvForm, AvField, AvGroup} from 'availity-reactstrap-validation';
import { Button, Label, FormGroup} from 'reactstrap';
import { compose} from "redux";
import { connect } from "react-redux";
import Styles from "./login.module.css"
import { withRouter } from 'react-router-dom';
import { loginUserAsync} from "../Redux/Login/actions";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        password: "",
        email:"",
        reload:true
      };
    }
      handleSubmit=(event, errors, values)=>{

        if (errors.length === 0) {
          console.log("values",values)
            this.props.Login(values, this.props.history);
        }
      }

      handleInputChange = ({ target: { name, value } }) => {
        console.log(value)
        this.setState({
          [name]: value
        });
      };
    
    
      
    render() {
        const { email, password } = this.state;
        return (
            <Fragment>
                <div className={Styles.centered}>
   <AvForm className="col-md-4"
    onSubmit={this.handleSubmit}
   >
        <AvGroup  md="6">
          <div className={Styles.centeredHeading}>
          <h3 className={Styles.text}>RNS SOLUTIONS</h3>
          </div>
        <Label className="custom-label-lr">
                    Email <span className="asteriskcss">*</span>
                  </Label>
                  <AvField
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.handleInputChange}
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "This is a required field."
                      },
                      email: {
                        value: true,
                        errorMessage: "Please enter a valid email address"
                      }
                    }}
                  />
        <Label className="custom-label-lr">
                    Password <span className="asteriskcss">*</span>
                  </Label>
                  <AvField
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.handleInputChange}
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "This is a required field."
                      },
                      
                    }}
                  />
        </AvGroup>
        {/* Radios */}
       
        <FormGroup>
          <Button 
            color="primary"
            className="mt-4 mb-2"
            block
            size="lg"
          >SIGNIN</Button>
        </FormGroup>
      </AvForm>
      </div>
            </Fragment>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
  return {
    Login:(data,history)=>{dispatch(loginUserAsync(data,history))},
    }

};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(Login)