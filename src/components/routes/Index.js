import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import Books from "../books/Books";
import AddBook from "../books/AddBook";
import UpdateBook from "../books/UpdateBook";
import Layout from "../Layout";
import Error from "../common/Error";


export default function Index() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/books" element={<Books/>}/>
                    <Route path="/add-book" element={<AddBook/>}/>
                    <Route path="/update-book" element={<UpdateBook/>}/>
                    <Route path="" element={<Error/>}/>
                </Routes>
            </Layout>

        </BrowserRouter>
    )
}