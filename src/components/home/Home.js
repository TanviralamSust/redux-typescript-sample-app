import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPosts} from "../../store/postSlice";



export default function Home() {

    const {posts, error, loading} = useSelector((state)=> state.posts)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchPosts())
    },[])
    return(
        <div>
            {loading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {posts && posts.map((post)=> (
                <div key={post.id}>
                    <span>{post.title}</span>
                    <span>{post.body}</span>
                </div>
            ))}
        </div>
    )
}