import React, { useState } from 'react'

export default function TodoList() {
    const [todoValue, setTodoValue] = useState('');
    const [task, setTask] = useState([]);

    const addToDo = () => {
        setTask([...task, todoValue]);
        setTodoValue('');
    }
    const deleteTask = (list) => {
        const deletedTasks = [...task];
        deletedTasks.splice(list, 1);
        setTask(deletedTasks);
    }
    const completeTask = (element) => {
    document.getElementsByClassName("todo-list-items")[element].style.textDecoration = "line-through";
    }        
   
    return (
        <div className="todo-list">
            <h2 style={{ margin: "30px 50px" }}>To-Do List Application</h2>
            <input className='todo-input'
                value={todoValue}
                placeholder='Enter your todo lists'
                onChange={e => setTodoValue(e.target.value)}
            />
            <button className='todo-button' onClick={addToDo}>AddTask</button>
            {task.map((list, index) => (<div className='todo-task-list' key={index}>
                <li className='todo-list-items'>{list}</li>
                <button className='delete-task' onClick={() => deleteTask(index)}>Delete</button>
                <button className="complete-task" onClick={() => completeTask(index)}>Complete</button>
            </div>
            ))}
        </div>
    );
}


