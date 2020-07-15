/* eslint-disable react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

class Tiendas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NoOfPost: 6,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

    handleScroll = () => {
      const { NoOfPost } = this.state;
      const lastScrollY = window.pageYOffset + 1100;

      if (lastScrollY > window.outerHeight) {
        const count = NoOfPost + 3;
        this.setState({
          NoOfPost: count,
        });
      }
    };

    render() {
      const { data } = this.props;
      return (
        <Layout>
          <SEO title="Store" keywords={['gatsby', 'store', 'react']} />
          <div className="container store-page">
            <div className="row product-main" onScroll={this.onScrollEvent}>
              {data.allContentfulAuthor.edges.map((items) => (
                <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={items.node.id}>
                  <div className="details_List">
                    {items.node.photo === null ? <div className="no-image">No Image</div> : <Img sizes={items.node.photo.fixed} />}

                    <div className="details_inner">
                      <h2>
                        <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Layout>
      );
    }
}

Tiendas.propTypes = {
  data: PropTypes.shape({
    allContentfulAuthor: PropTypes.shape({
    }),
  }),
};

Tiendas.defaultProps = {
  data: {},
};

export default Tiendas;

export const query = graphql`
query AuthorsQuery {
    allContentfulAuthor {
      edges {
        node {
          id
          name
          slug
          photo {
            fixed(width: 1000) { 
              width
              src
              srcSet
            }
          }
        }
      }
    }
  }
  `;
