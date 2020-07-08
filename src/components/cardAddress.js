import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';


class CardAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: false,

    };
    this.displayOptions = this.displayOptions.bind(this);
  }

  displayOptions(e) {
    e.preventDefault();
    const { displayed } = this.state;
    this.setState({
      displayed: !displayed,
    });
  }

  render() {
    const {
      street, number, city, cp, state, name, mobile, other,
    } = this.props;
    const { displayed } = this.state;

    return (
      <>
        <Card>
          <Card.Body className="card-direccion">
            <div>
              <p>
                {street}
                {' '}
                #
                {number}
                {' '}
              </p>
              <small>
                {city}
                {' '}
                C.P
                {' '}
                {cp}
                ,
                {' '}
                {state}
                {' '}
              </small>
              <small>
                {name}
                -
                {' '}
                {mobile}
                {' '}
              </small>
              {other && (<small>{other}</small>)}
            </div>
            <button type="button" onClick={this.displayOptions} className="ellipsis"><i className="fa fa-ellipsis-v" aria-hidden="true" /></button>
            {' '}
            {displayed && (
            <div className="displayed">
              <Link to="/addressForm">Editar</Link>
              <button type="button">Eliminar</button>
            </div>
            )}

          </Card.Body>
        </Card>
      </>
    );
  }
}

CardAddress.propTypes = {
  street: PropTypes.string,
  number: PropTypes.string,
  city: PropTypes.string,
  cp: PropTypes.string,
  state: PropTypes.string,
  name: PropTypes.string,
  mobile: PropTypes.string,
  other: PropTypes.string,
};

CardAddress.defaultProps = {
  street: '',
  number: '',
  city: '',
  cp: '',
  state: '',
  name: '',
  mobile: '',
  other: '',
};
export default CardAddress;
