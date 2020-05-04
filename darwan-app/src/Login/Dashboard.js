import React, { Component,Fragment } from 'react'
import { Button,Form,Navbar,Nav ,} from 'react-bootstrap';
import { logoutAsync} from "../Redux/Login/actions";
import { Redirect,NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Styles from "./login.module.css"
class Dashboard extends Component {

  state=
  {
    loginStatus:false
  }


  handle=()=>
  {
    console.log("LOGOUT")
    this.props.Logout();
    this.setState({loginStatus:true})
    
  }
    render() {
      if(this.state.loginStatus){
        return <Redirect to='/'  />
     }
        return (
            <Fragment>
               <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">RNS Solutions</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link >HOME</Nav.Link>
      <Nav.Link >ABOUT US</Nav.Link>
    </Nav>
    <Form className="mr-5" >
    <Button 
            color="primary"
            className="mt-4 mb-2"
            block
            size="md"
            onClick={this.handle}
          >SIGNOUT</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> 

<div className={Styles.centered}>
  <div className="col-md-3">
<div>
  <h1 className={Styles.text}>RNS SOLUTIONS</h1>
</div>
  </div>
</div>
            </Fragment>
        )
    }
}

const mapDispatchToProps =(dispatch)=> {
  return {
    Logout:()=>{dispatch(logoutAsync())},
    }

};

export default connect(null, mapDispatchToProps)(Dashboard);
