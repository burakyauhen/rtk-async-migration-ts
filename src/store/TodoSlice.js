import { createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [],
    },
    reducers: {
        todoAdded(state, action) {
            state.value.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            });
        },
        todoDeleted(state, action) {
            state.value = state.value.filter(todo => todo.id !== action.payload);
        },
        todoToggled(state, action) {
            const toggledTodo = state.value.find(todo => todo.id === action.payload);
            toggledTodo.completed = !toggledTodo.completed;
        },
    }
});

export const { todoAdded, todoDeleted, todoToggled } = todoSlice.actions;
export default todoSlice.reducer;
