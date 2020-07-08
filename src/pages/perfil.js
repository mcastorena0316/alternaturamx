import React from 'react';
import { Link } from 'gatsby';
import { Card } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import CardComponent from '../components/cardComponent';
import CardAddress from '../components/cardAddress';

const Perfil = () => (
  <Layout>
    <SEO title="Contact Us" keywords={['gatsby', 'Login', 'react']} />
    <div className="mis-datos">
      <div className="container">
        <div className="text-center"><h3>Mis datos</h3></div>
        <h4 className="with-underline">Datos de la cuenta</h4>
        <CardComponent title1="Usuario" title2="mcastorena" />
        <CardComponent title1="Email" title2="mcastorena@gmail.com" />

        <h4 className="with-underline">Datos personales</h4>
        <CardComponent title1="Nombre" title2="Melissa" />
        <CardComponent title1="Apellidos" title2="Castorena Soto" />
        <CardComponent title1="Telefono" title2="8126223516" />

        <h4 className="with-underline">Tarjetas</h4>
        <CardComponent title1="Terminada en 1111" title2="Santander" title3="vencimiento 01/2020" />
        <CardComponent title1="Terminada en 2222" title2="Bancomer" title3="vencimiento 01/2020" />
        <Card>
          <Card.Body className="card-datos">
            <Link to="/cardForm">
              <i className="fa fa-plus-circle" aria-hidden="true" />
              {' '}
              Agregar Tarjeta
            </Link>
          </Card.Body>
        </Card>

        <h4 className="with-underline">Mis direcciones</h4>
        <CardAddress
          street="Valle de Champagne"
          number="235"
          city="Monterrey"
          cp="67174"
          state="N.L."
          name="Francisco Castorena"
          mobile="8180881881"
          other="Casa gris con azul en esquina"
        />
        <CardAddress
          street="Manzanares"
          number="505"
          city="San Pedro Garza Garcia"
          cp="77777"
          state="N.L."
          name="Guillermo Guereque"
          mobile="8180881881"
        />
        <Card>
          <Card.Body className="card-datos">
            <p>
              <i className="fa fa-plus-circle" aria-hidden="true" />
              {' '}
              Agregar Direccion
            </p>
          </Card.Body>
        </Card>
      </div>

    </div>
  </Layout>
);

export default Perfil;
