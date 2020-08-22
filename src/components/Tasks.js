import React from 'react';
import Task from './Task';

const Tasks = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Tasks</h3>
                <button className = "but but--link" onClick={props.onRemove}>Remove All</button> 
            </div> 
                {props.tasks.length === 0 && <p className="widget__message">Please Add a Task</p>}
                {
                    props.tasks.map((task) => <Task key={task} taskText={task} onDelete={props.onDelete}/>)
                }            
        </div>
    )
}

export default Tasks;