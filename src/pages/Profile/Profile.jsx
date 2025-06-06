import React from "react";
import {
  Button,
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

import KnobChart from "../../common/knob";
import Divider from "../../common/Divider";
 
const Profile = () => {
  return (
    <React.Fragment>
      <Container fluid >
        <Row className="m-0 mt-2 p-3">
          <Col lg={3}>
            <Card className="border-0">
              <CardBody>
                <div className="profileImage">
                  <img src={avatar} className="d-flex mx-auto" alt="avatar" />
                </div>
              </CardBody>
              <CardBody>
                <h5 className="text-center">Nikhil Sarode</h5>
                <h5 className="text-center text-muted">Fronend Developer</h5>
                <h6 className="text-center text-muted">Male /  23 Year's Old / 3+ Year Experience</h6>
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
              <CardBody className="d-flex">
                {
                  [{title:"FrontEnd", value:80},{title:"BackEnd", value:40},{title:"Database", value:20}].map((data, key) => {
                    return <Col lg={4} key={key} className="p-0">
                    <KnobChart
                      value={data.value}
                      fgColor="#404079"
                      thickness={0.3}
                      readOnly={true}
                      height={160}
                      width={120}
                    />
                    <h6 className="mx-3">{data.title}</h6>
                  </Col>
                  })
                }
              </CardBody>
            </Card>
          </Col>
          <Col lg={9}>
            <Card>
              <CardBody className="d-flex">
                <div className="col-lg-9">
                  <div className="h1 mb-0">Profile</div>
                </div>
                <div className="d-flex justify-content-end mx-3 flex-wrap gap-2 col-lg-3">
                  <Button className="btn btn-dark waves-effect waves-light bg-opacity-50">
                    Edit Profile
                  </Button>
                </div>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum que
                      laudantium, totam rem aperiam, eaque ipsa quae ab illo
                      inventore veritatis et quasi architecto beatae vitae dicta
                      su
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
