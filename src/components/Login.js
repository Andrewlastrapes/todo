import React, { Component } from "react";
import axios from "axios";
import Error from "./Error"
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from "react-router";

class Login extends Component {
    state = {
        email: "",
        password: "",
        errMessage: [],
        toDashboard: false
    }
    constructor(props){
        super(props)
        this.login = this.login.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePassChange = this.handlePassChange.bind(this)
    }

    handlePassChange(e){
        this.setState({
            password: e.target.value
        })
    }

    handleEmailChange(e){
        this.setState({
            email: e.target.value
        })
    }

    login(){
        let payload = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post("http://localhost:3006/user/login", payload).then(result => {
            console.log(result["data"]["token"]);
            let err = []
            if(!result["data"]["token"]){
                err.push(result["err"])
                this.setState({
                    errorMessage: err
                })
            } else {
                this.setState({
                    toDashboard: true
                })
                // this.props.history.push('/dashboard')
                // Navigate to Dashboard
            }
            
        })
    }


    render() {
       
        const {email, password, errMessage} = this.state;

        if (this.state.toDashboard === true) {
            return <Redirect to={{
                pathname: '/dashboard',
                state: { user: email }
            }} />
          }
        return (
            <Container>

                <div className="text-muted display-3">Login</div>
                        <Form>
                            <FormGroup row>
                                <Label for="Email" className="text-muted" sm={2}>Email</Label>
                                <Col sm={4}>
                                    <Input type="email" name="email" onChange={this.handleEmailChange} id="Email" value={email}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Password" className="text-muted" sm={2}>Password</Label>
                                <Col sm={4}>
                                    <Input type="password" name="password" id="Password" onChange={this.handlePassChange} value={password} />
                                </Col>
                            </FormGroup>
                            {errMessage.length > 0 ? <Col><Error errMessage={errMessage}></Error></Col> : null }
                            <Button onClick={this.login} size="lg">Login</Button>
                        </Form>
                   
            </Container>
        )
    }

}

export default Login;