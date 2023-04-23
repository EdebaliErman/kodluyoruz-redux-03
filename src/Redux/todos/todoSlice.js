import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [
            {
                id: "1",
                color: "#fffb79",
                title: "note 1",
            },
            {
                id: "2",
                color: "#50e2f4",
                title: "note 2",
            }, {
                id: "3",
                color: "#46f70a",
                title: "note 3",
            }
        ],
        filtered: "",
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload)
            localStorage.setItem("action", action)
        },
        searchTodo: (state, action) => {
            state.filtered = action.payload
        }
    }
})

export const selectData = (state) => state.todos.items
export const selectSearch = (state) => state.todos.filtered

export const { addTodo, searchTodo } = todoSlice.actions

export default todoSlice.reducer