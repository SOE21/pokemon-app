import React, { Component } from 'react';
import routes from './../../routes';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import styles from './styles';

class Content extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.content}>
                {this.showContent(routes)}
            </div>
        );
    }

    showContent = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            })
        }
        return <Switch>{result}</Switch>;
    }
}

export default withStyles(styles)(Content);