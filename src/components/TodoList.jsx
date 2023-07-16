import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, deleteAll } from '../features/todo/todoSlice'

const TodoList = () => {
    const [task, SetTask] = useState("");
    const dispatch = useDispatch();

    const taskList = useSelector((state) => state.todo.value)
    console.log("🚀 ~ file: TodoList.jsx:11 ~ TodoList ~ taskList:", taskList)

    return (
        <>
            <div className='todo-list-wrapper'>
                <h1>Todo App</h1>
                <div className='todo-input-controls'>
                    <input type="text" onChange={(e) => { SetTask(e.target.value) }} />
                    <button onClick={() => dispatch(addTodo({
                        id:
                            taskList.length > 0 && typeof taskList[taskList.length - 1].id === 'number'
                                ? taskList[taskList.length - 1].id + 1
                                : 1,
                        //  taskList[taskList.length - 1].id + 1, 

                        task
                    }))} >Add</button>
                </div>
                <ul className='todo-list'>
                    {taskList.map((task) => <li key={task.id} > {task.task} <span onClick={() => { dispatch(deleteTodo({ id: task.id })) }}><img src="/images/trash.svg" alt="trash icon" /></span>  </li>
                    )
                    }

                </ul>
                <div className='todo-list-clear'>
                    <button onClick={() => { dispatch(deleteAll()) }}>Clear All</button>
                </div>
            </div >
        </>
    )
}

export default TodoList