import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title as="h1">Welcome to Suraj Agro chemicals</Card.Title>
                            <Card.Text>
                              
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
