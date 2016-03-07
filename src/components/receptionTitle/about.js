import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from 'redux/modules/info';

@connect(
    state => ({info: state.info.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class FooterLayout extends Component {

  render() {
    const styles = require('./about.scss');
    const titleWords = '进则救世，退则救民；不能为良相，亦当为良医。';
    return (
      <header class="videoBg">
        <div class="container">
          <div class="col-xs-12 videoBgContent">
            <h5>{titleWords}</h5>
          </div>
        </div>
      </header>
    );
  }
}
