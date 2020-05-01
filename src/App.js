import React, { Component } from 'react';
import Menu from './components/Menu/index';
import Content from './components/Content/index';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './common/theme/index';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <ThemeProvider theme={theme}>
                        <Menu />
                        <br></br>
                        <Content />
                    </ThemeProvider>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;

