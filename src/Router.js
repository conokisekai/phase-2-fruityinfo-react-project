// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FruitList from './components/FruitList/FruitList';
import FruitDetails from './components/FruitDetails/FruitDetails';
import NewFruitForm from './components/NewFruitForm/NewFruitForm';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={FruitList} />
        <Route path="/fruit/:id" component={FruitDetails} />
        <Route path="/contribute" component={NewFruitForm} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
