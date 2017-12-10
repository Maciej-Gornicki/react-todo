import React, {Component} from 'react';
import TasksList from './TasksList';

class Container extends Component {

  constructor(props) {
    super(props);
    this.textChanged = this.textChanged.bind(this);
    this.searchChanged = this.searchChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      query: '',
      task: '',
      tasks: []
    };
  }

  textChanged(event) {
    this.setState({task: event.target.value});
  }

  searchChanged(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: ''
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search..." onChange={this.searchChanged} />

        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 value={this.state.task}
                 placeholder="Add task..."
                 onChange={this.textChanged}/>
          <input type="submit" value="Add"/>
        </form>

        <h2>My tasks</h2>
        <TasksList
          query={this.state.query}
          tasks={this.state.tasks}
        />

      </div>
    );
  }
}

export default Container