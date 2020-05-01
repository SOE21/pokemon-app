import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { Link } from 'react-router-dom';

class Selection extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <p className={classes.selection}>
                    Try
                    <Link to="/sets" style={{ textDecoration: 'none' }} > sets </Link>
                    or
                    <Link to="/cards/ex14-28" style={{ textDecoration: 'none' }} > cards/ex14-28</Link>
                </p>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Selection);