import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import { actions, selectors } from "./store";
import Auth from "../../../core/datasources/Auth";

export const SignUp = () => {
  const state = selectors.useParams()

  const setName = actions.useSetName()
  const setEmail = actions.useSetEmail()
  const setAddress = actions.useSetAddress()
  const setPassword = actions.useSetPassword()
  const setPasswordConfirmation = actions.useSetPasswordConfirmation()

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const params = state;

    try {
      const res = await Auth.signUp(params);
      console.log(res);
      alert("confirm email");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <h2>サインアップページです</h2>
      <Form
        noValidate
        className='shadow bg-white rounded p-3'
        onSubmit={handleSignUpSubmit}
      >
        <Row className="justify-content-center">
          <Col md={2}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>会社名 :</Form.Label>
              <Form.Control
                required
                type='input'
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
              <Form.Control.Feedback type="invalid">
                入力欄が空です。
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="admin_mail_address">
              <Form.Label>メールアドレス :</Form.Label>
              <Form.Control
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
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>住所 :</Form.Label>
              <Form.Control
                required
                type='input'
                onChange={(event) => {
                  setAddress(event.target.value)
                }}
              />
              <Form.Control.Feedback type="invalid">
                入力欄が空です。
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
          <Col md={2}>
            <Form.Group className="mb-3" controlId="password_confirmation">
              <Form.Label>パスワード確認 :</Form.Label>
              <Form.Control
                required
                type='input'
                onChange={(event) => {
                  setPasswordConfirmation(event.target.value)
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
              登録
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default SignUp
