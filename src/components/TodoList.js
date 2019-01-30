import React, { Component } from "react";
import SingleTodo from "./SingleTodo"

class TodoList extends Component {

    constructor(props){
        super(props);
        console.log(this.props.task)
    }

    componentDidMount(){
        // recieves data from backend to map
    }

    render(){
        const { title, date, additional, important, less, wait } = this.props.data;
        return(
            this.props.data.map((t, i)  => 
                <SingleTodo title={title} date={date} additional={additional[i]} important={important} less={less} wait={wait} key={i}></SingleTodo>
            )
        )
    }
}

export default TodoList