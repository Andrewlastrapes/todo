import React, { Component } from "react";
import InputContainer from "./InputContainer";
import NavBar from "./NavBar";
import "../css/Dashboard.css"
import TodoList from "./TodoList";

class Dashboard extends Component {
    state = {
        title: "",
        date: [],
        additional: "",
        important: Boolean,
        less: Boolean,
        wait: Boolean
    }

    constructor(props){
        super(props)

        this.passFun = this.passFun.bind(this)
    }


    passFun(s){

        let date = new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        this.setState({
            title: s.title,
            date: `${date} ${time}`,
            additional: s.additional,
            important: s.important,
            less: s.less,
            wait: s.wait

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