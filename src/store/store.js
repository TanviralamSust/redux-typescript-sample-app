import booksReducer from "./BooksSlice";
import postReducer from "./postSlice";


const {configureStore} = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: {
        booksReducer: booksReducer,
        posts: postReducer
    },
});

export default store;