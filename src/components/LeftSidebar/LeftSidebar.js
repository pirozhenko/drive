import React from 'react';
import './leftSidebar.scss';

const leftSidebar = (props) => <div className="leftSidebar">
    {props.children}
</div>

export default leftSidebar;