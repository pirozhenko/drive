import React from 'react';
import classes from './Layout.scss';

const layout = (props) => <div className={classes.layout}>
    {props.children}
</div>

export default layout;