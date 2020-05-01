import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import styles from './styles';

class InforCard extends Component {
    render() {
        const { classes, card } = this.props;
        return (
            <React.Fragment>
                <Grid container spacing={3} >
                    <Grid item xs={5} >
                        <img src={card.imageUrlHiRes} alt="" className={classes.img} />
                    </Grid>
                    <Grid item xs={7} >
                        <div className={classes.expand}>
                                <span className={classes.name}>{card.name}</span> 
                                <span className={classes.subtype}> Pokémon - {card.subtype}</span>
                                <span className={classes.hp}>HP {card.hp}</span>
                        </div>
                        <br/><br/>
                        <hr />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(InforCard);