import React from 'react';
import Header from './Header';
import AddTasks from './AddTasks';
import Tasks from './Tasks';
import '../style/style.css';

class Todo extends React.Component {
    state = {
        tasks : []
    }

    handleAddTasks = (task) => {
        if(!task) {
            return 'Enter valid task'
        }else if(this.state.tasks.indexOf(task) > -1){
            return 'This task aldready exits'
        } 
        this.setState((prevState) => ({tasks: prevState.tasks.concat(task)}))
    }
 
    onDelete = (taskToRemove) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => {
                return taskToRemove !== task;
            })
        }))
    }

    onRemove = () => {
        this.setState(() => ({ tasks:[] }))
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('tasks')
            const tasks = JSON.parse(json)
            if(tasks){
                this.setState(() => ({ tasks }))
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.tasks.length !== this.state.tasks.length){
            const json = JSON.stringify(this.state.tasks);
            localStorage.setItem('tasks', json);
        }
    }
    render() {
        const title = 'To-Do';
        const subtitle = 'Make your day as per plan'
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <div className="widget">
                        <Tasks tasks={this.state.tasks} onRemove={this.onRemove} onDelete={this.onDelete} />
                        <AddTasks handleAddTasks={this.handleAddTasks}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;