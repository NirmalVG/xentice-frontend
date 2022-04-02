import React from "react";
import { Container, Image, Row, Col, Carousel } from "react-bootstrap";

const AdsContainer = () => {
    return (
        <Container>
            <Row>
                <Col xs={8} md={8}>
                    <Carousel
                        controls={false}
                        indicators={false}
                        interval={3000}
                        className="shadow mb-5 bg-white rounded"
                    >
                        <Carousel.Item>
                            <Image
                                src="images/furniture-ad.png"
                                alt="Furniture Ad"
                                fluid
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src="images/ad-hoomy.png"
                                alt="Hoomy Ad"
                                fluid
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={4} md={4}>
                    <Carousel
                        controls={false}
                        indicators={false}
                        className="shadow mb-5 bg-white rounded"
                    >
                        <Carousel.Item>
                            <Image src="images/ad2.png" alt="ad2" fluid />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default AdsContainer;
