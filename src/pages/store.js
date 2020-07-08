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
          {data.data.allContentfulProduct.edges.slice(0, NoOfPost).map((items) => (
            <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={items.node.id}>
              <div className="details_List">
                {items.node.image === null ? <div className="no-image">No Image</div> : <Img sizes={items.node.image.fixed} />}

                <div className="details_inner">
                  <h2>
                    <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                  </h2>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={items.node.rating}
                  />
                  <p>{items.node.details.childMarkdownRemark.excerpt}</p>
                  <div className="row">
                    <div className="col-sm-4 align-self-center">
                      <span className="price">
                        $
                        {items.node.price}
                      </span>
                    </div>
                    <div className="col-sm-8 text-right align-self-center">
                      <a
                        href="#"
                        className="Product snipcart-add-item"
                        data-item-id={items.node.slug}
                        data-item-price={items.node.price}
                        data-item-image={items.node.image === null ? '' : items.node.image.fixed.src}
                        data-item-name={items.node.name}
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
        </div>
      </>
    );
  }
}

IndexPost.propTypes = {
  data: PropTypes.shape({}),
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
  query StoreQuery {
    allContentfulProduct{
      edges{
        node{
          id
          name
          slug
          rating
          image {
            fixed(width: 1000, height: 500) {
              width
              height
              src
              srcSet
            }
          }
          price
          details {
            childMarkdownRemark {
              excerpt(pruneLength: 140)
            }
          }
        }
      }
    }
  }
`;
