import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { Link } from 'react-router-dom';

class Cards extends Component {
    render() {
        const { classes, item } = this.props;
        return (
            <React.Fragment>
                <div className={`col-sm-3 ${classes.col}`}>
                    <Link to={`/cards/${item.id}`} >
                        <img src={item.imageUrl} alt="" className={classes.img} />
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Cards);