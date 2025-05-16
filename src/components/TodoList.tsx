import React from "react";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import Todos from "./Todos";






function TodoList() {

    const { todos } = useSelector((state: RootState) => state.todo)
    return (
        <div>
            {
                todos && todos.map((todo) =>
                    <Todos key={todo.id} todoProps={todo} />
                )
            }
        </div>
    )
}

export default TodoList