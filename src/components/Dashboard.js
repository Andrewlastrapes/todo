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
        date: ""
    }

    constructor(props){
        super(props)

        this.passFun = this.passFun.bind(this)
    }

    passFun(s){

        console.log(s)

        let date = new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        
        let payload = {
            title: s.title,
            date: `${date} ${time}`,
            additional: s.additional,
            priority: s.priority
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
        return (
            <div>
                <NavBar />
                <div className="inputCard">
                    <InputContainer passFun={this.passFun}></InputContainer>
                    <TodoList></TodoList>
                </div>
            </div>
        )
    }


}

export default Dashboard;