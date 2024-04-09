import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

type TodoType = {
    id: string,
    title: string,
    completed: boolean,
}

interface TodosState {
    value: Array<TodoType>
}

const initialState: TodosState = {
    value: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded(state, action: PayloadAction<string>) {
            state.value.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            });
        },
        todoDeleted(state, action: PayloadAction<string>) {
            state.value = state.value.filter(todo => todo.id !== action.payload);
        },
        todoToggled(state, action: PayloadAction<string>) {
            const toggledTodo = state.value.find(todo => todo.id === action.payload);
            if (toggledTodo) {
                toggledTodo.completed = !toggledTodo.completed;
            }
        },
    }
});

export const { todoAdded, todoDeleted, todoToggled } = todoSlice.actions;
export default todoSlice.reducer;
