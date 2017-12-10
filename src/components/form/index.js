import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleTitle = this.handleFormTitle.bind(this);
    this.handleContent = this.handleFormContent.bind(this);
    this.handleSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      title: '',
      content: 'dsfjhfkjsdhjhfsjkhfkjsf',
      category: 'books'
    };
  }

  handleFormSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  handleFormTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleFormContent(event) {
    this.setState({
      content: event.target.value
    });
  }

  render() {
    return(
      <div>
        <h3>
          {this.state.title ? 'PRMOCJA! ' + this.state.title : 'Nie ma niczego'}
        </h3>
        <p>{this.state.content}</p>
        <p>Kategoria: {this.state.category}</p>
        <form onSubmit={this.handleSubmit}>
          <div><input type="text" onChange={this.handleTitle} /></div>
          <div><textarea onChange={this.handleContent}/></div>
          <select>
            <option>Opcja 1</option>
            <option>Opcja 2</option>
            <option>Opcja 3</option>
          </select>
          <div>
            <input type="submit" value="Wyślij mnie! proszę 😓"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
