import React, { Component } from "react";
import { Button, Input, Badge, FormGroup, Form, Label, Container, Card, CardTitle, CardBody, Row, Col } from "reactstrap";
import "../css/InputContainer.css"
import Error from "./Error";


class InputContainer extends Component {

    state = {
        title: '',
        priority: "",
        additional: "",
        errMessage: []
    }

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAdditionalChange = this.handleAdditionalChange.bind(this);
        this.handlePriority = this.handlePriority.bind(this);

    }


    handlePriority(event) {

        this.setState({
            priority: event.target.value
        })
    }


    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleAdditionalChange(event) {
        this.setState({
            additional: event.target.value
        })
    }

    handleSubmit(event) {
        let err = ["Please fill out priority and title."]
        this.setState({
            showError: false
        })
        if(!this.state.priority || !this.state.title){
            this.setState({
               errMessage: err
            })
            return;
        }
        this.props.passFun(this.state)
        this.setState({
            title: '',
            priority: "",
            additional: "",
            errMessage: []
        })
        event.preventDefault();
    }

    render() {
        const { user } = this.props
        const { errMessage } = this.state
        return (
            <div>
                <Container>
                    <Card body inverse color="primary">
                        <CardBody>
                        <div className="float-right"><h3>Welcome <Badge color="secondary">{user}</Badge></h3></div>
                            <CardTitle>Add Task</CardTitle>
                            <Input placeholder="Task" value={this.state.title} onChange={this.handleChange}></Input>
                            <div className="priorityAndAdditionalNotes">
                                <Row>
                                    <Col lg="2">
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" value={'important'} onChange={this.handlePriority} />{' '}
                                                Important
                                                </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="2">
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" value={'less'} onChange={this.handlePriority} />{' '}
                                                Less important
                                                </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="2">
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" value={'wait'} onChange={this.handlePriority} />{' '}
                                                Can wait
                                                </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleText">Additional Notes (Optional)</Label>
                                            <Input type="textarea" name="text" id="exampleText" value={this.state.additional} onChange={this.handleAdditionalChange} />
                                        </FormGroup>
                                    </Col>

                                </Row>
                            </div>
                            <Row>
                                <Col xs="2" sm="3" md="3" lg="3">
                                    <Button color="success" onClick={this.handleSubmit}>Submit</Button>
                                </Col>
                                <Col xs="10" sm="9" md="9" lg="9">
                                    { errMessage ? <Error errorMessage={errMessage}></Error> : null}
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Container>



            </div>
        )
    }

}

export default InputContainer;