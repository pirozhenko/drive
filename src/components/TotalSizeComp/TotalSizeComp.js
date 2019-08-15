import React from 'react';
import './totalSizeComp.scss';

const PLACE_ON_DRIVE = 1000000;

const TotalSizeComp = props => {
    const percent = props.sum / PLACE_ON_DRIVE * 100;
    
    return (
        <>
        <h3>Total Size in your account:</h3>
        <div className="totalSize">
            <div>{props.sum} Mb / {PLACE_ON_DRIVE} Mb</div>
            <div className="totalSizeRange">
                <span style={{width: `${percent}px`}}/>
            </div>
        </div>
        </>
    );
}

export default TotalSizeComp;