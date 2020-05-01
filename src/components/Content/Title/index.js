import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';

class Title extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <p className={classes.title}>Pokémon TCG Developers</p>
                <p className={classes.underTitle}>JOIN THE COMMUNITY OF DEVELOPERS BUILDING WITH THE POKÉMON TCG API</p>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Title);