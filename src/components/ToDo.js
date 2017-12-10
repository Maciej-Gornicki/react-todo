import React, { Component } from 'react';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        'Nauczyć się do testu',
        'Zjeść śniadanie',
        'Umyć okna'
      ]
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        tasks: [
          'Ala', 'ma', 'kota'
        ]
      });
    }, 5000);
  }

  render() {
    return(
      <div>
        <h2>My To Do List</h2>
        <ol>
          {this.state.tasks.map((mojElement, index) => (
            <li key={index}>{mojElement}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ToDo;