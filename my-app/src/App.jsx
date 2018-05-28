import React, { Component } from 'react';//Importamos React y un Componente

import './App.css';//css del propio componente

//data
import { todos } from './todos.json';

//subcomponets
import Main from './components/Main';
import Home from './components/Home';
import Navbar from './components/Navbar';


class App extends Component {
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

  render() {
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

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <Navbar title="Tareas" todos={this.state.todos.length}></Navbar>

        <div>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
