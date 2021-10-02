import '../styles/about.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Container fluid>
        <Row className="pt-3">
          <h2 class="mb-3">About Texas ASL</h2>
          <Col sm={4}>
            <Card>
              <div class="card-body">
                <h5 class="card-title">Why do you call yourselves a club?</h5>
                <p class="card-text">We're not really a club in any formal sense. We don't have dues, membership cards, etc. We're just a bunch of guys who hang together because of a common interest: ASL. But it's easier to say and write "club" than launch into a long explanation every time we want to refer to ourselves collectively.</p>
              </div>
            </Card>
            <Card>
              <div class="card-body">
                <h5 class="card-title">Are there dues required for membership?</h5>
                <p class="card-text">No.</p>
              </div>
            </Card>
            <Card>
              <div class="card-body">
                <h5 class="card-title">What if I'm just starting out?</h5>
                <p class="card-text">That's no problem. Club members have a wide variety of experience levels, from beginner to expert; from ASL Starter Kit to the most esoteric parts of ASL. So whether you are playing the ASL Starter Kits or diving into the full-blown rules, we are happy to teach new players how to play.</p>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <div class="card-body">
                <h5 class="card-title">How often do you guys meet?</h5>
                <p class="card-text">There's almost always someone in the club playing ASL on any given weekend. We meet as a group for ASL gaming the first Saturday of every month. We rotate the location among three or four places. Check the main page for details on the next game day. Naturally individuals schedule their own games at other times as well.</p>
              </div>
            </Card>
            <Card>
              <div class="card-body">
                <h5 class="card-title">Where do you meet?</h5>
                <p class="card-text">See the above for our monthly game days.</p>
              </div>
            </Card>
            <Card>
              <div class="card-body">
                <h5 class="card-title">Do you have club competitions?</h5>
                <p class="card-text">Sort of. We have a very cool ongoing "game tracker" which tracks wins and losses, scenarios and sides played, head-to-head playings, links to submitted AARs, and a lot of other neat info. It's not serious, it's not cutthroat, and it allows folks to dive into the playing activities going on in the club.</p>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <div class="card-body">
                <h5 class="card-title">Are there any local tournaments?</h5>
                <p class="card-text">Yup. We've run a local tournament in Austin every year since 1992. It is held in June on the Thursday through Sunday the weekend after Father's Day. See the <a href="http://www.texas-asl.com/tourney/tourney.html" target="_blank" rel="noreferrer">Texas Team ASL Tournament Webpage</a> for all the details.</p>
              </div>
            </Card>
            <Card>
              <div class="card-body">
                <h5 class="card-title">Do you use the IIFT?</h5>
                <p class="card-text">No. We generally try to avoid using any house rules or variants.</p>
              </div>
            </Card>
            <Card>
              <div class="card-body">
                <h5 class="card-title">What is Jeff Toreki doing right now?</h5>
                <p class="card-text">Whatever it is, it's probably way cool and chicks are digging him.</p>
              </div>
            </Card>
            <Card>
              <div class="card-body">
                <h5 class="card-title">How do I  find out about activities?</h5>
                <div class="classictemplate template card-text mt-4">
                  <div id="groupsio_embed_signup">
                    <form action="https://groups.io/g/texas-asl/signup?u=903779850608040392" method="post" id="groupsio-embedded-subscribe-form" name="groupsio-embedded-subscribe-form" target="_blank">
                        <div id="groupsio_embed_signup_scroll">
                          <label for="email" id="templateformtitle">Subscribe to our email list!</label>
                          <input type="email" value="" name="email" class="email" id="email" placeholder="email address" required="" />
                          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                          <div class="bot-form" aria-hidden="true">
                            <input type="text" name="b_903779850608040392" tabindex="-1" value="" />
                          </div>
                          <div id="templatearchives"></div>
                          <input type="submit" value="Subscribe" name="subscribe" id="groupsio-embedded-subscribe" class="button" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>    
    </>
  )
}

export default About;