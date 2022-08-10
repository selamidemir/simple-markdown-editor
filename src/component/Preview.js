import React from 'react';
import { useSelector } from 'react-redux';
import { selectHtmlContent } from '../redux/editorSlice';
import convert from 'react-from-dom';

function Preview() {
    const content = useSelector(selectHtmlContent);

    return (
        <div className='preview'>
            {convert(`<div>${content}</div>`)}
        </div>
    )
}

export default Preview;