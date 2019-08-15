import React from 'react';
import './fileItem.scss';

const FileItem = props => {
    const mBites = (props.size / 1000).toFixed(1).replace(/\./g, " ");
    return (
        <div className="fileItem">
            <figure>
                <img src={props.urlImg} alt=""/>
                <figcaption>{props.name}</figcaption>
            </figure>
            <span>{mBites} Mb</span>
        </div>
    )
}

export default FileItem;