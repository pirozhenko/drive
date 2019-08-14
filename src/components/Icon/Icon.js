import React from 'react';
import './logo.scss';

const Icon = props => {
    const icon = require(`../../assets/img/svg/icons/${props.type}.svg`);
    return (
        <img src={icon} alt="icon" />
    );
};
export default Icon;