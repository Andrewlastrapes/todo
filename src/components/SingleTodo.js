import React, { Component } from "react";
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container } from 'reactstrap';

class SingleTodo extends Component {
    constructor(props) {
        super(props)
        this.selectPriority = this.selectPriority.bind(this);
    }

    selectPriority(a, b, c){
        if(a){
            return "danger"
        } else if(b) {
            return "primary"
        } else if(c) {
            return "success"
        }
    }

    render() {
        const { title, date, additional, important, less, wait } = this.props


        return (
            <div>
                <Container>
                    <Card body outline color={this.selectPriority(important, less, wait )}> 
                        <CardHeader>{title}</CardHeader>
                        <CardBody>
                            <CardText>Time Created: {date}</CardText>
                        <CardText>{additional}</CardText>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default SingleTodo;