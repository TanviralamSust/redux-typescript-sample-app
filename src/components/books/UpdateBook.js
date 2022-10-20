import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateBook} from "../../store/BooksSlice";

export default function UpdateBook() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState(location.state.book.name);
    const [author, setAuthor] = useState(location.state.book.author);
    const [id, setId] = useState(location.state.book.id)
    console.log(location.state)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBook({id, name, author}))
        navigate("/show-books", {replace:true})
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Updatebook</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}