import React, { useState } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCalendar,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const DescribeText = styled.div`
  font-size: medium;
`;

const InfoText = styled.div`
  font-weight: bold;
`;

export default function UserProfile({ user }) {
  const imageLocation = (user && user.picture && user.picture.large) || "";

  const [selectedInfo, setSelectedInfo] = useState("mail");

  return (
    <div className="h-100 d-flex py-5">
      <div className="my-auto mx-auto w-100">
        <Image
          className="my-auto w-100 px-4"
          src={imageLocation}
          alt="Stack Overflow logo and icons and such"
        />

        <Container className="my-4 text-center" fluid>
          <Row className={selectedInfo === "mail" ? "" : "d-none"}>
            <Col className="mb-4">
              <Row>
                <Col>
                  <DescribeText>My Email is</DescribeText>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InfoText>{user.email}</InfoText>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className={selectedInfo === "bday" ? "" : "d-none"}>
            <Col className="mb-4">
              <Row>
                <Col>
                  <DescribeText>My B-day is</DescribeText>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InfoText>{user.dob.date}</InfoText>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className={selectedInfo === "phone" ? "" : "d-none"}>
            <Col className="mb-4">
              <Row>
                <Col>
                  <DescribeText>My number is</DescribeText>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InfoText>{user.cell}</InfoText>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <FontAwesomeIcon
                icon={faEnvelope}
                size="lg"
                onMouseEnter={() => setSelectedInfo("mail")}
              />
            </Col>
            <Col>
              <FontAwesomeIcon
                icon={faCalendar}
                size="lg"
                onMouseEnter={() => setSelectedInfo("bday")}
              />
            </Col>
            <Col>
              <FontAwesomeIcon
                icon={faPhone}
                size="lg"
                onMouseEnter={() => setSelectedInfo("phone")}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
