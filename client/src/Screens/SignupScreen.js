import React from 'react'
import {Button, Form, Row, Col, Container} from 'react-bootstrap'

const SignupScreen = () => {
  return (
      <Container>
          <Row className='justify-content-center'>
            <Col xs={12} md={6}>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Ad Soyad</Form.Label>
    <Form.Control type="email" placeholder="Emre Temir" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>E-Posta</Form.Label>
    <Form.Control type="email" placeholder="emre@temir.com" />
    <Form.Text className="text-muted">
    E-postanızı asla 3.kişilerle paylaşmayacağız.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Şifre</Form.Label>
    <Form.Control type="password" placeholder="Örnek.123" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Telefon Numarası</Form.Label>
    <Form.Control type="password" placeholder="+90 532 0125760" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

            </Col>
          </Row>
      </Container>
  )
}

export default SignupScreen