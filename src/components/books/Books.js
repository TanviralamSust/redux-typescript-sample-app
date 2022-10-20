import {useDispatch, useSelector} from "react-redux";
import {deleteBook} from "../../store/BooksSlice";
import {Link} from "react-router-dom";

export default function Books() {

    const books = useSelector((state)=> state.booksReducer.books);
    const reducer = useDispatch();

    const onDelete = (id) => {
        reducer(deleteBook(id));
    }
    return(
        <div>
            {books.map((book)=> (
                <div key={book.id}>
                    <span>{book.name}</span>
                    <span>{book.author}</span>
                    <Link to="/update-book" state={{book}}>
                        <button>Update</button>
                    </Link>

                    <button onClick={()=> onDelete(book.id)}>Delete</button>
                </div>

            ))}
        </div>
    )
}