import React, { Component } from 'react';
import { connect } from 'react-redux';

import TotalSizeComp from '../../components/TotalSizeComp';
import * as actions from '../../store/actions/index';

class TotalSizes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSize: null
        }
    }

    componentDidMount () {
        this.props.onInitFiles();

        const drive = this.props.files.drive;
        // this.setState({
        //     totalSize
        // });
        console.log(drive);
    }

    render () {
        return (
            <TotalSizeComp {...this.props}/>
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