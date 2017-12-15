import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';
import './all.sass';
import './index.sass';
import 'font-awesome/css/font-awesome.min.css'

const Navbar = () => (
  <nav className="navbar is-transparent has-shadow">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
    </div>
  </nav>
);

const Menu = () => (
      <div className="menu">
        <ul className="menu-list">
          <li>
            <div className="compose has-text-centered">
              <a href="/submit-event" className="button is-danger is-block is-bold">
                <span className="compose">Compose</span>
              </a>
            </div>
          </li>
        </ul>
        <ul className="menu-list">
          <li>
            <a href="/" className="item active">
              Open events
            </a>
          </li>
          <li>
            <a href="/upcoming" className="item">
              Upcoming events
            </a>
          </li>
          <li>
            <a href="/past" className="item">
              Past events
            </a>
          </li>
          <li>
            <a href="/about" className="item">
              About
            </a>
          </li>
      </ul>
    </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home" />
    <Navbar />
    <div className="columns" id="app">
      <aside className="column is-3 aside hero is-fullheight">
        <Menu />
      </aside>
      <div className="column is-9 app-content">
        {children()}
      </div>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
