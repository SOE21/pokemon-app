import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link, Redirect } from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.val,
            entered: false
        }
    }

    render() {
        const { classes } = this.props;
        const { value, entered } = this.state;
        console.log("render");
        if (entered === true) {
            return <Redirect to={`/${value}`} />;
        }
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col" />
                    <div className="col-8">
                        <form className={classes.formSearch} onKeyPress={(e) => this.handleKeyPress(e)} >
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">https://api.pokemontcg.io/v1/</span>
                                </div>
                                <input
                                    type="text"
                                    className={`form-control ${classes.input}`}
                                    placeholder="Username"
                                    onChange={(e) => this.onChange(e)}
                                    value={value}
                                ></input>
                                {/* <TextField
                                    variant="outlined"
                                    placeholder="cards?name=charizard"
                                    InputProps={{ classes: { input: classes['input'] } }}
                                    onChange={(e) => this.onChange(e)}
                                    value={value}
                                /> */}
                                <div className="input-group-append">
                                    <Link to={`/${value}`} className="btn btn-primary" type="button" >
                                        <SearchIcon className={classes.icon} />
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col" />
                </div>
            </React.Fragment>
        );
    }

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            this.setState({ entered: true });
        }
    }

    onChange = (e) => {
        e.preventDefault();
        let target = e.target;
        this.setState({ value: target.value })
    }
}

export default withStyles(styles)(Search);