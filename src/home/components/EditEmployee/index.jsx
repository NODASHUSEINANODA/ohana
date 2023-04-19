import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { actions as employeesActions } from '../Employees/store';
import './index.css';
import { dateToIso8601, diff_year } from '../../../lib/Date';

const EditEmployee = ({ open, employee }) => {
  const updateEmployee = employeesActions.useUpdateEmployee()
  const setOpen = employeesActions.useSetOpen()

  // NOTE: ここはcomponentごとに状態を保持したいので、あえてrecoilを使っていない
  const [birthday, setBirthday] = React.useState(employee?.birthday)
  const [address, setAddress] = React.useState(employee?.address)
  const [joined_at, setJoinedAt] = React.useState(employee?.joined_at)
  const [phone_number, setPhoneNumber] = React.useState(employee?.phone_number)
  const [message, setMessage] = React.useState(employee?.message)
  const params = {
    birthday: birthday,
    address: address,
    joined_at: joined_at,
    phone_number: phone_number,
    message: message
  }
  const [phoneNumberIsInvalid, setPhoneNumberIsInvalid] = React.useState(false)

  const checkPhoneNumberIsInvalid = ((newPhoneNumber) => {
    const phoneNumberRegex = /^0[789]0-\d{4}-\d{4}$/
    if (newPhoneNumber === '') { return setPhoneNumberIsInvalid(true) }
    if (!phoneNumberRegex.test(newPhoneNumber)) { return setPhoneNumberIsInvalid(true) }

    setPhoneNumberIsInvalid(false)
  })

  const handleClose = () => {
    setOpen(employee.id, false)
  }

  const handleSubmit = async () => {
    updateEmployee(employee.id, params)
    console.log('handleSubmit')
  }

  if (employee === null) { return null }

  return (
    <Modal
      show={open}
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
                value={params.birthday || dateToIso8601(employee?.birthday)}
                defaultValue={dateToIso8601(employee?.birthday)}
                onChange={(event) => {
                  console.log(event)
                  setBirthday(event.target.value)
                }}
              />
            </Form.Group>
          </Col>
          <Col md={1}>
            <Form.Group className="mb-3" controlId="age">
              <Form.Label>年齢</Form.Label>
              <h5 className='px-3'>{diff_year(employee?.birthday)}</h5>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>住所 :</Form.Label>
              <Form.Control
                type='input'
                value={params.address || employee?.address}
                defaultValue={employee?.address}
                onChange={(event) => {
                  console.log(event)
                  setAddress(event.target.value)
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
                value={params.joined_at || dateToIso8601(employee?.joined_at)}
                defaultValue={dateToIso8601(employee?.joined_at)}
                onChange={(event) => {
                  console.log(event)
                  setJoinedAt(event.target.value)
                }}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="phone_number">
              <Form.Label>電話番号 :</Form.Label>
              <Form.Control
                type='tel'
                value={params.phone_number || employee?.phone_number}
                defaultValue={employee?.phone_number}
                onChange={(event) => {
                  console.log(event)
                  setPhoneNumber(event.target.value)
                  checkPhoneNumberIsInvalid(event.target.value)
                }}
                isInvalid={phoneNumberIsInvalid}
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
                  setMessage(event.target.value)
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
