import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { actions, selectors } from './store';
import { selectors as EmployeesSelectors } from '../Employees/store';
import './index.css';
import { calc_elapsed_year, dateToIso8601 } from '../../../lib/Date';

const EditEmployee = () => {
  const showEdit = selectors.useShowEdit()
  const id = selectors.useEmployeeId()
  const employees = EmployeesSelectors.useEmployees()
  const setShowEdit = actions.useSetShowEdit()

  const handleClose = () => {
    setShowEdit(false)
  }

  const handleSubmit = () => {
    console.log('handleSubmit')
  }

  if (id === null) { return null }

  const employee = employees[id]

  return (
    <Modal
      show={showEdit}
      onHide={handleClose}
      size='xl'
      className='modal-90w'
    >
      <Form
        noValidate
        className='edit-form shadow rounded p-5'
        onSubmit={handleSubmit}
      >
        <Row className="justify-content-center">
          <Col md={12} className='mb-4'>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>名前</Form.Label>
              <h4 className='px-3'>{employee?.name}</h4>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>性別</Form.Label>
              <h5 className='px-3'>{employee?.sex}</h5>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="birthday">
              <Form.Label>お誕生日 :</Form.Label>
              <Form.Control
                type='date'
                value={dateToIso8601(employee?.birthday)}
                onChange={(event) => {
                  console.log(event)
                }}
              />
            </Form.Group>
          </Col>
          <Col md={1}>
            <Form.Group className="mb-3" controlId="age">
              <Form.Label>年齢</Form.Label>
              <h5 className='px-3'>{calc_elapsed_year(employee?.birthday)}</h5>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>住所 :</Form.Label>
              <Form.Control
                type='input'
                value={employee?.address}
                onChange={(event) => {
                  console.log(event)
                }}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="joined_at">
              <Form.Label>入社日 :</Form.Label>
              <Form.Control
                required
                type='date'
                onChange={(event) => {
                  // TODO: APIに社員情報を変更するリクエストに変更
                  console.log(event)
                }}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="phone_number">
              <Form.Label>電話番号 :</Form.Label>
              <Form.Control
                type='tel'
                placeholder={employee?.phone_number}
                onChange={(event) => {
                  console.log(event)
                }}
              />
              <Form.Control.Feedback type="invalid">
                適切な値ではありません。ハイフンを除いた半角数字11桁にしてください。
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={12} className='mt-3'>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>備考</Form.Label>
              <Form.Control
                as='textarea'
                className='message-textarea'
                value={employee?.message}
                onChange={(event) => {
                  console.log(event)
                }}
              />
              <Form.Control.Feedback type="invalid">
                適切な値ではありません。ハイフンを除いた半角数字11桁にしてください。
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs='auto' className='mb-1 mt-5'>
            <Button variant="primary" type="submit" className='px-5' >
              保存する
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default EditEmployee
