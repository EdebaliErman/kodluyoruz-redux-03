import { todoSlice } from "./todos/todoSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: { todos: todoSlice.reducer }
})