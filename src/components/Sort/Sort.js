import React from 'react';
import classNames from 'classnames';
import './sort.scss';

const SORT_TYPE = [
    'modified',
    'size',
    'name'
];

const Sort = props => {
    const { sortType } = props;
    return (
        <>
        <ul className="sort">
            {SORT_TYPE.map((item, idx) => {
                return <li 
                    key={idx}
                    onClick={() => props.setSort(item)}
                    className={classNames('sortItem', {
                        'active': item === sortType
                    })}
                >{item}</li>
            })}
        </ul>
        </>
    );
}

export default Sort;