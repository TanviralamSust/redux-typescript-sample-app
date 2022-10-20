import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addBooks} from "../../store/BooksSlice";
import {v4 as uuidv4} from "uuid";

export default function AddBook() {

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {
            id: uuidv4(),
            name,
            author
        }
        dispatch(addBooks(book));
        navigate("/show-books", {replace: true})
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Form book add</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}