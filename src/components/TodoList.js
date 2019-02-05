import React, { Component } from "react";
import SingleTodo from "./SingleTodo";
import axios from "axios"


class TodoList extends Component {

    state = {
        todos: []
    }

    constructor(props){
        super(props);
        this.getTasks = this.getTasks.bind(this);
        this.deleteTasks = this.deleteTasks.bind(this);
    }

    getTasks(){
        let payload = {
            email: this.props.user
        }
        axios.post("http://localhost:3006/post/get-user-tasks", payload)
        .then(data => {
            this.setState({
                todos: data["data"]["data"]
            });
        });
    }

    deleteTasks(task){
        
        let payload = {
            email: this.props.user,
            task: task
        }
      
        axios.post("http://localhost:3006/post/delete-task", payload)
        .then(data => {
            console.log(data)
        })
       
    }

    componentDidMount(){
        this.getTasks()
    }
    

    componentDidUpdate(){
       this.getTasks()
    }

    render(){
        const { todos } = this.state
        return(
            todos.map((t)  => 
                
                <SingleTodo title={t.title} date={t.date} additional={t.additionalNotes} priority={t.priority} key={t._id} usableKey={t._id} deleteTask={this.deleteTasks}></SingleTodo>
            )
           
            
        )
    }
}

export default TodoList