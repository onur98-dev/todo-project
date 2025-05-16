import { useDispatch } from "react-redux"
import React, { useState } from "react"
import type { TodoType } from "../types/Types";
import { createTodo } from "../redux/slices/TodoSlice";


function TodoCreate() {


    const dispatch = useDispatch()
    const [newTodo, setNewTodo] = useState<string>("")
    const handleCreateTodo = () => {
        if (newTodo.trim().length === 0) {
            alert("Please add a Todo first")
            return;
        }
        const payload: TodoType = {
            id: Math.floor(Math.random() * 9999),
            content: newTodo
        }
        dispatch(createTodo(payload)),
            setNewTodo("")
    }
    return (
        <div>
            <div className='todo-create'>

                <input
                    className="todo-create-input"
                    placeholder="Add a todo..."
                    value={newTodo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNewTodo(e.target.value) }} />
                <button onClick={handleCreateTodo} type="submit" className="todo-create-btn"> Create </button>

            </div>

        </div>
    )

}




export default TodoCreate