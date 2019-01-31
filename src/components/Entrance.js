import React, { Component } from "react";
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Container, CardImgOverlay, Jumbotron } from 'reactstrap';
import Register from "./Register"
import "../css/Entrance.css"


class Entrance extends Component {

    render() {
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
                        <div><Register></Register></div>
                        </CardImgOverlay>
                    </Card>
                </Container>
            </div>
        )
    }

}

export default Entrance