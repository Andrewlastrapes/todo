import React, { Component } from "react";
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Container, CardImgOverlay, Jumbotron } from 'reactstrap';
import Register from "./Register";
import Login from "./Login";
import "../css/Entrance.css"


class Entrance extends Component {

    state = {
        register: true
    }

    constructor(props){
        super(props);
        this.toggleRegister = this.toggleRegister.bind(this);
    }

    toggleRegister(){
        this.setState({
            register: !this.state.register
        })
    }

    render() {
        const { register } = this.state
        return (
            <div>
                <Container>
                    <Card inverse>
                        <CardImg width="100%" height="50%" src="/img/note.jpg" />
                        <CardImgOverlay>
                        <div className="text-right padRight">
                            <h1 className="display-3">ToDo!</h1>
                            <p className="lead">Keep track of your daily tasks</p>
                        </div>
                        {register ? <div><Register toggleRegister={this.toggleRegister}></Register></div> : <div><Login></Login></div>}
                        </CardImgOverlay>
                    </Card>
                </Container>
            </div>
        )
    }

}

export default Entrance