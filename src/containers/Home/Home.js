import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomePage from '../../components/HomePage';
import * as actions from '../../store/actions/index';

class Common extends Component {

    componentDidMount () {
        this.props.onInitFiles();
    }

    render () {
        return (
            <HomePage {...this.props}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        files: state.drive,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitFiles: () => dispatch(actions.initFiles()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Common);