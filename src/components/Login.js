import React, { Component } from "react";

import { Card, CardBody, CardSubtitle, CardTitle, CardText, CardImg, Container, CardImgOverlay, Col, Button, Form, FormGroup, Label, Input, FormText, Badge } from 'reactstrap';

class Login extends Component {

    render() {
        return (
            <Container>

                <div className="text-muted display-3">Login</div>
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
                            <Button size="lg">Login</Button>
                        </Form>
                   
            </Container>
        )
    }

}

export default Login;