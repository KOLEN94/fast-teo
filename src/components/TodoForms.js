import React, { Component } from 'react';

class TodoForms extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    });
  }
  handleInput(e) {
    const { value, name} = e.target;
    this.setState({
      [name]: value
    })
    console.log(this.state);
  }
  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body" >
          <div className="form-group">
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInput}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInput}
              placeholder="Responsible"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInput}
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <select
              name="priority"
              className="form-control"
              value={this.state.priority}
              onChange={this.handleInput}
            >
            <option>low</option>
            <option>medium</option>
            <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    )
  }
}

export default TodoForms;