import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import { actions, selectors } from './store'

const AddEmployee = () => {
  const submited = selectors.useSubmited()
  const nameIsInvalid = selectors.useNameIsInvalid()
  const sexIsInvalid = selectors.useSexIsInvalid()
  const birthdayIsInvalid = selectors.useBirthdayIsInvalid()
  const addressIsInvalid = selectors.useAddressIsInvalid()
  const workYearIsInvalid = selectors.useWorkYaerIsInvalid()
  const phoneNumberIsInvalid = selectors.usePhoneNumberIsInvalid()
  const adminMailAddressIsInvalid = selectors.useAdminMailAddressIsInvalid()
  const isAdmin = selectors.useIsAdmin()
  const setName = actions.useSetName()
  const setSex = actions.useSetSex()
  const setBirthday = actions.useSetBirthday()
  const setAddress = actions.useSetAddress()
  const setWorkYear = actions.useSetWorkYaer()
  const setPhoneNumber = actions.useSetPhoneNumber()
  const setIdAdmin = actions.useSetIsAdmin()
  const setAdminMailAddress = actions.useSetAdminMailAddress()
  const setTrueSubmited = actions.useSetTrueSubmited()

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setTrueSubmited()
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <Container>
      <h2 className='text-primary'>メンバー新規追加</h2>
      <Form
        noValidate
        className='shadow bg-white rounded p-3'
        onSubmit={handleSubmit}
      >
        <Row className="justify-content-center">
          <Col md={2}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>お名前 :</Form.Label>
              <Form.Control
                required
                type='input'
                onChange={(event) => {
                  setName(event.target.value)
                }}
                isInvalid={submited && nameIsInvalid}
              />
              <Form.Control.Feedback type="invalid">
                入力欄が空です。
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="sex">
              <Form.Label>性別 :</Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                onChange={(event) => {
                  setSex(event.target.value)
                }}
                isInvalid={submited && sexIsInvalid}
              >
                <option defaultValue="invalid" selected disabled>--選択--</option>
                <option value="male">男性</option>
                <option value="female">女性</option>
                <option value="other">無回答</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                選択してください。
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="birthday">
              <Form.Label>お誕生日 :</Form.Label>
              <Form.Control
                required
                type='date'
                onChange={(event) => {
                  setBirthday(event.target.value)
                }}
                isInvalid={submited && birthdayIsInvalid}
              />
              <Form.Control.Feedback type="invalid">
                選択してください。
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
                isInvalid={submited && addressIsInvalid}
              />
              <Form.Control.Feedback type="invalid">
                入力欄が空です。
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="work_yaer">
              <Form.Label>勤続年数 :</Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                onChange={(event) => {
                  setWorkYear(event.target.value)
                }}
                isInvalid={submited && workYearIsInvalid}
              >
                <option defaultValue="invalid" selected disabled>--選択--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                選択してください。
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="phone_number">
              <Form.Label>電話番号 :</Form.Label>
              <Form.Control
                required
                type='tel'
                onChange={(event) => {
                  setPhoneNumber(event.target.value)
                }}
                isInvalid={submited && phoneNumberIsInvalid}
              />
              <Form.Control.Feedback type="invalid">
                入力欄が空か、適切な値ではありません。ハイフンを除いた半角数字11桁にしてください。
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="is_admin">
              <Form.Check
                inline
                label="この人は管理者です"
                type="checkbox"
                id="checkbox"
                className='mx-2 mb-5'
                onChange={(event) => {
                  setIdAdmin(event.target.checked)
                }}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            {isAdmin &&
              <Form.Group className="mb-3" controlId="admin_mail_address">
                <Form.Label>管理者メールアドレス :</Form.Label>
                <Form.Control
                  type='input'
                  onChange={(event) => {
                    setAdminMailAddress(event.target.value)
                  }}
                  isInvalid={submited && adminMailAddressIsInvalid}
                />
                <Form.Control.Feedback type="invalid">
                  入力欄が空か、適切な値ではありません。
                </Form.Control.Feedback>
              </Form.Group>
            }
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

export default AddEmployee
