import React, { Component } from 'react';
import Search from './../Content/Search/index';

class InforCardPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Search val={`cards/${this.props.id}`} />
                <br />
                {this.props.children}
            </React.Fragment>
        );
    }

}

export default InforCardPage;