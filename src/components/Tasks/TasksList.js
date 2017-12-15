import React, {Component} from 'react';
import Task from './Task';

class TasksList extends Component {


    render() {
        let serchedTasks = this.props.tasks.filter(
            (task) => {
                return task.indexOf(this.props.query) !== -1;
            }
        );
        return (
            <div className="List">
                {serchedTasks.map((task, index) => {
                    return (
                        <Task
                            key={index}
                            label={task}
                            index={index}
                            delTask={
                                () => {this.props.delTask(index)}
                            }
                        />
                    )
                })}

            </div>
        )
    }
}
export default TasksList;
