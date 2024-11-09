import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const NewsLetter = () => {
    const { theme } = useSelector((state) => state.flavor);
    return (
        <Container fluid className="NewsLetter-container bg-light" style={{
            padding: '50px 250px 50px 250px'
        }}>
            {/* Main Row for NewsLetter Section */}
            <Row className="justify-content-center align-items-center">
                {/* Left Column: Text Content */}
                <Col md={6} className="text-left">
                    <h3 className="NewsLetter-subtitle">OUR NewsLetter</h3>
                    <h2 className={`font-weight-bold ${theme}`}>Stay Updated with Our NewsLetter</h2>
                    <div className="divider my-3"></div>
                    <p className="text-muted">
                        Don’t miss out! Get updates and be the first to know about exciting opportunities. Subscribe to our NewsLetter for the latest news and special offers delivered straight to your inbox.
                    </p>
                </Col>

                {/* Right Column: Form Content */}
                <Col md={6} className="d-flex justify-content-center">
                    <Form className="d-flex w-100 align-items-center">
                        <InputGroup className="w-75">
                            {/* Input with Email Icon */}
                            {/* <InputGroup.Prepend> */}

                            {/* </InputGroup.Prepend> */}
                            <FormControl
                                type="email"
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                className=""
                            />
                            <InputGroup.Text id="basic-addon1">
                                <FaEnvelope />
                            </InputGroup.Text>
                        </InputGroup>
                        {/* Separate Button */}
                        <Button className={`btn btn-primary ${theme}-send-btn`}>Send</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default NewsLetter