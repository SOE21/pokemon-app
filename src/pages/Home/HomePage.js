import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Search from '../../components/Content/Search';
import Title from './../../components/Content/Title/index';
import Selection from './../../components/Content/Selection/index';

class HomePage extends Component {

    render() {
        return (
            <React.Fragment>
                <Title />
                <Search val="" />
                <Selection />
            </React.Fragment>
        );
    }
}



export default withStyles(styles)(HomePage);