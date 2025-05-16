import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { MdAddComment } from "react-icons/md";
import type { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { editTodoById, removeTodoById } from '../redux/slices/TodoSlice';
import { GiCheckMark } from "react-icons/gi";
import { useState } from 'react'

interface TodoProps {
    todoProps: TodoType
}





function Todos({ todoProps }: TodoProps) {


    const dispatch = useDispatch()
    const [status, setStatus] = useState<boolean>(false)
    const [newTodo, setNewTodo] = useState<string>("")
    const { id, content } = todoProps

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(todoProps.id))
    }
    const handleEditedTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(editTodoById(payload))
        setStatus(false);
    }
    return (
        <div>
            <div className='todo-list'>
                <div className='todos'>
                    {status ? <input type='text' className='todo-create-input'
                        value={newTodo}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                    /> : <div>{content}</div>}
                </div>
                <div className="icons">
                    <MdDeleteForever className="delete-icon" onClick={handleRemoveTodo} />
                    {status ? <GiCheckMark
                        onClick={handleEditedTodo}
                        className='add-icon'
                    /> : <MdAddComment
                        onClick={() => setStatus(true)}
                        className="add-icon" />}
                </div>
            </div>
        </div>
    )
}

export default Todos