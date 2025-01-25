import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Company = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                  
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title><h2>Suraj Agro Company</h2></Card.Title>
                            <Card.Text>
                                We supply the best fertilizers to our partners.
                            </Card.Text>
                        </Card.Body>
                    </Card>

               
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title><h2>Address</h2></Card.Title>
                            <Card.Text>
                                Gut No. 198 & 192,<br />
                                Gajrwadi, Taluka – Niphad,<br />
                                District – Nashik, Maharashtra, 422303.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title><h2>About Us</h2></Card.Title>
                            <Card.Text>
                                Suraj Agro Chemical Industries is a leading manufacturer of agro-chemical products, committed to enhancing agricultural productivity.<br />
                                Our product range includes:
                                <ul>
                                    <li>Plant Growth Regulators: Green seaweed, amino acids, humic acid, fulvic acid, brassinoids, and S4.</li>
                                    <li>Fertilizers: Mix fertilizer grades (1 to 11) tailored to specific soil and crop nutrient deficiencies.</li>
                                    <li>Pesticides: Bright, Peacock, Suraj M-45, Samruddhi, and more.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                 
                    <Card>
                        <Card.Body>
                            <Card.Title><h2>Certifications & Licenses</h2></Card.Title>
                            <Card.Text>
                                We adhere to all regulatory requirements and possess the following certifications:
                                <ul>
                                    <li>MPCB: Maharashtra Pollution Control Board compliance.</li>
                                    <li>Insecticide Manufacturing: Approved by the State and Central Insecticides Board & Registration Committee.</li>
                                    <li>Fertilizer Licensing: Valid DRC and MRC certifications.</li>
                                    <li>Business Licenses: GST and Udyam registration for industrial compliance.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Company;
