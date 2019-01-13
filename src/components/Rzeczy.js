import React, { Component } from 'react';
import Rzecz from "./Rzecz";
import PropTypes from "prop-types";

class Rzeczy extends Component {

  render() {
    return this.props.rzeczyDoZrobienia.map((rzecz) => (
     <Rzecz key={ rzecz.id } rzecz={ rzecz } zaznacz={ this.props.zaznacz} delTodo = { this.props.delTodo } />
    ));
  }
}

Rzeczy.propTypes = {
 rzeczyDoZrobienia: PropTypes.array.isRequired
}

export default Rzeczy;