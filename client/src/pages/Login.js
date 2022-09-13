import React from "react";
import { useRecoilState } from "recoil";
import {
  Container,
  Button,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Row,
  Col,
} from "reactstrap";
import { loggedInStatus } from "../stores/appStore";

const Login = () => {
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInStatus);
  const onClickLogin = () => {
    setLoggedIn(!loggedIn);
  };
  return (
    <Container>
      <Card>
        <CardHeader>
          <p>Log In</p>
        </CardHeader>
        <CardBody>
          <Row>
            <Col>
              <Button onClick={onClickLogin}>Toggle Logged In</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Badge className={loggedIn ? "bg-success" : "bg-danger"}>
                Login Status
              </Badge>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Login;
