/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container , CardBody, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import profile from "assets/img/theme/team-5-800x800.jpg";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={profile}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Afnan Shihab{" "}
                      <span className="font-weight-light">, 28</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Zarqaa, Jordan
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Elictrical Engineer - Construction and consultant field Graduated from   Al- Balqa' Applied University
                       
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Software Developer/
                      ASAC - LUTC
                    </div>
                  </div>
                  <section style={{ borderTop: "1px #ddd" }}>
                  <Container fluid>
                    <Row>
                      <Col className="mb-3">
                        <div className='card-profile-stats d-flex justify-content-center' s>
                          <img width="100%"
                            align='center'
                            src='https://github-readme-stats.vercel.app/api?username=afnanshihab&show_icons=true' alt='.
                          .' />
                        </div>

                      </Col>
                      
                    </Row>
                  </Container>
                </section>
                  <section className="section pb-0 bg-gradient-info">
            <Container fluid>
              <Row>
                <Col>
                  <Card className="shadow shadow-lg--hover mt-5 mb-6" >
                    <CardBody>
                      <div className=" px-3">
                        <div>
                          <h4 className="display-1 text-info">About Me </h4>
                          <p className=" text-black">
                           I am electrical engineer graduated in 2015 but now especially in this year 2021 I chose to began with programing to get my goal in this field I had a small background in the programming in general .. So Im here to improve myself and I will keep trying to became a professional developer  .
                          </p>

                        </div>
                        <div className="pl-4">

                          <h5 className="title text-info">
                            My Skills
                          </h5>
                          <p>
                            <ul>
                              <li> C++</li>
                              <li> JavaScript</li>
                              <li> Html</li>
                              <li> CSS</li>
                              <li> ReactJs</li>
                              <li> Bootstrap</li>
                            </ul>
                          </p>
                          <Button
                            className="info text-info"
                            href="https://docs.google.com/document/d/1-vmjTSIl2IZ_KNysKxymjo0K8F4pB6Sgak5Tv6Ea7Xk/edit?usp=sharing"
                            target="_blank"
                          >
                            Resume
                          </Button>
                        </div>
                      </div>
                    </CardBody>
                  </Card> </Col>
                
              </Row>


            </Container>
            </section>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
