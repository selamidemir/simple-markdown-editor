import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContent } from '../redux/editorSlice';

function Editor() {
    const [content, setContent] = useState();
    const dispatch = useDispatch();
    const handleContentChange = (e) => {
        e.preventDefault();
        setContent(e.target.value);
        dispatch(addContent(e.target.value))
    }

    return (
        <div className='editor'>
            <textarea onChange={(e) => handleContentChange(e)} value={content}></textarea>
        </div>
    )
}

export default Editor;