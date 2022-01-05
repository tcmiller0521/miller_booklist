import { createSlice } from "@reduxjs/toolkit";
import BookInfo from '../components/bookinfo.jsx'

let content = []
let storedContent = JSON.parse(localStorage.getItem('storedContent'))
storedContent ? content = storedContent: content = BookInfo

export const contentSlice = createSlice ({
    name: 'content',
    initialState: {
        content: content
    },
    reducers: {
        addContent: (state, action) => {
            console.log(action.payload)
        state.content.push(action.payload)
        localStorage.setItem('storedContent', JSON.stringify(state.content));
        },
    }
})

export const { addContent } = contentSlice.actions;
export const selectContent = (state) => state.content.content;
export default contentSlice.reducer;