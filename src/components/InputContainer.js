import React, { Component } from "react";
import { Button, Input, InputGroup, FormGroup, Form, Label, Container, Card, CardTitle, CardBody, Row, Col } from "reactstrap";
import "../css/InputContainer.css"


class InputContainer extends Component {

    state = {
        task: '',
        important: false,
        less: false,
        wait: false,
        additional: "" 
    }

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAdditionalChange = this.handleAdditionalChange.bind(this);
        this.handleImportant = this.handleImportant.bind(this);
        this.handleLess = this.handleLess.bind(this);
        this.handleWait = this.handleWait.bind(this);

    }

    handleImportant(){
        this.setState({
            important: true,
            less: false,
            wait: false
        })
    }
    handleLess(){
        this.setState({
            less: true,
            wait: false,
            important: false
        })
    }
    handleWait(){
        this.setState({
            wait: true,
            less: false,
            important: false
        })
    }

    handleChange(event, type) {
        console.log(type)
        this.setState({task: event.target.value});
        }
    
        handleAdditionalChange(event){
            this.setState({
                additional: event.target.value
            })
        }

    handleSubmit(event){
        this.props.passFun(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Container>
                    <Card body inverse color="primary">
                        <CardBody>
                            <CardTitle>Add Task</CardTitle>
                                <Input placeholder="Task" value={this.state.task} onChange={this.handleChange}></Input>
                                <div className="priorityAndAdditionalNotes">
                                    <Row>
                                        <Col sm="2">
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="radio1" value={this.state.value} onChange={this.handleImportant}  />{' '}
                                                    Important
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="2">
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="radio1" value={this.state.less} onChange={this.handleLess} />{' '}
                                                    Less important
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="2">
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="radio1" value={this.state.wait} onChange={this.handleWait}/>{' '}
                                                    Can wait
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="exampleText">Additional Notes</Label>
                                                <Input type="textarea" name="text" id="exampleText" value={this.state.additional} onChange={this.handleAdditionalChange}/>
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                </div>
                                <Button color="success" onClick={this.handleSubmit}>Submit</Button>
                        </CardBody>
                    </Card>
                </Container>


                
            </div>
        )
    }

}

export default InputContainer;