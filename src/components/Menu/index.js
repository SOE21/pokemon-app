import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, withStyles, Avatar, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from './styles';
import logo from './../../logo.jpg';

class Menu extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <AppBar position="static" className={classes.bar}>
                    <Toolbar>
                        <Avatar src={logo} alt="logo" />
                        <Typography variant="h6" className={classes.title} >
                            Pokemon TCG Developers
                        </Typography>
                        <Link to="/" style={{ textDecoration: "none" }}><Tab label="Home" className={classes.tab} /></Link>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Menu);