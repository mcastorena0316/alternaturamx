import React from 'react';
import Layout from '../components/layout';

class Signin extends React.Component {
  render() {
    return (
      <Layout>
        <div className="Contact-us">
          <div className="container">
            <form name="contact">
              <div>
                <label>
                  Username:
                  <input type="email" name="email" required />
                </label>
              </div>
              <div>
                <label>
                  Your Email:
                  <input type="email" name="email" required />
                </label>
              </div>
              <div>
                <label>
                  Password:
                  <input type="password" name="password" required />
                </label>
              </div>
              <div>
                <label>
                  Password Confirmation:
                  <input type="password" name="password" required />
                </label>
              </div>
              <div>
                <button type="button" required>Signin</button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Signin;
