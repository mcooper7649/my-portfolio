import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';
import NewNav from './components/NewNav';
import './App.css';
import FooterPage from './components/FooterPage';

import { ThemeProvider } from './contexts/ThemeContext';

require('dotenv').config();

class App extends Component {
  render() {
    window.dataLayer.push({
      event: 'pageview',
    });
    return (
      <BrowserRouter>
        <meta charSet="utf-8" data-react-helmet="true" />
        {/* <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" /> */}
        <meta
          name="title"
          content="My Code Dojo"
          property="og:title"
          data-react-helmet="true"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" data-react-helmet="true" />
        <meta
          name="image"
          property="og:image"
          content="https://i.ibb.co/7xhcJf0/Screen-Shot-2021-07-11-at-12-08-43-PM.png"
          data-react-helmet="true"
        />
        <meta
          name="url"
          property="og:url"
          content="https://www.mycodedojo.com"
        />
        <meta
          name="description"
          property="og:description"
          content="My Code Dojo | Welcome to Michael Cooper's Code Dojo! A Place Where This Ninja Can Practice His Craft Stealthily And Show Off Past Accomplishments."
          data-react-helmet="true"
        />
        <meta name="author" property="og:author" content="Michael Cooper" />
        <meta
          name="publish_date"
          property="og:publish_date"
          content="2021-07-11T00:00:00-0600"
        />
        <script
          src="https://kit.fontawesome.com/8cc1b75eb3.js"
          crossOrigin="anonymous"
        ></script>
        <title>My Code Dojo | by Michael Cooper</title>
        <ThemeProvider>
          <NewNav />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={About} path="/about" />
            <Route component={SinglePost} path="/post/:slug" />
            <Route component={Post} path="/post" />
            <Route component={Project} path="/project" />
          </Switch>
          <FooterPage />
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
