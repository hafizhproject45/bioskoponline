import { Form, Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div className="search">
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="title text-light">BIOSKOP ONLINE</div>
              <Form.Control
                type="search"
                placeholder="Search"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
              <div className="mt-3 text-center">
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
