import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon';
import './menu.scss';

const MENU_LINK = [
    {
        to: "/files",
        title: "Files",
        icon: "file"
    },
    {
        to: "/",
        title: "Photos",
        icon: "image"
    },
    {
        to: "/sharing",
        title: "Sharing",
        icon: "sharing"
    },
    {
        to: "/links",
        title: "Link",
        icon: "link",
    },
    {
        to: "/events",
        title: "Events",
        icon: "time"
    },
    {
        to: "/get-started",
        title: "Get started",
        icon: "getStart"
    }
]



const Menu = () => <nav className="nav">
    {MENU_LINK.map((item, idx) => <NavLink activeClassName="active" to={item.to} key={idx}>
        <Icon type={item.icon}/>
        {item.title}
    </NavLink>)}
</nav>;

export default Menu;