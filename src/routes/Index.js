import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../components/home/Home";
import Books from "../components/books/Books";
import AddBook from "../components/books/AddBook";
import UpdateBook from "../components/books/UpdateBook";
import Layout from "../components/Layout";
import Error from "../components/common/Error";


export default function Index() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/show-books" element={<Books/>}/>
                    <Route path="/add-book" element ={<AddBook/>}/>
                    <Route path="/update-book" element={<UpdateBook/>}/>
                    <Route path="" element={<Error/>}/>
                </Routes>
            </Layout>

        </BrowserRouter>
    )
}