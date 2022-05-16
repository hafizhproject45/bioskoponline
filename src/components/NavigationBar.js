import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand className="navBrand">BIOSKOP ONLINE</Navbar.Brand>
          <Nav>
            <Nav.Link a href="#deskripsi">
              Deskripsi
            </Nav.Link>
            <Nav.Link a href="#trending">
              Trending
            </Nav.Link>
            <Nav.Link href="#sedangtayang">Sedang Tayang</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
