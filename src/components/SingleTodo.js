import React, { Component } from "react";
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';


import { Icon } from 'react-icons-kit'
import { close } from 'react-icons-kit/fa/close'


class SingleTodo extends Component {

    state = {
        boxColor: "",
        modal: false
    }

    constructor(props) {
        super(props)

        this.openModal = this.openModal.bind(this);

    }

    openModal() {
        this.setState({
            modal: !this.state.modal
        })

    }


    componentDidMount() {
        if (this.props.priority === "important") {
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
        const { title, date, additional, usableKey, priority, _id } = this.props
        const { boxColor } = this.state
        let payload = {
            title: title,
            date: date,
            additionalNotes: additional,
            _id: usableKey,
            priority: priority
        }


        return (
            <div>
                <Container>
                    <Card body outline color={boxColor}>
                        <Modal isOpen={this.state.modal}>
                            <ModalHeader toggle={this.toggle}>Delete task</ModalHeader>
                            <ModalBody>
                               Are you sure you want to delete this task?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => this.props.deleteTask(payload)}>Yes, delete!</Button>{' '}
                                <Button color="secondary" onClick={this.openModal}>No</Button>
                            </ModalFooter>
                        </Modal>
                        <CardHeader>
                            <div className="float-right">
                                <Icon onClick={() => this.openModal()} icon={close} />
                            </div>
                            {title}

                        </CardHeader>

                        <CardBody >
                            <div className="float-right">
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