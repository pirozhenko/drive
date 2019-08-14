import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout';
import Menu from '../Menu';
import Files from '../Files';
import Sharing from '../Sharing';
import Links from '../Links';
import Events from '../Events';
import GetStarted from '../GetStarted';
import Home from '../../containers/Home';
import Logo from '../Logo';
import LeftSidebar from '../LeftSidebar';
import TotalSizes from '../../containers/TotalSizes';


const App = () => <>
  <LeftSidebar>
    <Logo />
    <Menu />
    <TotalSizes />
  </LeftSidebar>
  <Layout>
    <Switch>
      <Route path="/files" component={Files} />
      <Route path="/sharing" component={Sharing} />
      <Route path="/links" component={Links} />
      <Route path="/events" component={Events} />
      <Route path="/get-started" component={GetStarted} />

      <Route path="/" exact component={Home} />
    </Switch>
  </Layout>
</>

export default App;