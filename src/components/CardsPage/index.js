import React, { Component } from 'react';
import Search from '../Content/Search/index';

class CardsPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Search val={`cards${this.props.search}`} />
                <br />
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default CardsPage;