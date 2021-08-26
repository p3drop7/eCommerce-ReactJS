import { useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'

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
                    <Nav.Link as={Link} to="/" >HOME</Nav.Link>
                    <NavDropdown title="CATEGORIES" id="collasible-nav-dropdown">
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
