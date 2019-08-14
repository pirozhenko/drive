import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from '../../components/Home';
import * as actions from '../../store/actions/index';

class Books extends Component {

    componentDidMount () {
        this.props.onInitFiles();
    }

    render () {
        console.log(this.props);
        return (
            <Home {...this.props}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.booksArray,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitFiles: () => dispatch(actions.initFiles()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);