import React, { Component } from 'react';
import Search from './../Content/Search/index';

class SetsPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Search val="sets" />
                <br />
                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SetsPage;