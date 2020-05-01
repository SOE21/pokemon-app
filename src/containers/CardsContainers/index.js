import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { connect } from 'react-redux';
import { actFetchCardsRequest } from '../../actions';
import Cards from '../../components/Content/Cards';
import CardsPage from '../../components/CardsPage/index';

class index extends Component {

    componentDidMount() {
        const { fetchCards, location } = this.props;
        if (location.search) fetchCards(`cards${location.search}`);
        else fetchCards('cards');
        console.log("cdm");
        
    }


    render() {
        let { cards, location } = this.props;
        console.log("render");
        
        return (
            <React.Fragment>
                <CardsPage search={location.search}>
                    {this.showCards(cards)}
                </CardsPage>
            </React.Fragment>
        );
    }

    showCards = (cards) => {
        let result = null;
        if (Array.isArray(cards) === true) {
            result = cards.map((item, index) => {
                return <Cards key={index} item={item} />
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.item
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCards: params => {
            dispatch(actFetchCardsRequest(params))
        }
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(index));