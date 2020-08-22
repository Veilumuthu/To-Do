import React from 'react';

class AddTasks extends React.Component {
    state = {
        error : undefined
    }
    handleAddTasks = (e) => {
        e.preventDefault();
        const task = e.target.elements.task.value.trim();
        const error = this.props.handleAddTasks(task);
        this.setState(() => ({error}))
        if(!error) {
            e.target.elements.task.value = '';
        }
    }
    render() {
        return (
            <div>
            {this.state.error && <p className="add-tasks-error">{this.state.error}</p>}
                <form className="add-tasks" onSubmit={this.handleAddTasks}>
                    <input className="add-task__input" type="text" placeholder="Add Tasks" name="task" autoFocus />
                    <button className="butt">Add</button>
                </form>
            </div>
        )
    }
}
export default AddTasks;