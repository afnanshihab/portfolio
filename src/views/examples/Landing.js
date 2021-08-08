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
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                    <p className="lead text-black" style={{
                        textShadow: "2px 0px  #fff",fontWeight:'500',
                        color:'black'
                      }}>
                        " Our research shows learning how to program has an impact in improving sequencing skills. If you get better at sequencing, it has a measurable positive effect on reading comprehension. A parent can have their kid engage in coding with the knowledge that a lot of kids won’t become programmers, but there is this broad-based benefit.
— Marina Umaschi Bers. Tufts University"
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0 mb-3">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info  rounded-circle mb-4">
                            <i className="ni ni-bus-front-12" />
                          </div>
                          <h6 className="text-info  text-uppercase">
                            Horned-Animals
                          </h6>
                          <p className="description mt-3">
                          application that displays images and information of horned animals. This application will allow you to filter the images by number of horns and chose your favorite image..
                          </p>
                          <div>
                            <Badge color="info " pill className="mr-1">
                              Html5
                            </Badge>
                            <Badge color="info " pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="info " pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button outline
                            className="mt-4"
                            color="info "
                            href="https://afnanshihab.github.io/horned-animals/"
                            target="_blank"

                          >
                            URL of project

                          </Button>
                        </CardBody>
                      </Card>
                      </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 mb-3">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info  rounded-circle mb-4">
                            <i className="fa fa-picture-o" />
                          </div>
                          <h6 className="text-info text-uppercase">
                          Cookie Stand
                          </h6>
                          <p className="description mt-3">
                        Website for adding new branches of cookies stand ..
                          </p>
                          <div>
                            <Badge color="info " pill className="mr-1">
                              Html5
                            </Badge>
                            <Badge color="info " pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="info " pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                         
                          <Button outline
                            className="mt-4"
                            color="info"
                            href="https://afnanshihab.github.io/cookie-stand/"
                            target="_blank"
                          >
                            URL of project

                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                            <i className="fa fa-coffee" />
                          </div>
                          <h6 className="text-info text-uppercase">
                            Edu-Portal
                          </h6>
                          <p className="description mt-3">
                          edu portal is a global online learning platform that offers anyone,
          anywhere, access to online courses and also that he is the maker of the course if he finds that he has the
          ability to teach Therefore
                          </p>
                          <div>
                            <Badge color="info" pill className="mr-1">
                              Html5
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button outline
                            className="mt-4"
                            color="info"
                            href="https://github.com/gladiators-team/edu-Portal"
                            target="_blank"
                          >
                            github Repo link
                          </Button>
                        </CardBody>
                      </Card>
                      </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
                   
          </section>
          
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
