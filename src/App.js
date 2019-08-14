import React from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Menu from './components/Menu';

import Files from './components/Files';
import Sharing from './components/Sharing';
import Links from './components/Links';
import Events from './components/Events';
import GetStarted from './components/GetStarted';
import Home from './components/Home';


const App = () => <Layout className="App">
  <img src={logo} className="App-logo" alt="logo" />
  <Menu />
  <Switch>
    <Route path="/files" component={Files} />
    <Route path="/sharing" component={Sharing} />
    <Route path="/links" component={Links} />
    <Route path="/events" component={Events} />
    <Route path="/get-started" component={GetStarted} />

    <Route path="/" exact component={Home} />
  </Switch>
</Layout>

export default App;
