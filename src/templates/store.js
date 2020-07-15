/* eslint-disable react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

class IndexPost extends React.Component {
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
    const { NoOfPost } = this.state;

    return (
      <>
        <div className="row product-main" onScroll={this.onScrollEvent}>
          { data.data.contentfulAuthor.product !== null && data.data.contentfulAuthor.product.map((items) => (
            <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={items.id}>
              <div className="details_List">
                {items.image === null ? <div className="no-image">No Image</div> : <Img sizes={items.image.fixed} />}

                <div className="details_inner">
                  <h2>
                    {/* <Link to={`/${items.node.slug}`}>{items.name}</Link> */}
                    {items.name}
                  </h2>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={items.rating}
                  />
                  <div className="row">
                    <div className="col-sm-4 align-self-center">
                      <span className="price">
                        $
                        {items.price}
                      </span>
                    </div>
                    <div className="col-sm-8 text-right align-self-center">
                      <a
                        href="#"
                        className="Product snipcart-add-item"
                        // data-item-id={items.slug}
                        data-item-price={items.price}
                        data-item-image={items.image === null ? '' : items.image.fixed.src}
                        data-item-name={items.name}
                        data-item-url="/"
                      >
                        <i className="fas fa-shopping-bag" />
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          { data.data.contentfulAuthor.product == null && <p>No products</p>}
        </div>
      </>
    );
  }
}

IndexPost.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      allContentfulProduct: PropTypes.shape({
      }),
    }),
  }),
};

IndexPost.defaultProps = {
  data: {},
};

const IndexPage = (data) => (

  <Layout>
    <SEO title="Store" keywords={['gatsby', 'store', 'react']} />
    <div className="container store-page">
      <IndexPost data={data} />
    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
query MyQuery($slug: String) {
  contentfulAuthor(slug: {eq: $slug}) {
    product {
      name
      price
      rating
      id
      image {
        fixed(width: 1120, height: 500) {
          height
          width
          src
          srcSet
        }
      }
    }

  }
}
`;
