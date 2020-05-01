import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

//Redux
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import history from './components/shared/history';
import {defaultStore} from './components/shared/Redux/defaultStore';

//Local Components
import Navbar from './components/shared/Navbar';

import App from './components/App';

ReactDOM.render(
    <Provider store={defaultStore}>
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Router history={history}>
                    <Navbar />
                    <App />
                </Router>
            </CssBaseline>
        </ThemeProvider>
    </Provider>, 
    document.getElementById('root'))
;