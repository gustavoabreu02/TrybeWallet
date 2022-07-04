import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  <div>
    <Switch>
      <Route path="/" component={ Login } />
    </Switch>
  </div>;
}

export default App;
