import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Login = () => (
  <Layout>
    <SEO title="Login" keywords={['gatsby', 'Login', 'react']} />
    <div className="Contact-us">
      <div className="container">
        <form action="https://formspree.io/alternatura@gmail.com" method="POST" name="contact">
          <div>
            <label>
              Your Email:
              <input type="email" name="email" required />
            </label>
          </div>
          <div>
            <label>
              PassWord:
              <input type="password" name="password" required />
            </label>
          </div>
          <div>
            <button type="submit" required>Login</button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
);

export default Login;
