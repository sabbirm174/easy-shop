import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import {MyContext} from './../../../App'
import './header.css'
const Header = () => {

    const [logedInUser, setLogedInUser] = useContext(MyContext);



    return (
    <Navbar fixed="top" bg="primary" variant="dark" expand="lg">
        <div className="container">
        <Navbar.Brand ><Link className='logo' to="/">Easy Shop</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link><Link to="/home"> Home</Link></Nav.Link>
      <Nav.Link ><Link to="/orders"> Orders</Link></Nav.Link>
      <Nav.Link ><Link to="/admin"> Admin</Link></Nav.Link>
      <Nav.Link ><Link to="/home"> Deals</Link></Nav.Link>
      
    </Nav>
    <Form inline>
      {logedInUser.email ? <span>{logedInUser.userName}</span> : <Link className="btn log-in-btn btn-warning" to='/login'>Log in</Link>} 
    </Form>
  </Navbar.Collapse>
        </div>
    </Navbar>
    );
};

export default Header;

















// import { Button } from 'bootstrap';
// import React from 'react';

// import { Link } from 'react-router-dom';
// import { MyContext } from './../../../App';
// const Header = () => {
//     return (
//         <div>
//             <Navbar bg="dark" variant="dark">
//                 <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//                     <Nav className="mr-auto">
//                     <Nav.Link href="#home">Home</Nav.Link>
//                     <Nav.Link href="#features">Features</Nav.Link>
//                     <Nav.Link href="#pricing">Pricing</Nav.Link>
//                 </Nav>
//                 <Form inline>
//                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                     <Button variant="outline-info">Search</Button>
//                 </Form>
//             </Navbar>
//         </div>
//     );
// };

// export default Header;