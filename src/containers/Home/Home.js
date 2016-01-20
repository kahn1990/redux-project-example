import React, { Component } from 'react';
import { HomePartOne, HomePartTwo, HomePartThree, HomePartFour, HomePartFive, HomePartSix, HomePartSeven } from 'components';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <HomePartOne/>
        <HomePartTwo/>
        <HomePartThree/>
        <HomePartFour/>
        <HomePartFive/>
        <HomePartSix/>
        <HomePartSeven/>
      </div>
    );
  }
}
