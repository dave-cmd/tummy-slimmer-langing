import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const CallToAction = () => {
  return (
    <div className="coming-soon" id="coming">
      <Container className="py-5 mt-5">
        <Row>
          <Col md="6">
            <div className="d-flex align-items-center">
              <div>
                <h2 className="title text-white font-weight-bold">
                  Inclusive
                </h2>
                <h6 className="subtitle font-light text-white">
                  100% moneyback gurantee, free examination from our resident fat doctor. 
                  You will get expert advise about losing weight safely by eating a healthy, balanced diet and regular physical activity.
                </h6>
                <Button
                  href="https://form.jotform.com/231630492021040"
                  className="btn btn-dark m-r-20 btn-md m-t-30"
                >
                  Comming Soon
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallToAction;
