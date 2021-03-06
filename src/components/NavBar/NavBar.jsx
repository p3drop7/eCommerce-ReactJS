import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css'

function NavBar({cats}) {

    const { cart } = useContext(CartContext)

    return (

        //NavBar collapsible using Bootstrap
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navBar" cats={cats} >
            <Navbar.Brand as={Link} to="/" className="brand">PCS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            { cart.length >= 1 && <CartWidget /> /* CartWidget visible if there are items in cart */ }

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" >HOME</Nav.Link>
                    <NavDropdown title="CATEGORIES" id="collasible-nav-dropdown">
                        {
                            //Categories maped from state "cats" in NavbarContainer.jsx
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
