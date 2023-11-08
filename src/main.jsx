import React from 'react';
import FruitList from './App/Components/FruitList/FruitList';
import FruitDetails from './App/Components/FruitDetails/FruitDetails';
import NewFruitForm from './App/Components/NewFruitForm/NewFruitForm';
import Header from './App/Components/Header/Header';
import Footer from './App/Components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';

const Main = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={FruitList} />
        <Route path="/fruit/:id" component={FruitDetails} />
        <Route path="/add" component={NewFruitForm} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Main;
