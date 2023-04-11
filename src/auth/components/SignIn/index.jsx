import Cookies from "js-cookie";
import { useContext, useState } from "react";
import {   useHistory } from "react-router-dom";
import { signIn } from "../../../api/auth";
import { AuthContext } from "../../../App.jsx";
import { Button, Container, Form, Row, Col } from 'react-bootstrap'

export const SignIn = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const generateParams = () => {
    const signInParams = {
      email: email,
      password: password,
    };
    return signInParams;
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const params = generateParams();

    try {
      const res = await signIn(params);
      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        history.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <h2>サインインページです</h2>
      <Form
        noValidate
        className="shadow bg-white rounded p-3"
        onSubmit={handleSignInSubmit}
      >
        <Row className="justify-content-center">
        <Col md={2}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>メールアドレス :</Form.Label>
            <Form.Control
              required
              type='input'
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
            <Form.Control.Feedback type="invalid">
              入力欄が空か、適切な値ではありません。
            </Form.Control.Feedback>
          </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>パスワード :</Form.Label>
              <Form.Control
                required
                type='input'
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <Form.Control.Feedback type="invalid">
                入力欄が空です。
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={8} />
            <Col xs={12} className='my-1 text-center'>
              <Button
                variant="primary"
                type="submit"
                className='px-5'
              >
                ログイン
              </Button>
          </Col>
        </Row>
      </Form>  
    </Container>
  )
}

export default SignIn
