import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, BlogForm, BlogList } from '../components';
import "./App.css"


const App = () => {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={BlogList}/>          
            <Route path="/blog-form/:id?" component={BlogForm}/>
        </Switch>
      </Router>
    </div>
  )
}
export default App;
