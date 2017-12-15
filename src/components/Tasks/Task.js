import React, {Component} from 'react';
import Trash from 'material-ui-icons/DeleteForever';


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
            checked: false,
        }
    }

    handleChange(event) {
        this.setState({
            checked: event.target.checked
        });
    }

    render() {
        return (
            <div className='taskDiv'>
              <input type = "checkbox" onChange = {this.handleChange}/>
              <span style = {this.state.checked ? style.checked : style.unChecked}> {this.props.label} </span>
              <Trash className='trash' onClick = {(event) => {
                  this.props.delTask(this.props.index);
                  event.stopPropagation();
              }}/>
            </div>
        )
    }
}

export default Task;
