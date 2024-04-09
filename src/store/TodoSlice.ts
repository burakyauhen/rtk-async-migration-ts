import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type TodoType = {
    id: string,
    title: string,
    completed: boolean,
}

type TodosState = {
    value: Array<TodoType>,
    loading: boolean,
    error: null | undefined | string, 
}

const initialState: TodosState = {
    value: [],
    loading: false,
    error: null,
}

export const fetchTodos = createAsyncThunk<TodoType[], undefined, {rejectValue: string}>(
    'todos/fetchTodos',
    async function(_, {rejectWithValue}) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?');

        if (!response.ok) {
            return rejectWithValue('Server error');
        }

        const data = await response.json();

        return data;
    }
);

export const addNewTodo = createAsyncThunk<TodoType, string, {rejectValue: string}>( 
    'todos/addNewTodo',
    async function(text, {rejectWithValue}) {
        const todo = {
            title: text,
            userId: 1,
            complete: false,
        };

        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo),
        });

        if (!response.ok) {
            return rejectWithValue('Can\'t add task. Server error.');
        }

        return (await response.json()) as TodoType;
    }
);

export const toggleStatus = createAsyncThunk<TodoType, string, {rejectValue: string, state: {todos: TodosState}}>(
    'todos/toggleStatus',
    async function(id, {rejectWithValue, getState}) {
        const toggledTodo = getState().todos.value.find(todo => todo.id === id);

        if (toggledTodo) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    completed: !toggledTodo.completed,
                }),
            })
    
            if (!response.ok) {
                return rejectWithValue('Can\'t toggle todo. Server error.');
            }
            return (await response.json()) as TodoType
        }
        return rejectWithValue('No such todo');
    }
);

export const deleteTodo = createAsyncThunk<string, string, {rejectValue: string}>(
    'todos/deleteTodo',
    async function(id, {rejectWithValue}) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            rejectWithValue('Can\'t delete todo. Server error.')
        }

        // return (await response.json()) 
        return id;
    }
);

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.value = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addNewTodo.pending, (state) => {
                state.error = null;
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.value.push(action.payload)
            })
            .addCase(addNewTodo.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(toggleStatus.pending, (state) => {
                state.error = null;
            }) 
            .addCase(toggleStatus.fulfilled, (state, action) => {
                const toggledTodo = state.value.find(todo => todo.id === action.payload.id);
                if (toggledTodo) {
                    toggledTodo.completed = !toggledTodo.completed;
                }
            })
            .addCase(toggleStatus.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(deleteTodo.pending, (state) => {
                state.error = null;
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.value = state.value.filter(todo => todo.id !== action.payload);
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.error = action.payload;
            })
    }
});

export default todoSlice.reducer;
