import React, { Component } from 'react';
import { connect } from 'react-redux';

import TotalSizeComp from '../../components/TotalSizeComp';
import * as actions from '../../store/actions/index';

class TotalSizes extends Component {

    componentDidMount () {
        this.props.onInitFiles();
    }

    render () {
        const drive = this.props.files.drive;
        const sum = drive.length > 0 && drive.map(item => +item.size).reduce((a, b) => a + b, 0);
        return (
            <TotalSizeComp sum={sum}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TotalSizes);