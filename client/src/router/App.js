import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, InputBox, AddBlog, BlogList } from '../components/CMSside';
import "./App.css"


const App = () => {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={InputBox}/>          
            <Route path="/add-blog" component={AddBlog}/>
            <Route path="/blog-list" component={BlogList}/>
        </Switch>
      </Router>
    </div>
  )
}
export default App;
