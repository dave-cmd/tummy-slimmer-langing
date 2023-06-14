/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import herobanner from "../../../public/assets/images/staticslider/slider/hero-banner.jpg";
const BannerComponent = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Fact</h1>
              <h6 className="subtitle">
                It's no secret - losing weight is challenging. Even though you try to eat a balanced diet, reduce your calorie intake and exercise requlary, you may not see the results you expect.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="static-slider10">
        <Container>
          <Row className="">
            <Col md="6" className="align-self-center ">
              {/* <span className="label label-rounded label-inverse">
                Creating Brands
              </span> */}
              <h1 className="title">ONE BILLON People Use weightloss supplements</h1>
              <h6 className="subtitle op-8">
                15% of US adults use some form of supplement for weight loss. This equates to 21% of women and 10% of men. $2.1 Billion in supplements for weight loss are sold evey year in the United States alone.
              </h6>
              <a
                className="btn btn-light btn-rounded btn-md m-t-20"
                data-toggle="collapse"
                href=""
              >
                <span>Do you Need Help?</span>
              </a>
            </Col>
            <Col md="6">
              <Image src={herobanner} alt="herobanner"></Image>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="static-slider3">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="align-self-center text-center">
              <h1 className="title">
                I’m Johanthan Doe, an{" "}
                <b className="font-bold">
                  Entreprenuer, Designer & Front-end Developer
                </b>
                , Making{" "}
              </h1>
              <a
                className="btn btn-danger btn-md btn-arrow m-t-20"
                data-toggle="collapse"
                href=""
              >
                <span>
                  Checkout My Work <i className="ti-arrow-right"></i>
                </span>
              </a>
            </Col>
          </Row>
        </Container>
      </div> */}
    </div>
  );
};

export default BannerComponent;
