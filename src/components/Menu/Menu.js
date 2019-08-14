import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Menu.css';

const Menu = () => <nav className={classes.Nav}>
            <NavLink activeClassName={classes.Active} to="/files">Files</NavLink>
            <NavLink activeClassName={classes.Active} to="/">Photos</NavLink>
            <NavLink activeClassName={classes.Active} to="/sharing">Sharing</NavLink>
            <NavLink activeClassName={classes.Active} to="/links">Links</NavLink>
            <NavLink activeClassName={classes.Active} to="/events">Events</NavLink>
            <NavLink activeClassName={classes.Active} to="/get-started">Get started</NavLink>
        </nav>;

export default Menu;