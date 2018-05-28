import React, { Component } from 'react';
import logo from '../logo.svg';
import TodoForm from './TodoForm';

import { todos } from '../todos.json';

class Tasks extends Component {
  constructor(){
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    if(window.confirm('Are you sure you want to delete it?'))
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
  }

  handleAddTodo(todo) {
      this.setState({
        todos: [...this.state.todos, todo]
      })
  }

  render(){
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                { todo.priority }
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    });

    return(
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3 text-center">
            <img src={logo} className="App-logo" alt="logo" />
            <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
          </div>
          <div className="col-md-9">
            <div className="row">
              {todos}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Tasks;
