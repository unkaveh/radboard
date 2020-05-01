import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline>
            <Router>
                <App />
            </Router>
        </CssBaseline>
    </ThemeProvider>, 
    document.getElementById('root'))
;