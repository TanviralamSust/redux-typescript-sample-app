import booksReducer from "./BooksSlice";

const {configureStore} = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: {
        booksReducer: booksReducer
    }
});

export default store;