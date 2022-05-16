import { Container, Row, Col, Carousel } from "react-bootstrap";
import jokerImage from "../assets/img/tranding/joker.jpg";
import duneImage from "../assets/img/tranding/dune.jpg";
import avengerImage from "../assets/img/superhero/avenger.jpg";
import doctorstrangeImage from "../assets/img/tranding/doctorstrange.jpg";
import moonknightImage from "../assets/img/tranding/moonknight.jpg";
import morbiusImage from "../assets/img/tranding/morbius.jpg";
import spidermanImage from "../assets/img/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/img/superhero/superman.jpg";
import batmanImage from "../assets/img/superhero/batman.jpg";

const Trending = () => {
  return (
    <div className="trending_card">
      <Container>
        <Row>
          <Col>
            <h1 id="trending-text">TRENDING</h1>
            <div className="carousel">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-3"
                    src={jokerImage}
                    alt="First slide"
                    width="100%"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-3"
                    src={duneImage}
                    alt="First slide"
                    width="100%"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-3"
                    src={avengerImage}
                    alt="First slide"
                    width="100%"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col>
            <div className="carousel2">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-3"
                    src={doctorstrangeImage}
                    alt="First slide"
                    width="100%"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-3"
                    src={moonknightImage}
                    alt="First slide"
                    width="100%"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-3"
                    src={morbiusImage}
                    alt="First slide"
                    width="100%"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col>
            <div className="carousel2">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-3"
                    src={spidermanImage}
                    alt="First slide"
                    width="100%"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-3"
                    src={supermanImage}
                    alt="First slide"
                    width="100%"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-3"
                    src={batmanImage}
                    alt="First slide"
                    width="100%"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
