import React from 'react';
import logo from '../../assets/img/svg/logo.svg';
import { Link } from 'react-router-dom';
import './logo.scss';

const Logo = () => <Link to="/" className="logo">
    <img src={logo} alt="logo" />
</Link>
export default Logo;