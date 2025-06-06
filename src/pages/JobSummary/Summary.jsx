import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { useFormik } from "formik";
import Divider from "../../common/Divider";
import {
  addJob as onAddJob,
  getJobSummary as onGetJobSummary,
} from "../../store/actions";

const Summary = () => {
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.jobDetailsReducer);

  const [modal, setModal] = useState(false);
  const [listItems, setListItems] = useState([]);

  const searchHandler = (item) => {
    setListItems(
      details.filter((data) => data.name.toLowerCase().includes(item.toLowerCase()))
    );
  };

  const validation = useFormik({
    initialValues: {
      name: "",
      post: "",
      last_date: new Date(Date.now()),
      description: "",
      referrer_id: "65bf211133ac19c3ffd058bf",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Your Company Name"),
      post: Yup.string().required("Please Enter Post"),
    }),
    onSubmit: (values) => {
      dispatch(onAddJob(values));
      setModal(false);
      validation.resetForm();
    },
  });

  useEffect(() => {
    if (localStorage.getItem("token") && !details.length) {
      dispatch(onGetJobSummary());
    }
  }, [dispatch, details.length]);

  useEffect(() => {
    setListItems(details);
  }, [details]);

  return (
    <div style={{ height: "calc(100vh-100px)" }}>
      <Modal
        isOpen={modal}
        toggle={() => {
          setModal(!modal);
        }}
        centered
      >
        <ModalHeader
          toggle={() => {
            setModal(false);
          }}
          tag="h5"
          className="py-3 px-4 border-bottom-0"
        >
          Add Job
        </ModalHeader>
        <ModalBody className="p-4">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <Row>
              <Col className="col-12">
                <div className="mb-3">
                  <Label className="form-label">Comapany Name</Label>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Enter Comapany Name"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.name || ""}
                    invalid={
                      validation.touched.name && validation.errors.name
                        ? true
                        : false
                    }
                  />
                  {validation.touched.name && validation.errors.name ? (
                    <FormFeedback type="invalid">
                      {validation.errors.name}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
              <Col className="col-12">
                <div className="mb-3">
                  <Label className="form-label">Job Post</Label>
                  <Input
                    name="post"
                    placeholder="Enter Job Post"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.post || ""}
                    invalid={
                      validation.touched.post && validation.errors.post
                        ? true
                        : false
                    }
                  />
                  {validation.touched.post && validation.errors.post ? (
                    <FormFeedback type="invalid">
                      {validation.errors.post}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
              <Col className="col-12">
                <div className="mb-3">
                  <Label className="form-label">Last Date</Label>
                  <Input
                    name="last_date"
                    className="form-control"
                    type="datetime-local"
                    id="example-datetime-local-input"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.last_date || ""}
                    invalid={
                      validation.touched.last_date &&
                      validation.errors.last_date
                        ? true
                        : false
                    }
                  />
                  {validation.touched.last_date &&
                  validation.errors.last_date ? (
                    <FormFeedback type="invalid">
                      {validation.errors.last_date}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
              <Col className="col-12">
                <div className="mb-3">
                  <Label className="form-label">Job Description</Label>
                  <Input
                    name="description"
                    placeholder="Enter Job Description"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.description || ""}
                    invalid={
                      validation.touched.description &&
                      validation.errors.description
                        ? true
                        : false
                    }
                  />
                  {validation.touched.description &&
                  validation.errors.description ? (
                    <FormFeedback type="invalid">
                      {validation.errors.description}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col className="col-12  d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-dark"
                  id="btn-save-event"
                >
                  Save
                </button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
      <Container fluid>
        <Row className="mt-3">
          <Col lg={10} sm={9} xs={8}>
            <div className="mb-3">
              <Input
                type="text"
                className="form-control border border-dark"
                id="formrow-firstname-Input"
                placeholder="Search Your Company..."
                style={{
                  borderRadius: "30px",
                }}
                onChange={(e) => {
                  searchHandler(e.target.value);
                }}
              />
            </div>
          </Col>
          <Col lg={2} sm={3} xs={4}>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              <Button
                color="primary"
                className="btn btn-dark waves-effect waves-light"
                onClick={() => {
                  setModal(true);
                }}
              >
                Add Job
              </Button>
            </div>
          </Col>
        </Row>
        <Divider />
        <Row>
          {listItems.length ? (
            listItems.map((data, key) => (
              <Col key={key} className="p-2" lg={3} md={4} sm={12}>
                <Card
                  className="text-muted p-2 shadow-md"
                  style={{ minHeight: "20vh" }}
                >
                  <CardTitle className="text-center h5 bg-dark bg-opacity-50 text-white rounded">
                    {data.name}
                  </CardTitle>
                  <CardBody className="border border-dark rounded m-0">
                    <Row className="my-2">
                      <Col
                      className="d-flex justify-content-start align-items-center  text-success myColumn"
                      >
                      <i 
                      className='myIcons bx bxs-timer'
                      />
                      {data.last_date.split("T")[0]}
                      </Col>
                    </Row>
                    <Row className="my-2">
                    <Col
                    className="d-flex justify-content-start align-items-center"
                    >
                    <i 
                    className='myIcons bx bxs-envelope' 
                    />
                      {data.post}
                      </Col>
                    </Row>
                    <Row className="my-2">
                    <Col
                    className="d-flex justify-content-start align-items-center"
                    >
                    <i 
                    className='myIcons bx bxs-location-plus' 
                    />
                      Pune, Maharashtra, India
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            ))
          ) : 
            ""
          }
        </Row>
      </Container>
    </div>
  );
};

export default Summary;
