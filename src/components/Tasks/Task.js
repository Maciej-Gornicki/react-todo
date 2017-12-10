import React, { Component } from 'react';

const style = {
  checked: {
    textDecoration: 'line-through'
  },
  unChecked: {
    color: 'green'
  }
}

class Task extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      checked: false
    }
  }

  // renderLabel() {
  //   if (this.state.checked) {
  //     return (
  //       <span style={{textDecoration: 'line-through'}}>
  //         {this.props.label}
  //       </span>
  //     );
  //   }
  //   return this.props.label;
  // }

  handleChange(event) {
    this.setState({ checked: event.target.checked });
  }

  render() {
    return(
      <div>
        <input type="checkbox" onChange={this.handleChange} />
        <span
          style={this.state.checked ? style.checked : style.unChecked}
        >
          {this.props.label}
        </span>
      </div>
    );
  }
}

export default Task;
