import React from "react";
import { Row, Col, Container, Form } from "reactstrap";
import Image from "next/image";
import banner from "../../../public/assets/images/form-banners/banner1/banner-img-1.png";

const FormBannerComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Our Products</h1>
              <h6 className="subtitle">
                Our weight loss products are the best in the line. Our pills contain trusted and 
                natural ingredients that target various aspects of weight loss. Our formulation works 
                as an appetite suppressant and kickstarts thermogenesis which facilitates fat loss and 
                energizes you.
                <br/><br/>
                With so many diet pills on the market, selecting the best fat burning supplement can 
                feel like a daunting task. At Nutristerk, we stand fully behind our products and provide our
                clients with a 100% money back guarantee. 
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-light">
        <section>
          <div id="banner1" className="banner spacer">
            <Container>
              <Row>
                <Col lg="5" md="7" className="align-self-center">
                  <h2 className="title font-bold">
                    Get in shape!
                  </h2>
                  <p className="m-t-40 m-b-30">
                    To accomplish great things, we must not only act, but also
                    dream; not only plan, but also believe.
                  </p>
                  <div className="m-t-40">
                      <a href="https://form.jotform.com/231630492021040" className="btn btn-dark m-r-20 btn-md m-t-30 ">Try us now</a>
                  </div>
                  {/* <Form className="m-t-40">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Email Address"
                      className="font-16"
                    />
                    <input
                      type="submit"
                      value="Get Started"
                      className="bg-info font-semibold font-16 btn-rounded text-uppercase text-white text-center"
                    />
                  </Form> */}
                </Col>
                <Col lg="6" md="5" className="align-self-center ml-auto">
                  <Image
                    src={banner}
                    alt="We are Digital Agency"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormBannerComponent;
