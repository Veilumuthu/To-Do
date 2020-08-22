import React from 'react';

const Task = (props) => {
    return (
        <div className="task">
            <p className="task__text">{props.taskText}</p>
            <button className="but but--link" onClick={(e) => {props.onDelete(props.taskText)}}>Remove</button>
        </div>
    )
}

export default Task;