import React, { Component } from 'react';
import PropTypes from "prop-types";

export class Rzecz extends Component {
 getStyle = () => {
  if (this.props.rzecz.skonczone) {
   return {
    textDecoration: 'line-through',
    color: 'gray'
   } 
   } else {
    return {
     textDecoration: 'none',
     color: 'black'
    }
   }
 }

  render() {
   const {id, title} = this.props.rzecz;
    return (
      <div style={ this.getStyle() } className="todo">
        <p>
          <input type="checkbox" onChange={ this.props.zaznacz.bind(this, id) } className="czekbox"/>
          { title } 
          <button onClick={ this.props.delTodo.bind(this, id) } className="btnDel">Usuń</button>
        </p>
      </div>
    )
  }
}



Rzecz.propTypes = {
 rzecz: PropTypes.object.isRequired
}



export default Rzecz
