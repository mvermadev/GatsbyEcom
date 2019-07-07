import React from 'react';
import {Link} from 'gatsby'
import {Navbar, Nav, Form, FormControl, NavDropdown, Button} from 'react-bootstrap'

function Heading() {
    return(
      <div className="text-white">
      <Navbar className="bg-theme" expand="lg">
      <Link to="/" className="navbar-brand text-white font-weight-bold">E-Comm</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/product">Product</Link>
          <NavDropdown title="SERVICES" className="text-light" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="./services/homeDec">Home Decor</Link>
            <Link className="dropdown-item" to="./services/parcelDel">Parcel Delivery</Link>
            <Link className="dropdown-item" to="./services/houseClean">House Cleaning</Link>
            <Link className="dropdown-item" to="./services/homeMover">Home Movers</Link>
            <NavDropdown.Divider />
            <Link className="dropdown-item" to="/career">CAREER</Link>
          </NavDropdown>
        </Nav>
        <section className="d-flex align-items-center">
        <Button className="btn mr-sm-2 btn-dark border border-white rounded">LOGIN</Button>
        <Button className="btn btn-dark mr-sm-2 border border-white rounded-10">SIGNUP</Button>
        </section>
      </Navbar.Collapse>
    </Navbar> 
    </div>
    )
}

// function Navbar(){
//     return(
//         <div className="navbar navbar-expand-sm text-center bg-theme text-white ">
//             <h4>E-comm</h4>
//             <div className="navbar-nav nav-item ml-auto mr-5">
//                 <Link to="/login" className="nav-link text-white">LOGIN</Link>
//                 <Link to="/signin" className="nav-link text-white">SIGNIN</Link>
//             </div>
//                 <h6>☰</h6>

//         </div>
//     )
// }


export default Heading;