import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import { actions, selectors } from './store'

const SearchCondition = () => {
  const searched = selectors.useSearched()
  const phoneNumberIsInvalid = selectors.usePhoneNumberIsInvalid()
  const setName = actions.useSetName()
  const setSex = actions.useSetSex()
  const setBirthday = actions.useSetBirthday()
  const setAddress = actions.useSetAddress()
  const setWorkYear = actions.useSetWorkYaer()
  const setPhoneNumber = actions.useSetPhoneNumber()
  const search = actions.useSearch()

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    search()
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <Container>
      <h2 className='text-primary'>絞り込み検索</h2>
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
                type='input'
                onChange={(event) => {
                  setName(event.target.value)
                }}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="sex">
              <Form.Label>性別 :</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(event) => {
                  setSex(event.target.value)
                }}
              >
                <option defaultValue="" selected>--選択--</option>
                <option value="male">男性</option>
                <option value="female">女性</option>
                <option value="other">無回答</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="birthday">
              <Form.Label>お誕生日 :</Form.Label>
              <Form.Control
                type='date'
                onChange={(event) => {
                  setBirthday(event.target.value)
                }}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>住所 :</Form.Label>
              <Form.Control
                type='input'
                onChange={(event) => {
                  setAddress(event.target.value)
                }}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="work_yaer">
              <Form.Label>勤続年数 :</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(event) => {
                  setWorkYear(event.target.value)
                }}
              >
                <option defaultValue="" selected>--選択--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="phone_number">
              <Form.Label>電話番号 :</Form.Label>
              <Form.Control
                type='tel'
                onChange={(event) => {
                  setPhoneNumber(event.target.value)
                }}
                isInvalid={searched && phoneNumberIsInvalid}
              />
              <Form.Control.Feedback type="invalid">
                適切な値ではありません。ハイフンを除いた半角数字11桁にしてください。
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs='auto' className='my-1'>
            <Button variant="primary" type="submit" className='px-5' >
              検索
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default SearchCondition
