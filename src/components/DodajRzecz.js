import React, { Component } from 'react'

export class DodajRzecz extends Component {
 state = {
  title: ""
 }

 onChange = (e) => this.setState({ title: e.target.value});
 onSubmit = (e) => {
  e.preventDefault();
  this.props.dodajRzecz(this.state.title);
  this.setState({ title: "" });
 }


  render() {
    return (
      <form onSubmit={ this.onSubmit } >
       <input 
        type="text" 
        name="title"
        className="addTodo"
        placeholder="Dodaj do listy"
        value={this.state.title}
        onChange={this.onChange}
        />
       <input 
        type="submit" 
        className="btnAdd" 
        value="Dodaj"
       />
      </form>
    )
  }
}

export default DodajRzecz;
