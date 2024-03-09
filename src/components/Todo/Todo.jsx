import React from 'react';
import "./Todo.css"
import { useNavigate } from 'react-router-dom';

const Todo = ({todo}) => {

    const {id,title}=todo;

    const navigate=useNavigate()

    const handleToShowTodoDetails=()=>{
        navigate(`/todos/${id}`)

    }
    return (
        <div className='todo'>
            
            <h3>Id: {id}</h3>
            <p>Title : {title}</p>
            <button onClick={handleToShowTodoDetails} className='btn-show'>Show More</button>
            
        </div>
    );
};

export default Todo;