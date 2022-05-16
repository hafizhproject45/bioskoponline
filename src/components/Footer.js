import { Container, Row, Col } from "react-bootstrap";

const footer = () => {
  return (
    <div className="footer text-light">
      <Container>
        <Row>
          <Col>
            <div className="copyright">
              Copyright @ 2022 hafizhproject. <br /> All right reserved
            </div>
          </Col>
          <Col className="medsos">
            Media Sosial :
            <a href="https://www.instagram.com/hafizh.png/?hl=id">
              {" "}
              Instagram{" "}
            </a>
            | <a href="https://github.com/hafizhproject45"> Github</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default footer;
