import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';

class CardComponent extends React.Component {
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
    const { title1, title2, title3 } = this.props;
    const { displayed } = this.state;
    return (
      <>
        <Card>
          <Card.Body className="card-datos">
            <p>{title1}</p>
            {!title3 && (
            <>
              <p>{title2}</p>
              <Link to="/dataForm">{'>'}</Link>
            </>
            )}
            {title3 && (
            <>
              <div>
                <p>{title2}</p>
                <p>{title3}</p>
              </div>
              <button type="button" onClick={this.displayOptions} className="ellipsis"><i className="fa fa-ellipsis-v" aria-hidden="true" /></button>
            </>
            )}
            {displayed && (
            <div className="displayed">
              <Link to="/cardForm">Editar</Link>
              <button type="button">Eliminar</button>
            </div>
            )}
          </Card.Body>
        </Card>

      </>
    );
  }
}

CardComponent.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
};

CardComponent.defaultProps = {
  title1: '',
  title2: '',
  title3: '',
};
export default CardComponent;
