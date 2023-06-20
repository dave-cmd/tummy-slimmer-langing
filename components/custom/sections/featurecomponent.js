/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../public/assets/images/features/feature13/img1.jpg";
import img2 from "../../../public/assets/images/features/feature13/img2.jpg";
import img3 from "../../../public/assets/images/features/feature13/img3.jpg";
import img4 from "../../../public/assets/images/features/feature13/img4.jpg";
import img5 from "../../..//public/assets/images/features/feature30/feature-img.png";

const FeatureComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Benefits</h1>
              {/* <h6 className="subtitle">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6> */}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer feature4">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              {/* <span className="label label-danger label-rounded">
                Feature 1
              </span> */}
              <h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
              <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-star"></i>
                  </div>
                  <h5 className="font-medium">Weight loss</h5>
                  <p className="m-t-20">
                    Our product promotes a healthier you by eliminating risk factors promoting diabetes, obesity, cancer and cardiovascular diseases.
                  </p>
                  <a href="https://www.hsph.harvard.edu/obesity-prevention-source/obesity-consequences/health-effects/" className="linking text-themecolor">
                    Explore More<i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <h5 className="font-medium">Fat burning </h5>
                  <p className="m-t-20">
                    Our product combines (alpha lipoic acid, cysteine base, and magnesium) and Capsimax Powder 
                    for a profound thermogenesis-effect that has been shown in studies to help reduce excess weight, 
                    suppress appetite, and sustain all-day energy levels.{" "}
                  </p>

                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="m-t-40">
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-star"></i>
                  </div>
                  <h5 className="font-medium">Reduced fat accumilation</h5>
                  <p className="m-t-20">
                  Clinical research published in Bioscience Report reveals the capsaicinoids found in capsimax powder 
                  may help reduce the body’s ability to store excess fat cells, and may even stop fat cells from growing;
                  all without drastically changing one’s eating habits.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <h5 className="font-medium">Eliminates food cravings </h5>
                  <p className="m-t-20">
                  Natural chromium picolinate + nopal cactus + natural caffeine helps to improve insulin sensitivity, 
                  reduce cravings for sweets and carbs, and promote a feeling of fullness.{" "}
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="m-t-40">
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-star"></i>
                  </div>
                  <h5 className="font-medium">Increased Energy</h5>
                  <p className="m-t-20">
                  The unique blend of high-grade, metabolism-supporting ingredients— including natural 
                  caffeine and Capsimax powder— helps to “stoke” our thermogenic fireplace by skyrocketing 
                  our energy levels naturally
                  </p>

                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <h5 className="font-medium">Balaced overall mood </h5>
                  <p className="m-t-20">
                  Struggle with daily mental fatigue? We added the naturally-occurring amino acid, l-carnitine, 
                  to our Tummy Trim formula to give cognitive support and keep you feeling motivated and positive 
                  while shedding the excess weight.{" "}
                  </p>
               
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
      {/* <div className="bg-light spacer feature20 up">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-info label-rounded">Feature 2</span>
              <h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
              <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6>
            </Col>
          </Row>
          <Row className="wrap-feature-20">
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img1}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img2}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img3}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img4}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div> */}
      <div className="spacer ">
        <Container className="feature30">
          <Row>
            <Col lg="10">
              <Image
                src={img5}
                className="rounded img-responsive"
                alt="wrappixel"
              />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  {/* <div className="p-20">
                    <span className="label label-info label-rounded">
                      Feature 3
                    </span> */}
                    <h3 className="title">
                    Achieve Your Dream Body
                    </h3>
                    <p>
                      You can relay on our amazing product to ge the job done.
                      Our product is organic, safe with no side effects.
                    </p>
                    <a
                      className="btn btn-danger btn-md btn-arrow m-t-20"
                      href="#"
                    >
                      <span>
                        Order Now <i className="ti-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FeatureComponent;
