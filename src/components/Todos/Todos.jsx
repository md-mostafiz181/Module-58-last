import React from 'react';
import "./Todos.css"
import { useLoaderData } from 'react-router-dom';
import Todo from '../Todo/Todo';


const Todos = () => {
    const todos =useLoaderData();
    console.log(todos)
    return (
        <div>
            <h1>All todos here : {todos.length}</h1>

            <div className='todos'>
                {
                    todos.map(todo => <Todo
                    key={todo.id}
                    todo={todo}
                    ></Todo>)
                }
            </div>
            
        </div>
    );
};

export default Todos;