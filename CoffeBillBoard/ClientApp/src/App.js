import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { AddCoffe } from './components/AddCoffe';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/AddCoffe' component={AddCoffe} />
        <Route path='/fetchdata' component={FetchData} />
      </Layout>
    );
  }
}
