import { configureStore } from "@reduxjs/toolkit";
import EditorReducer from "./editorSlice";

export const store = configureStore({
    reducer: {
        editor: EditorReducer,
    }
});