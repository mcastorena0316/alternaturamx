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
        <Form.Row>
          <Form.Group as={Col} controlId="formGridStreet">
            <Form.Label>Street Name</Form.Label>
            <Form.Control type="text" placeholder="Constelaciones" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>Number:</Form.Label>
            <Form.Control size="4" type="number" placeholder="123" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridNumber2">
            <Form.Label>Inner number:</Form.Label>
            <Form.Control type="text" placeholder="10j" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridNeighborhood">
            <Form.Label>Neighborhood(Colonia)</Form.Label>
            <Form.Control type="text" placeholder="Contry Sol" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGriCityAddress">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Monterrey" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCP">
            <Form.Label>CP</Form.Label>
            <Form.Control type="number" placeholder="67170" />
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
