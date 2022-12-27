import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from '../SignUp';
import Password from '../Password';
import SuccessPage from '../SuccessPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/signup/createaccount" component={SignUp} />
      <Route path="/signup/createaccount/password" component={Password} />
      <Route path="/success" component={SuccessPage} />
    </Switch>
  </Router>
);

export default App;
