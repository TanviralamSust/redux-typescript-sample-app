const {createSlice, createAsyncThunk} = require("@reduxjs/toolkit");
import axios from "axios"
export const fetchPosts = createAsyncThunk("post/fetchPosts",
    async ()=> {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return res.data
    }
    )
const postSlice = createSlice({
    name: "post",
    initialState: {
        post:[],
        loading:false,
        error: null,
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchPosts.pending, (state)=> {
            state.loading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action)=> {
            state.loading = false;
            state.post = action.payload;
            state.error = null;
        });
        builder.addCase(fetchPosts.rejected, (state, action)=> {
            state.loading = false;
            state.post = [];
            state.error = action.error.message;
        })
    }
})

export default postSlice.reducer;