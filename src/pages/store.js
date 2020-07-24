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
    let filterCategory = [];

    if (data.location.state) {
      filterCategory = data.data.allContentfulProduct.edges.filter((x) => (

        x.node.category.name === data.location.state.ele.node.name));
    } else {
      filterCategory = data.data.allContentfulProduct.edges;
    }


    return (
      <>
        <div className="row product-main" onScroll={this.onScrollEvent}>
          {filterCategory.map((items) => (
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
                  <p className="author-link">
                    <span>
                      por
                    </span>

                    <Link to={`/${items.node.author.slug}`} className="bm-item">
                      {' '}
                      {items.node.author.name}
                    </Link>
                  </p>

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
  query MyQuery7 {
    allContentfulProduct{
      edges{
        node{
          id
          name
          category {
            name
          }
          author {
            name
            slug
          }
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
        }
      }
    }
  }
`;
