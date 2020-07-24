import React from 'react';
import {
  Form, Button, Col, Container,
} from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link } from 'gatsby';
import Layout from '../components/layout';

class dataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '+528180881881',
    };
  }

  render() {
    const { phone } = this.state;
    return (
      <Layout>
        <Container>
          <Form className="Contact-us">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="mcastorena" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="mcastorena@gmail.com" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Melissa" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Castorena" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridMobile">
              <Form.Label>Number</Form.Label>
              <PhoneInput
                country="mx"
                value={phone}
                onChange={() => this.setState({ phone })}
              />
            </Form.Group>

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
  }
}

export default dataForm;
