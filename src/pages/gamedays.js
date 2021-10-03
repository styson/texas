import gamedays from '../data/gamedays.js';
import hosts from '../data/hosts.js'; 
import '../styles/gamedays.css';
import { Button, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import Moment from 'react-moment';

const Gamedays = () => {
  return (
    <>
      <Container fluid className="mt-3">
        <Tab.Container id="gameday-tabs" defaultActiveKey="date0">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {gamedays.map((gd, i) => {
                  return (
                    <Nav.Item>
                      <Nav.Link eventKey={`date${i}`}>{gd.city} - <Moment format="MMM Do">{gd.date}</Moment></Nav.Link>
                    </Nav.Item>
                  )
                })}
                <Nav.Item>
                  <Nav.Link eventKey="information">Gameday Information</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                {gamedays.map((gd, i) => {
                  const host = hosts.find(h => h.id === gd.host);
                  return (
                    <Tab.Pane eventKey={`date${i}`}>
                      <h3>
                        <Moment format="MMM Do">{gd.date}</Moment> - {gd.city} Game Day
                      </h3>
                      <p>at <a href={`mailto:${host.email}`}>{host.name}'s</a> place (email him for directions).</p>
                      <p>{gd.note}</p>

                      <h4>From {gd.start} until {gd.end}</h4>
                      <div id={gd.tag} class="attendees"></div>

                      <Button className="mt-3" variant="outline-primary">Join Us?</Button>
                    </Tab.Pane>
                  )
                })}

                <Tab.Pane eventKey="information">
                  <h3>Regular Club Events</h3>
                  <p>Texas ASL is excited about the regularly scheduled club events that have been established.</p>

                  <p>Austin meetings happen at least once a month, with Matt Shostak, Allen King, Jeff Toreki, and Rick Reinesch hosting on the first (occasionally second) Saturday of each month. The Game Day Site rotates between the four host locations.</p>

                  <p>Meetings in the Dallas/Fort Worth area happen on the second Saturday each month at Ed Beekman's house.</p>

                  <p>Houston meetings usually happen on the first Saturday of each month at Jason Cameron's house.</p>

                  <p>San Antonio meetings happen on the fourth Saturday of each month at Scott Bell's house.</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>    
    </>
  )
}

export default Gamedays;