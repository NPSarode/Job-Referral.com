import { Link } from "react-router-dom";
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

import avatar from "../../assets/avatar.png";
import callIcon from "../../assets/icons/phone-volume-solid.svg";
import emailIcon from "../../assets/icons/envelope-solid.svg";
import Html from "../../assets/icons/html5Icon.svg";
import Docker from "../../assets/icons/dockerIcon.svg";

import Divider from "../../common/Divider";

const Profile = () => {
  return (
    <React.Fragment>
      <Container fluid className="profilePage">
        <Row className="m-0 mt-2 p-3">
          <Col lg={3} className="leftProfile">
            <Row>
              <Col lg={12} className="coverImage">
                <img
                  src="https://th.bing.com/th/id/OIP.UkzU2Gn5e3dwp48gT7Ro7AHaHa?rs=1&pid=ImgDetMain"
                  alt="Cover"
                />
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="leftProfile">
                <Card className="bg-dark">
                  <img className="avatarImage" src={avatar} alt="Profile" />
                  <CardBody>
                    <h5 className="text-center">Nikhil Sarode</h5>
                    <h5 className="text-center text-muted">
                      Fronend Developer
                    </h5>
                    <h6 className="text-center text-muted">
                      Male / 23 Year's Old / 3+ Year Experience
                    </h6>
                  </CardBody>

                  <CardBody>
                    <div className="connectDetail">
                      <img src={callIcon} alt="" className="rounded" />
                      <h5 className="text-muted mx-5">+91 9854763280</h5>
                    </div>
                  </CardBody>
                  <CardBody>
                    <div className="connectDetail">
                      <img src={emailIcon} alt="" className="rounded" />
                      <h5 className="text-muted mx-5">example@gmail.com</h5>
                    </div>
                  </CardBody>
                  <CardBody className="userExperience">
                    <CardTitle className="mb-5">Experience</CardTitle>
                    <div>
                      <ul className="verti-timeline list-unstyled">
                        {[
                          {
                            id: 1,
                            iconClass: "bx bx-server",
                            designation: "Backend",
                            timeDuration: "2022-23",
                          },
                          {
                            id: 2,
                            iconClass: "bx bx-code",
                            designation: "Front End",
                            timeDuration: "2021-22",
                          },
                        ].map((experience, i) => (
                          <li
                            className={`d-flex text-success justify-content-start align-items-start mt-3 + ${
                              experience.id === 1
                                ? "event-list active"
                                : "event-list"
                            }`}
                            key={"_exp_" + i}
                          >
                            <div className="event-timeline-dot">
                              <i
                                className={
                                  experience.id === 1
                                    ? "bx bx-right-arrow-circle bx-fade-right"
                                    : "bx bx-right-arrow-circle"
                                }
                              />
                            </div>
                            <div className="d-flex mx-5">
                              <div className="me-3">
                                <i
                                  className={
                                    "bx " +
                                    experience.iconClass +
                                    " h4 text-success"
                                  }
                                />
                              </div>
                              <div className="flex-grow-1">
                                <div>
                                  <h5 className="font-size-15">
                                    <Link to={""} className="text-dark mx-2">
                                      {experience.designation}
                                    </Link>
                                  </h5>
                                  <span className="text-info">
                                    {experience.timeDuration}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col lg={9} className="rigthProfile">
            <Card>
              <CardBody className="d-flex">
                <div className="col-lg-9">
                  <div className="h1 mb-0">Profile</div>
                </div>
                {/* <div className="d-flex justify-content-end mx-3 flex-wrap gap-2 col-lg-3">
                  <Button className="btn btn-dark waves-effect waves-light bg-opacity-50">
                    Edit Profile
                  </Button>
                </div> */}
              </CardBody>
              <CardBody>
                <CardTitle className="d-flex justify-content-start align-items-center">
                  <div className="h5 text-info">General</div>
                  <Divider width="87%" />
                </CardTitle>

                <Row>
                  <Col lg={4}>
                    <h5>First Name</h5>
                    <div className="text-muted">Nikhil</div>
                  </Col>
                  <Col lg={4}>
                    <h5>Middle Name</h5>
                    <div className="text-muted">Prashant</div>
                  </Col>
                  <Col lg={4}>
                    <h5>Last Name</h5>
                    <div className="text-muted">Sarode</div>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col lg={4}>
                    <h5>Phone Number</h5>
                    <div className="text-muted">+91 9854631287</div>
                  </Col>
                  <Col lg={4}>
                    <h5>Whatsapp</h5>
                    <div className="text-muted">+91 9854631287</div>
                  </Col>
                  <Col lg={4}>
                    <h5>Email</h5>
                    <div className="text-muted">example@gmail.com</div>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <CardTitle className="d-flex justify-content-start align-items-center">
                  <div className="h5 text-info">About Me</div>
                  <Divider width="87%" />
                </CardTitle>
                <div className="aboutInfo">
                  <div className="col-lg-12">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis architecto blanditiis obcaecati minima at
                      expedita, rerum cupiditate ducimus repudiandae quaerat
                      amet?
                    </p>
                  </div>
                </div>
              </CardBody>
              <CardBody>
                <CardTitle className="d-flex justify-content-start align-items-center">
                  <div className="h5 text-info">Skills</div>
                  <Divider width="87%" />
                </CardTitle>
                <div className="skillInfo">
                  <Row>
                    {[
                      { domain: "Web Development", image: Html },
                      { domain: "DevOps", image: Docker },
                    ].map((data, key) => {
                      return (
                        <Col lg={4} key={key}>
                          <Card style={{ minHeight: "10vh" }}>
                            <CardBody className="d-flex justify-content-start align-items-center">
                              <img
                                src={data.image}
                                alt=""
                                className="techIcon mx-1"
                              />
                            </CardBody>
                          </Card>
                          <h6 className="text-center mt-1 text-muted">
                            {data.domain}
                          </h6>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
