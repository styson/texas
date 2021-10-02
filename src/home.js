import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import About from './pages/about';
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

function Gamedays() {
  return (
    <Container fluid className="mt-3">
      <Tab.Container id="gameday-tabs" defaultActiveKey="austin">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="austin">Austin</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="dallas">Dallas</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="houston">Houston</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sanantonio">San Antonio</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="austin">
                <h3>Austin</h3>
              </Tab.Pane>
              <Tab.Pane eventKey="dallas">
                <h3>Dallas</h3>
              </Tab.Pane>
              <Tab.Pane eventKey="houston">
                <h3>Houston</h3>
              </Tab.Pane>
              <Tab.Pane eventKey="sanantonio">
                <h3>San Antonio</h3>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
