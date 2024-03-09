import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const TodosDetails = () => {

    const todo =useLoaderData();

    const navigate= useNavigate()

    const handleTodosBack=()=>{
        navigate(-1)

    }
    return (
        <div>
            <h1>Todos details shows here:</h1>
            <h4>{todo.id}</h4>
            <h5>{todo.title}</h5>
            <button onClick={handleTodosBack}>Back</button>
            
        </div>
    );
};

export default TodosDetails;