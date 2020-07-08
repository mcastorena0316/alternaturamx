import React from 'react';

import { Card } from 'react-bootstrap';

const CardAddress = ({
  street, number, city, cp, state, name, mobile, other,
}) => (
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
       <button className='ellipsis'><i className="fa fa-ellipsis-v" aria-hidden="true" /></button> 
      </Card.Body>
    </Card>
  </>
);

export default CardAddress;
