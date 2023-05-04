import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillCartFill } from "react-icons/bs";
import { HiSearch } from "react-icons/hi"


function NavigationBar() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdd-qzkVUo0dBoxPSfHqX6f1uOkJfLOcKdExSY-s0PiK3Ox3DY' id='navImg' alt='flipkartLogo'></img>
                    <div>
                        <input text id="navSearch" placeholder='Search for products,brands and more' /><span><HiSearch id='magnifying' /></span>
                    </div>
                    <div>
                        <button type='submit' id='navBtn'>Login</button>
                    </div>
                    <Nav.Link href='#' id='seller'>
                        Become a Seller
                    </Nav.Link>
                    <NavDropdown title="More" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Notification Preferences</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action4"> 24X7 Custmer Care</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action4"> Advertise</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action4"> Download App</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='#' id='cart'>
                        <BsFillCartFill /> Cart
                    </Nav.Link>
                </Container>
            </Navbar>
        </>
    )
}
export default NavigationBar