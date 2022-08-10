import React from 'react';
import { useSelector } from 'react-redux';
import { selectHtmlContent } from '../redux/editorSlice';

function Preview() {
    const content = useSelector(selectHtmlContent);

    return (
        <div>
            <pre>{content}</pre>
        </div>
    )
}

export default Preview;