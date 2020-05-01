import React, { Component } from 'react';
import { withStyles, Card, CardActionArea, CardMedia, CardContent, Avatar } from '@material-ui/core';
import styles from './styles';
import { Link } from 'react-router-dom';

class Sets extends Component {
    render() {
        const { classes, item } = this.props;
        var link = "cards?setCode="+item.code;
        return (
            <React.Fragment>
                <div className={`col ${classes.col}`}>
                    <Link to={link} style={{textDecoration: 'none'}} >
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    title="Contemplative Reptile"
                                >
                                    <img src={item.logoUrl} alt="" className={classes.img} />
                                </CardMedia>
                                <CardContent>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <Avatar alt="" src={item.symbolUrl} />
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <h5 className={classes.name} >
                                                    {item.name}
                                                </h5>
                                            </div>
                                            <div className="row">
                                                <p className={classes.name} >
                                                    Released {item.releaseDate}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {item.standardLegal ?
                                        <ul><li className={classes.name}>StandardLegal</li></ul>
                                        : ""
                                    }
                                    <br />
                                    {item.expandedLegal ?
                                        <ul><li className={classes.name}>ExpandedLegal</li></ul>
                                        : ""
                                    }
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Sets);