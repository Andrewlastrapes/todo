import React, { Component } from "react";
import SingleTodo from "./SingleTodo";
import axios from "axios"

class TodoList extends Component {

    state = {
        todos: []
    }

    constructor(props){
        super(props);
        
        this.apiCall = this.apiCall.bind(this);
        
    }

    apiCall(){
        let payload = {
            email: this.props.user
        }
        axios.post("http://localhost:3006/post/get-user-tasks", payload)
        .then(data => {
            console.log(data)
            this.setState({
                todos: data["data"]["data"]
            });
        });
    }

    componentDidMount(){
        this.apiCall()
    }
    

    componentDidUpdate(){
       this.apiCall()
    }

    render(){
        const { todos } = this.state
        return(
            todos.map((t)  => 
                <SingleTodo title={t.title} date={t.date} additional={t.additionalNotes} priority={t.priority} key={t._id}></SingleTodo>
            )
            
        )
    }
}

export default TodoList