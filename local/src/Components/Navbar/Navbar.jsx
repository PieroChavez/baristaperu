import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa'; // Importa el ícono de lupa
import Oferta from '../Alerts/Oferta';

const NavbarComponent = () => {
  const collections = [
    { emoji: '👍', label: 'Sales' },
    { emoji: '🚚', label: 'Deliveries' },
    { emoji: '💸', label: 'Discounts' },
    { emoji: '💰', label: 'Profits' },
    { emoji: '✨', label: 'Reports' },
    { emoji: '🛒', label: 'Orders' },
    { emoji: '📅', label: 'Events' },
    { emoji: '🙈', label: 'Debts' },
    { emoji: '💁‍♀️', label: 'Customers' },
  ];

  return (
    <>
      <Oferta />
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Baristas Perú</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto" navbarScroll>
              <Nav.Link href="home">Nosotros</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Options" id="navbarScrollingDropdown">
                {collections.map((item, index) => (
                  <NavDropdown.Item key={index} href={`#${item.label.toLowerCase()}`}>
                    {item.emoji} {item.label}
                  </NavDropdown.Item>
                ))}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex position-relative">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 custom-search"
                aria-label="Search"
              />
              <Button variant="outline-success" className="search-icon">
                <FaSearch />
              </Button>
            </Form>
            <Nav.Link href="/login" className="d-flex align-items-center me-3">
              <FaUser size={20} className="me-1" />
              Login
            </Nav.Link>
            <Nav.Link href="/cart" className="d-flex align-items-center">
              <FaShoppingCart size={20} className="me-1" />
              Cart
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
