import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Debtors from './pages/Debtors';
import History from './pages/History';
import Home from './pages/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/debtors" component={Debtors} />
        <Route path="/history" component={History} />
      </Switch>
    </div>
  );
}

export default App;
