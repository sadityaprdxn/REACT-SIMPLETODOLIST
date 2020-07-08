import React, { Component } from 'react';
import Li from './Linode';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            todoList: []
        }
    }

    enterValue = (e) => {
        const value = e.target.value;
        this.setState((prevState) => ({
            todoList: prevState.todoList,
            value: value
        }));
    }

    deleteItem = (index) => {
        this.setState((prevState) => {
            var updatedArray = prevState.todoList.filter((element , i)=>{
                return i !== index;
            })

            return({
                value: prevState.value,
                todoList: updatedArray
            })
        });
    }

    addTodos = (e) => {
        debugger;
        e.preventDefault();
        if (this.state.value !== '') {
            this.setState((prevState) => ({
                    todoList: [...prevState.todoList, prevState.value],
                    value: ""
            }))
        }
    }

    render() {
        return (
            <section className="todo">
                <div className="wrapper">
                    <form>
                        <div className="form-group">
                            <h2>add the task you want to complete</h2>
                            <input id="task-field" placeholder="ENTER THE TODOS HERE" value={this.state.value} onChange={this.enterValue} />
                        </div>
                        <div className="form-controls">
                            <button type="submit" id="submit-task" onClick={this.addTodos}>add</button>
                        </div>
                    </form>
                    <ul className={this.state.todoList.length > 0 ? 'active' : ''}>

                        {this.state.todoList.map((iterator, index) => {
                            return (
                                <Li
                                    content={iterator}
                                    key={index}
                                    deleteItem={this.deleteItem}
                                    uniqueId = {index}
                                />
                            )
                        })}
                    </ul>
                </div>
            </section>
        );
    }

}

export default Todo;
