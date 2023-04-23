import { useEffect } from "react";
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import { actions, selectors } from "./store";
import { selectors as loginUserSelectors, actions as loginUserActions } from "../../../core/components/LoginUser/store";
import { actions as alertActions } from "../../../core/components/Alert/store";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const showError = alertActions.useDangerShow()
  const currentUser = loginUserSelectors.useCurrentUser()

  const navigate = useNavigate();
  const state = selectors.useParams()
  const setEmail = actions.useSetEmail()
  const setPassword = actions.useSetPassword()
  const signIn = loginUserActions.useSignIn(showError)

  const handleSignInSubmit = async (e) => {
    e.preventDefault();

    try {
      await signIn(state)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) { navigate("/") }
  }, [currentUser, navigate])

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
