import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import FavData from './pages/FavData';
import Navbar from './pages/Navbar';

import Container from '@material-ui/core/Container';

const App = () => {
  return (
    <Router>
     <Container maxWidth="md">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/fav" exact component={FavData} />
      </Switch>
     </Container>
    </Router>
  )
}

export default App
