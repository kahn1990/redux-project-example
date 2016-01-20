import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from 'redux/modules/info';

@connect(
    state => ({info: state.info.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class PartFive extends Component {

  render() {
    const styles = require('./PartFive.scss');
    const arrowBack = require('./Arrow_Back.png');
    const arrowBackAlt = '北京瑞博科技有限公司';
    return (
      <section className={styles.sectionContainer + ' box-sizing-b-b'}>
        <div className={styles.therapeuticEffectContainer}>
          <h1 className={styles.topTitle}>治疗效果</h1>
          <div className={styles.bottomBox}>
            <div className={styles.poBox}>
              <img className={styles.contentImg} src={arrowBack} alt={arrowBackAlt}/>
              <div className={styles.po_1_1}>
                <span>75<i>%</i></span>
                <h4>康复率</h4>
              </div>
              <div className={styles.po_1_2}>
                <span>5名患者</span>
                <span>30-78岁</span>
                <span>有效率100%</span>
              </div>
              <div className={styles.po_1_3}>
                <h1>美国 | 硅谷</h1>
                <span>2015年2月</span>
              </div>
              <div className={styles.po_2_1}>
                <span>80<i>%</i></span>
                <h4>康复率</h4>
              </div>
              <div className={styles.po_2_2}>
                <span>10名患者</span>
                <span>40-83岁</span>
                <span>有效率100%</span>
              </div>
              <div className={styles.po_2_3}>
                <h1>杭州 | 虎跑山庄</h1>
                <span>2014年9月</span>
              </div>
              <div className={styles.po_3_1}>
                <span>63<i>%</i></span>
                <h4>康复率</h4>
              </div>
              <div className={styles.po_3_2}>
                <span>8名患者</span>
                <span>29-70岁</span>
                <span>有效率100%</span>
                <span>其中有一例Ⅰ型患者</span>
              </div>
              <div className={styles.po_3_3}>
                <h1>湖州 | 泊月湾</h1>
                <span>2015年7月</span>
              </div>
              <div className={styles.po_4_1}>
                <span>75<i>%</i></span>
                <h4>康复率</h4>
              </div>
              <div className={styles.po_4_2}>
                <span>20名患者</span>
                <span>16-76岁</span>
                <span>有效率100%</span>
              </div>
              <div className={styles.po_4_3}>
                <h1>湖州 | 泊月湾</h1>
                <span>2015年10月</span>
              </div>
              <div className={styles.po_5_1}>
                <span>82<i>%</i></span>
                <h4>康复率</h4>
              </div>
              <div className={styles.po_5_2}>
                <span>11名患者</span>
                <span>39-72岁</span>
                <span>有效率100%</span>
              </div>
              <div className={styles.po_5_3}>
                <h1>湖州 | 泊月湾</h1>
                <span>2015年11月</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
