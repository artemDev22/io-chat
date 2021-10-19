import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import ROUTES from "./constants/routes";
import store from "./store"
import Login from "./pages/login";
import Chat from "./pages/chat";
import PrivateRoute from "./components/PrivateRoute";
import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";

const App = () => {
    return (
        <div className="App">
        <Provider store={store}>
            <Container style={{ maxWidth: '512px' }}>
                <h1 className='mt-2 text-center'>React Chat App</h1>
                <Router>
                    <Switch>
                        <Route path={ROUTES.root} exact render={() => <Redirect to="/login" />} />
                        <Route path={ROUTES.login} exact component={Login} />
                        <Route path={ROUTES.chat} exact component={Chat} />
                        <PrivateRoute exact render={() => <Redirect to="/login" />} />
                    </Switch>
                </Router>
            </Container>
        </Provider>
    </div>
    )
}

const GlobalStyles = createGlobalStyle`
.card-header {
  padding: 0.25em 0.5em;
}
.card-body {
  padding: 0.25em 0.5em;
}
.card-text {
  margin: 0;
}`

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyles />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

