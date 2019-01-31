import React, { Component } from "react";
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container } from 'reactstrap';

class SingleTodo extends Component {

    state = {
        boxColor: ""
    }

    constructor(props) {
        super(props)
       
    }


    componentDidMount(){
        if(this.props.priority === "important"){
            this.setState({
                boxColor: "danger"
            })
        } else {
        let color = this.props.priority === "less" ? "primary" : "success";
            this.setState({
                boxColor: color
            })
        }
    }

    render() {
        const { title, date, additional, priority} = this.props
        const { boxColor } = this.state

        return (
            <div>

                <Container>
                    <Card body outline color={boxColor}> 
                        <CardHeader>{title}</CardHeader>
                        <CardBody >
                            <div className ="text-right">
                            <CardText>{date}</CardText>
                            </div>
                        <CardText>{additional}</CardText>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default SingleTodo;