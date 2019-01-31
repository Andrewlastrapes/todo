import React, { Component } from "react";
import { Alert } from "reactstrap";

class Error extends Component {

    render(){
        return(
            <div>
                <Alert color="danger">
                    Title and Priority must not be blank
                </Alert>
            </div>
        )
    }

}

export default Error;