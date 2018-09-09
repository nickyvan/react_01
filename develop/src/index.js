import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login';
import SingleArticle from './components/SingleArticle';
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Route exact path="/" component={Welcome} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/article/create" component={CreateArticle} />
      <Route path="/article/:slug" component={SingleArticle} />
      <Route path="/login" component={Login} />
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
