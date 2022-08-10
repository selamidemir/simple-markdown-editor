import { createSlice } from "@reduxjs/toolkit";
import { convetToHtml } from "../assets/convertToHtml";

export const editorSlice = createSlice({
    name: 'editor',
    initialState: {
        content: '',
        htmlContent: '',
    },
    reducers: {
        addContent: (state, action) => {
            state.content = action.payload;
            state.htmlContent = convetToHtml(action.payload);
        }
    }
});

export const selectContent = state => state.editor.content;
export const selectHtmlContent = state => state.editor.htmlContent;

export const { addContent } = editorSlice.actions;
export default editorSlice.reducer;