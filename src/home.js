import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import About from './pages/about';
import Gamedays from './pages/gamedays';
import Navigation from './components/navigation';
import React from 'react';

// This site has 3 pages, all of which are rendered dynamically in the browser (not server rendered).
// Although the page does not ever refresh, notice how React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history, making sure things like the back button and bookmarks work properly.

export default function Core() {
  return (
    <Router>
      <div>
        <Navigation />
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gamedays">
            <Gamedays />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages" in your app.
function Home() {
  return (
    <Container fluid>
      <Row>
        <h2>Home</h2>
      </Row>
    </Container>    
  );
}
