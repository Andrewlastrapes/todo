import React, { Component } from "react";
import InputContainer from "./InputContainer";
import NavBar from "./NavBar";
import "../css/Dashboard.css"
import TodoList from "./TodoList";
import axios from "axios"


class Dashboard extends Component {

    state = {
        title: "",
        additional: "",
        priority: "",
        date: "",
        test: "test"
    }

    constructor(props){
        super(props)
      
        this.passFun = this.passFun.bind(this)
        this.test = this.test.bind(this)
    }

    test(){
        this.setState({
            test: "Changed to this"
        })
    }

    passFun(s){

        console.log(s)

        let date = new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        let user = this.props.location.state.user;

        let payload = {
            title: s.title,
            date: `${date} ${time}`,
            additional: s.additional,
            priority: s.priority,
            email: user
        }
        
        axios.post("http://localhost:3006/post", payload)
        .then(res => {
            const { title, additional, priority, date } = res["data"]["data"];
            this.setState({
                title: title,
                additional: additional,
                priority: priority,
                date: date
            })
        })
        

    }

    render() {
        const { user } = this.props.location.state
        return (
            <div>
                <NavBar />
                <div className="inputCard">
                    <InputContainer user={user} passFun={this.passFun}></InputContainer>
                    <TodoList user={user}></TodoList>
                </div>
            </div>
        )
    }


}

export default Dashboard;