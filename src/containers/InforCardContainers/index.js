import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { connect } from 'react-redux';
import { actFetchInforCardRequest } from '../../actions';
import InforCardPage from './../../components/InforCardPage/index';
import InforCard from '../../components/Content/InforCard';

class index extends Component {

    componentDidMount() {
        const { fetchInforCard, match } = this.props;
        fetchInforCard(match.params.id);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            window.location.reload();
        }
    }
    

    render() {
        let { card, match } = this.props;
        return (
            <React.Fragment>
                <InforCardPage id={match.params.id} >
                    {this.showInforCard(card)}
                </InforCardPage>
            </React.Fragment>
        );
    }

    showInforCard = (card) => {
        let result = null;
        result = <InforCard card={card} />
        return result;
    }

}

const mapStateToProps = (state) => {
    return {
        card: state.item
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInforCard: params => {
            dispatch(actFetchInforCardRequest(params))
        }
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(index));