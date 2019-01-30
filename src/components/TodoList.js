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
        axios.get("http://localhost:3006/post")
        .then(data => {
            this.setState({
                todos: data["data"]["data"]
            });
        });
        console.log(this.state)
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