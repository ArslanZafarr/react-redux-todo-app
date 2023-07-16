import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: "todo",
    initialState: { value: [] },
    reducers: {
        addTodo(state, action) {
            state.value.push(action.payload)
        },
        deleteTodo(state, action) {
            state.value.splice(action.payload, 1)

        },
        deleteAll(state, action) {
            state.value = []
        },

    }

})


console.log(todoSlice.actions)

export default todoSlice.reducer

export const { addTodo, deleteTodo, deleteAll } = todoSlice.actions