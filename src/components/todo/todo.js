import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDeleteTodo, getInsertTodo, getUpdateTodo } from '../../redux/todo/todo.action';
import Todolist from './todolist';

const Todo = () => {
    const [value, setvalue] = useState({
        name:'',
    });
    let todo = useSelector(state => state.todoList.data);
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setvalue({...value, name:e.target.value})
    } 
    const handleSubmit = (e) => {
        let data = {
            id: Math.floor(Math.random() * 10000),
            fullName:value.name,
        }
        dispatch(getInsertTodo(data))
        setvalue({name:''})
    }

    const handleEdit =(id) => {
        console.log('edit')
        dispatch(getUpdateTodo(id))   
    }
    const handleDelete =(id) => {
        dispatch(getDeleteTodo(id))
    }

   
    return (
        <div>

            <div>
                <input type="text" value={value.name}  onChange={handleChange} />
                <button onClick={handleSubmit}>Add</button>
            </div>           
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todo.map((data,index) => (
                            <Todolist data={data} key={index} index={index} handleDelete={handleDelete} handleEdit={handleEdit}/>    
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Todo
