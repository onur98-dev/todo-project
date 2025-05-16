export interface todoInitialState {
    todos: TodoType[]
}

export interface TodoType {
    id: number
    content: string
}