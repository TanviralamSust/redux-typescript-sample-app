const {createSlice} = require("@reduxjs/toolkit");
const {v4 : uuidv4} = require("uuid")

const initialBooks = {
    books: [
        {id: uuidv4(), name: "Harry potter", author: "J.k. Rolling"},
        {id: uuidv4(), name: "Sherlock Homes", author: "Sir Author Coanan Doal"}
    ]
}

export const booksSlice = createSlice({
    name:"books",
    initialState: initialBooks,
    reducers : {
        showBooks: (state) => state,
        addBooks: (state, action) => {
            state.books.push(action.payload);
        },
        deleteBook: (state, action) => {
            const selectedBookID = action.payload
            state.books = state.books.filter(book => selectedBookID !== book.id)
        },
        updateBook: (state, action) => {
            const {id, name, author} = action.payload;
            const isBookExist = state.books.filter(book=>book.id === id)
            if(isBookExist) {
             isBookExist[0].name = name;
             isBookExist[0].author = author;
            }
        }
    }
})

export const {showBooks, addBooks, deleteBook, updateBook} = booksSlice.actions;
export default booksSlice.reducer;