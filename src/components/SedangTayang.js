import { Container, Row, Col, Card } from "react-bootstrap";
import antmanImage from "../assets/img/superhero/antman.jpg";
import avengerImage from "../assets/img/superhero/avenger.jpg";
import batmanImage from "../assets/img/superhero/batman.jpg";
import spidermanImage from "../assets/img/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/img/superhero/superman.jpg";
import doctorstrangeImage from "../assets/img/tranding/doctorstrange.jpg";
import duneImage from "../assets/img/tranding/dune.jpg";
import jokerImage from "../assets/img/tranding/joker.jpg";

const SedangTayang = () => {
  return (
    <div className="sedang_tayang">
      <div>
        <h1 id="sedangtayang-text">SEDANG TAYANG</h1>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="cardorder text-center">
              <Card>
                <Card.Img variant="top" src={antmanImage} />
                <Card.Body>
                  <Card.Title>Ant-Man and the Wasp</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="cardorder text-center">
              <Card>
                <Card.Img variant="top" src={avengerImage} />
                <Card.Body>
                  <Card.Title>Avengers Endgame</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="cardorder text-center">
              <Card>
                <Card.Img variant="top" src={batmanImage} />
                <Card.Body>
                  <Card.Title>Batman : The dark knight</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="cardorder text-center">
              <Card>
                <Card.Img variant="top" src={jokerImage} />
                <Card.Body>
                  <Card.Title>Joker</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="cardorder text-center">
              <Card>
                <Card.Img variant="top" src={spidermanImage} />
                <Card.Body>
                  <Card.Title>Spiderman : No Way Home</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="cardorder text-center">
              <Card>
                <Card.Img variant="top" src={supermanImage} />
                <Card.Body>
                  <Card.Title>Superman : Man of Steel</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="cardorder text-center">
              <Card>
                <Card.Img variant="top" src={duneImage} />
                <Card.Body>
                  <Card.Title>Dune</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="cardorder text-center">
              <Card>
                <Card.Img variant="top" src={doctorstrangeImage} />
                <Card.Body>
                  <Card.Title>Dr Strange : Multiverse of Madness</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SedangTayang;
