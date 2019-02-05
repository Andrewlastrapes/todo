import React, { Component } from "react";
import { Alert } from "reactstrap";

class Error extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { errorMessage } = this.props
        return (
            errorMessage.map((e, i) => 
                <div key={i}>
                    <Alert color="danger">
                        {errorMessage}
                    </Alert>
                </div>
            )
        )
    }

}

export default Error;