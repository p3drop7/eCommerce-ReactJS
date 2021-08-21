import { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { CartContext } from '../Cart/CartContext';

function NavBar({cats}) {

    const { cart } = useContext(CartContext)
    
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navMenu" cats={cats} >
            <Navbar.Brand as={Link} to="/" className="brand">PCS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {
                cart.length >= 1 && <CartWidget />
            }
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                    <NavDropdown title="Categories" id="collasible-nav-dropdown">
                        {
                            cats.map(it => <NavDropdown.Item 
                                as={Link} 
                                key={cats.indexOf(it)}
                                to={`/category/${it}`} >
                                    {it.charAt(0).toUpperCase() + it.slice(1)}
                                </NavDropdown.Item>)
                        }
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
