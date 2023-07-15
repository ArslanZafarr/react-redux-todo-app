import React from 'react'

const TodoList = () => {
    return (
        <>
            <div className='todo-list-wrapper'>
                <h1>Todo App</h1>
                <div className='todo-input-controls'>
                    <input type="text" />
                    <button>Add</button>
                </div>
                <ul className='todo-list'>
                    <li>item 1  <span><img src="/images/trash.svg" alt="trash icon" /></span></li>
                </ul>
                <div className='todo-list-clear'>
                    <button>Clear All</button>
                </div>
            </div>
        </>
    )
}

export default TodoList