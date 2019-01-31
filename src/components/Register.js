import React, { Component } from "react";

import { Card, CardBody, CardSubtitle, CardTitle, CardText, CardImg, Container, CardImgOverlay, Col, Button, Form, FormGroup, Label, Input, FormText, Badge } from 'reactstrap';

class Register extends Component {

    render() {
        return (
            <Container>

                <div className="text-muted display-3">Register</div>
                        <Form>
                            <FormGroup row>
                                <Label for="Email" className="text-muted" sm={2}>Email</Label>
                                <Col sm={4}>
                                    <Input type="email" name="email" id="Email" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Password" className="text-muted" sm={2}>Password</Label>
                                <Col sm={4}>
                                    <Input type="password" name="password" id="Password" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Confirm-Password" className="text-muted" sm={2}>Confirm Password</Label>
                                <Col sm={4}>
                                    <Input type="confirm-password" name="confirm-password" id="confirm-Password" />
                                </Col>
                            </FormGroup>
                            <Button size="lg">Submit</Button>
                            <div className="alreadyRegistered">
                                <h5 className="text-muted">Already registered? <Badge color="secondary">Sign in</Badge></h5>
                            </div>
                        </Form>
                   
            </Container>
        )
    }

}

export default Register;