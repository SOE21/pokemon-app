import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { connect } from 'react-redux';
import SetsPage from './../../components/SetsPage/index';
import { actFetchSetsRequest } from '../../actions';
import Sets from '../../components/Content/Sets';

class index extends Component {

    componentDidMount() {
        const { fetchSets } = this.props;
        fetchSets('sets');
    }

    render() {
        let { sets } = this.props;
        return (
            <React.Fragment>
                <SetsPage>
                    {this.showSets(sets)}
                </SetsPage>
            </React.Fragment>
        );
    }

    showSets = (sets) => {
        let result = null;
        if (Array.isArray(sets) === true) {
            result = sets.map((item, index) => {
                return <Sets key={index} item={item} />
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        sets: state.item
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSets: params => {
            dispatch(actFetchSetsRequest(params))
        }
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(index));