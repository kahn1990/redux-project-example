import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from 'redux/modules/info';

@connect(
    state => ({info: state.info.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class PartOne extends Component {

  render() {
    const styles = require('./PartOne.scss');
    return (
      <section className={styles.sectionContainer + ' box-sizing-b-b'}>
        <div className={styles.videoContainer}>
          <video className={styles.videoTag} id="headerVideo" autoPlay="autoplay" loop="loop" muted="">
            <source src="http://7xlw89.com1.z0.glb.clouddn.com/video/reborn2.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.titleContent}>
            <h1>欢迎来到瑞博科技</h1>
            <h4>来自美国硅谷的高科技医疗团队 | 专业致力于二型糖尿病治疗研究</h4>
          </div>
        </div>
      </section>
    );
  }
}
