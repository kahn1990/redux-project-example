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
    const titleWords = '���������������񣻲���Ϊ���࣬�൱Ϊ��ҽ��';
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
