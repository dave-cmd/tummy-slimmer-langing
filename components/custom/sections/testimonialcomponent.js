/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../public/assets/images/testimonial/1.jpg";
import img2 from "../../../public/assets/images/testimonial/2.jpg";
import img3 from "../../../public/assets/images/testimonial/3.jpg";

const TestimonialComponent = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Testimonial</h1>
              {/* <h6 className="subtitle">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6> */}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial3 spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Check what our Customers are Saying</h2>
              <h6 className="subtitle">
                You can relay on our amazing products and also our customer
                services will be a great experience for you without doubt and in
                no-time
              </h6>
            </Col>
          </Row>
          <Row className="testi3 m-t-40 justify-content-center">
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    “I been overweight from young ago, but just recently had a wake up call.
                    While on a family cruise, I couldn't join my family for dinner as I didn't fit in the chair. 
                    That's when I stopped and told myself I needed to lose weight.
                    Since then I have started doing exercise, eating healthier and taking Tummy Slim. A lot of people thought I couldn't do it, 
                    but here I am - 44 lbs lighter than when I first started taking Tummy SLim.
                    I can now be more active in day to day life and I have found applying for jobs easier and more accessible now that I have ethereal mobility to do all jobs required.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <Image src={img1} alt="wrapkit" className="circle" width="60" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Michelle Anderson</h6>
                      <div className="font-10">
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-muted">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    “My name is Mark , I bought a box Tummy Slim and used it for just over a month. 
                    My objectives were simple: lose belly fat and love handles, get a bit more of strength and be in the best shape possible! 
                    Combined with a diet change and some exercise, so far I lost 9 lbs in 1 month with the help of Tummy Slim! 
                    Overall I am very satisfied, but I feel that my transformation is not over and will continue taking for 3 months more to get the maximum results possible!”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <Image src={img2} alt="wrapkit" className="circle" width="60" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Mark mesty</h6>
                      <div className="font-10">
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-muted">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    “I was struggling to lose weight that had crept on over 3 years due to becoming self employed and not keeping up with a healthy lifestyle. 
                    Started taking Tummy Slim and saw results after just 2 weeks. My appetite reduced and I started eating healthier and keeping more active. 
                    Biggest challenge was cutting down on chocolate which I love, but I lost 14 lbs in 9 weeks! 
                    Overall my confidence has risen and I love buying clothes a size under what I was wearing! I feel so full of energy and find I'm not looking for sugary treats at all now. 
                    My final advice would be to stick with Tummy Slim. It really helped me and the consistent support through email keeps you on track. 
                    Also, take pictures at the start as it really spurs you on during your journey.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <Image src={img3} alt="wrapkit" className="circle" width="60"/>
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Limpsy adam</h6>
                      <div className="font-10">
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-muted">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
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

export default TestimonialComponent;
