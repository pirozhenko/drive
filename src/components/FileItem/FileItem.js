import React from 'react';
import './fileItem.scss';

const FileItem = props => {
    return (
        <div className="fileItem">
            <figure>
                <img src={props.urlImg} alt=""/>
                <figcaption>{props.name}</figcaption>
            </figure>
            <span>{props.size}</span>
        </div>
    )
}

export default FileItem;