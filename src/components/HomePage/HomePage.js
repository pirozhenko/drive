import React, { Component } from 'react';
import FileItem from '../FileItem';
import Sort from'../Sort';
import './homePage.scss';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortType: ''
        }
    }
    setSort = (sortType) => {
        this.setState({ sortType })
    }
    render () {
        const drive = this.props.files.drive;
        const sortType = this.state.sortType;
        const arr = sortType ? drive.sort((a, b) => {
            if(a[sortType] < b[sortType]) { return -1; }
            if(a[sortType] > b[sortType]) { return 1; }
            return 0;
        }) : drive;
        return (
            <>
            <h1>Home</h1>
            <Sort sortType={sortType} setSort={this.setSort} />
            <section className="section">
                {arr.map((item,idx) => {
                    return <FileItem key={idx} {...item} />
                })}
            </section>
            </>
        );
    }
}

export default HomePage;