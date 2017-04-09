import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';

// layout :
import Layout from './layout/layout';

// color :
//import colors from './colors';

// Material UI setup
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './index.css'; //TODO delete this file

// Change colors for material-ui
/*const muiTheme = getMuiTheme({
  fontFamily: 'Arial',
  palette: {
    primary1Color: colors.ISEP_PRIMARY,
    primary2Color: colors.ISEP_SECONDARY,
    primary3Color: colors.ISEP_TERTIARY,
  },
});*/

const App = () => (
  <MuiThemeProvider /*muiTheme={muiTheme}*/>
    <Router>
      <Route path="/" component={Layout} />
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
