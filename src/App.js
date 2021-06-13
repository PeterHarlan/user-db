import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import UserProfile from "./components/UserProfile";
import UserTableWrapper from "./components/UserTableWrapper";
import LoadingContent from "./components/LoadingContent";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [peopleList, setPeopleList] = useState([]);
  const [focusedUserUUID, setFocusedUserUUID] = useState();
  const [focusedUser, setFocusedUser] = useState({});
  useEffect(() => {
    // I will prefetch all the data to filter through it since
    // I dont have an api end point to filter search
    const apiRoute = `https://randomuser.me/api/?results=500&seed=foobar`;
    setIsLoading(true);
    setError("");
    axios
      .get(apiRoute)
      // Uncomment this line if you want to see api error handled
      // .then(() => {
      //   throw "Testing some random error";
      // })
      .then(({ data }) => {
        const { results = [] } = data || {};
        if (results.length <= 0) {
          throw Error("Error fetching user list");
        }

        const selectedUserUUID = results[0].login.uuid;
        setFocusedUserUUID(selectedUserUUID);

        setPeopleList(results);
        // Comment out this line if you want to see the loading signal
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    const selectedUser = peopleList.find(
      (person) => person.login.uuid === focusedUserUUID
    );
    setFocusedUser(selectedUser);
  }, [focusedUserUUID, peopleList]);

  const fnSetUser = (uuid) => {
    setFocusedUserUUID(uuid);
  };

  return (
    <Container className="vh-100" fluid>
      <LoadingContent {...{ isLoading, error }}>
        <Row className="h-100">
          <Col xs={12} md={4} lg={3}>
            <UserProfile user={focusedUser} />
          </Col>
          <Col className="h-100" xs={12} md={8} lg={9}>
            <UserTableWrapper
              {...{
                originalPeopleList: peopleList,
                fnSetUser,
              }}
            />
          </Col>
        </Row>
      </LoadingContent>
    </Container>
  );
}
