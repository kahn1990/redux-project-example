import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Helmet from 'react-helmet';
import { FooterLayout } from 'components';
import config from '../../config';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <Navbar fixedTop className={styles.navbar}>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{color: '#fff'}}>
                <div className={styles.brand}/>
                <span>瑞博科技</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse eventKey={0}>
            <Nav navbar>
              <LinkContainer to="/blog">
                <NavItem eventKey={2} className={styles.colorFFF}>博客</NavItem>
              </LinkContainer>
              <LinkContainer to="/case">
                <NavItem eventKey={3} className={styles.colorFFF}>治疗病例</NavItem>
              </LinkContainer>
              <LinkContainer to="/Product">
                <NavItem eventKey={4} className={styles.colorFFF}>辅助产品</NavItem>
              </LinkContainer>
              <LinkContainer to="/Recruitment">
                <NavItem eventKey={5} className={styles.colorFFF}>招聘信息</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem eventKey={6} className={styles.colorFFF}>关于我们</NavItem>
              </LinkContainer>

            </Nav>
            {/* user &&
            <p className={styles.loggedInMessage + ' navbar-text'}>Logged in as <strong>{user.name}</strong>.</p> */}
            <Nav navbar pullRight>
              {/* !user &&
              <LinkContainer to="/login">
                <NavItem eventKey={7} className={styles.colorFFF}>Login</NavItem>
              </LinkContainer> */}
              {/* user &&
              <LinkContainer to="/logout">
                <NavItem eventKey={1} className={styles.colorFFF + 'logout-link'} onClick={this.handleLogout}>
                  Logout
                </NavItem>
              </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className={styles.appContent}>
          {this.props.children}
        </div>
        <FooterLayout/>
      </div>
    );
  }
}
