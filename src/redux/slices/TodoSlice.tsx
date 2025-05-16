import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { todoInitialState, TodoType } from '../../types/Types'


const initialState: todoInitialState = {
    todos: []
}



export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        createTodo: (state: todoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload]
        },
        removeTodoById: (state: todoInitialState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)]
        },
        editTodoById: (state: todoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos.map((todo: TodoType) => todo.id !== action.payload.id ? todo : action.payload)]
        }
    }
})

export const { createTodo, removeTodoById, editTodoById } = todoSlice.actions

export default todoSlice.reducer