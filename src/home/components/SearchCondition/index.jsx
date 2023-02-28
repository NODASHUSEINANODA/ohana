import { Button, Container, Form, Row, Col } from 'react-bootstrap'

const SearchCondition = () => {
  return (
    <Container>
      <h2 className='text-primary'>絞り込み検索</h2>
      <Form className='shadow bg-white rounded p-3'>
        <Row className="justify-content-center">
          <Col md={2}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>お名前 :</Form.Label>
              <Form.Control type='input' />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="sex">
              <Form.Label>性別 :</Form.Label>
              <Form.Select aria-label="Default select example">
                <option defaultValue="valid" disabled>--選択--</option>
                <option value="1">男性</option>
                <option value="2">女性</option>
                <option value="3">無回答</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="birthday">
              <Form.Label>お誕生日 :</Form.Label>
              <Form.Control type='date' />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>住所 :</Form.Label>
              <Form.Control type='input' />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="work-year">
              <Form.Label>勤続年数 :</Form.Label>
              <Form.Select aria-label="Default select example2">
                <option defaultValue="valid" disabled>--選択--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
            </Form.Group>
          </Col>
          {/* TODO: submit時にvalidationかける必要あり */}
          <Col md={2}>
            <Form.Group className="mb-3" controlId="phone_number">
              <Form.Label>電話番号 :</Form.Label>
              <Form.Control type='tel' />
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
