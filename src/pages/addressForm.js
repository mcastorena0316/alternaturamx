import React from 'react';
import {
  Form, Button, Col, Container,
} from 'react-bootstrap';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const addressForm = () => (
  <Layout>
    <Container>
      <Form className="Contact-us card-form">

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name on Card</Form.Label>
          <Form.Control type="text" placeholder="Juan Perez Ramirez" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddress">
          <Form.Label>Billing Address</Form.Label>
          <Form.Control type="text" placeholder="Vasconcelos 115 Col. Bosques del Valle. San Pedro Garcia Garcia" />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCard">
            <Form.Label>Credit Card</Form.Label>
            <Form.Control type="text" placeholder="XXXX XXXX XXXX" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCVV">
            <Form.Label>CVV</Form.Label>
            <Form.Control size="4" type="text" placeholder="123" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Expiration</Form.Label>
            <div style={{ display: 'flex' }}>
              <Form.Control type="text" name="month" placeholder="MM" maxlength="2" size="2" />
              <span>/</span>
              <Form.Control type="text" name="year" placeholder="YY" maxlength="2" size="2" />
            </div>
          </Form.Group>
        </Form.Row>

        <Button variant="success" type="submit">
          Change
        </Button>
        <Button variant="danger" type="submit">
          <Link to="/perfil">Cancel</Link>
        </Button>
      </Form>
    </Container>
  </Layout>
);

export default addressForm;
