import React, { Component } from "react";
import axios from "axios";
import { Col, Button, Form, FormGroup, Label, Input, Badge, Row, Container } from 'reactstrap';
import Error from "./Error"

class Register extends Component {

    state = {
        email: "",
        password: "",
        confirm: "",
        errorMessage: []
    }

    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleConfChange = this.handleConfChange.bind(this);
        this.postRegister = this.postRegister.bind(this);
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePassChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleConfChange(e) {
        this.setState({
            confirm: e.target.value
        });
    }


    postRegister(){
        let payload = {
            email: this.state.email,
            password: this.state.password
        }
          axios.post("http://localhost:3006/user/register", payload).then((data) => {
            let err = []
            console.log(data)
            console.log(data["data"]["errMessage"])
            if(data["data"]["errMessage"]){
                err.push(data["data"]["errMessage"]);
                this.setState({
                    errorMessage: err
                })
                return;
            }
                this.props.toggleRegister()
         } 
            
        )
    }


    register() {
        let err = []
       if(!this.state.email || !this.state.password || !this.state.confirm){
            err.push("Please fill all information")
       } 
       if(this.state.password !== this.state.confirm){
           err.push("Password and confirmed password do not match.")
       }
       this.setState({
           errorMessage: err
       });
       this.postRegister()

    }

    render() {
        const { toggleRegister } = this.props
        const { errorMessage } = this.state
        return (
            <Container>

                <div className="text-muted display-3">Register</div>
                <Form>
                    <FormGroup row>
                        <Label for="Email" className="text-muted" sm={2}>Email</Label>
                        <Col sm={4}>
                            <Input type="email" name="email" value={this.state.email} id="Email" onChange={this.handleEmailChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Password" className="text-muted" sm={2}>Password</Label>
                        <Col sm={4}>
                            <Input type="password" name="password" value={this.state.password} id="Password" onChange={this.handlePassChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Confirm-Password" className="text-muted" sm={2}>Confirm Password</Label>
                        <Col sm={4}>
                            <Input type="password" name="confirm-password" value={this.state.confirm} id="confirm-Password" onChange={this.handleConfChange} />
                        </Col>
                    </FormGroup>
                    <Row>
                        <Col>
                            <Button size="lg" onClick={this.register}>Submit</Button>
                        </Col>

                        {errorMessage.length > 0 ? <Col>
                            <Error errorMessage={errorMessage}></Error>
                        </Col> : null}
                    </Row>

                    <div className="alreadyRegistered">
                        <h5 className="text-muted">Already registered? <Badge color="secondary" onClick={toggleRegister}>Sign in</Badge></h5>
                    </div>
                </Form>

            </Container>
        )
    }

}

export default Register;