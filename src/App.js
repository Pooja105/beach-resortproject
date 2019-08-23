import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import NavBar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/rooms" component={Rooms} exact  />
      <Route path="/rooms/:slug" component={SingleRoom} exact  />
      <Route component={Error} />
     </Switch>
    </React.Fragment>
  );
}

export default App;
