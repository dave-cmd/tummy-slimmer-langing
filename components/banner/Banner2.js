import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/legacy/image";
import bannerimg from "../../public/assets/images/landingpage/banner-img-1.png";


const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
             Tummy Trim
            </h1>
            <h4 className="subtitle font-light">
              A natural weight management system that targets 5 key areas of metabolic health to help shed excess fat, crush cravings, and support natural energy.
              {/* <br /> Ready to Use Sections */}
            </h4>
            {/* <a
              href="https://form.jotform.com/231630492021040"
              className="btn btn-danger m-r-20 btn-md m-t-30 "
            >
              Download Free
            </a> */}
            <div >
              <a className="btn btn-md m-t-30  btn-outline-light" href="https://form.jotform.com/231630492021040">
                Order Now
              </a>
            </div>
          </Col>
          <Col lg="6" md="6">
            <Image src={bannerimg} alt="hero banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
