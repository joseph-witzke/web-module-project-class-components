import React from 'react'
import Todo from './Todo';

const TodoList = props => {
    
    const handleClick = () => {
        props.clearCompleted();
    }

    return (
        <div className="todo-list">
            {props.tasks.map(item => (
               <Todo key={item.id} toggleItem={props.toggleItem} item={item} /> 
            ))}
            <button onClick={handleClick} className="clear-btn">
                Clear Todos
            </button>
        </div>
    );
};

export default TodoList;


