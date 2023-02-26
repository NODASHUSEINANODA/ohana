import { Navbar, Container, Row, Col } from 'react-bootstrap'

const TopBar = () => {
  return (
    <Navbar bg="light" className='rounded-pill m-2' >
      <Container className='mx-auto'>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="logoのパス"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          LOGO
        </Navbar.Brand>
        <Row className='d-flex justify-content-end'>
          <Col md={3} />|
          <Col md={4} className="d-flex justify-content-center">{'USER ID'}</Col>|
          <Col md={4} className="d-flex justify-content-center">{'ログアウト'}</Col>|
          <Col md={1} />|
          <Col md={4} className="d-flex justify-content-center">{'2023-01-01 ~ 2023-12-31'}</Col> |
          <Col md={3} className="d-flex justify-content-center">{'株式会社〇〇'}</Col> |
          <Col md={2} className="d-flex justify-content-center">{'設定'}</Col>|
        </Row>
      </Container>
    </Navbar>
  )
}

export default TopBar
