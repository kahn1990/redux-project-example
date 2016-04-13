import React, {Component} from 'react';

export default class PartSeven extends Component {

  render() {
    const styles = require('./PartSeven.scss');
    const leftImg = require('./workplace01.png');
    const leftImgAlt = '北京瑞博科技有限公司';
    return (
      <section className={styles.sectionContainer + ' box-sizing-b-b'}>
      <div className={styles.joinUsContainer}>
        <img className={styles.bgImg} src={leftImg} alt={leftImgAlt}/>
        <h1 className={styles.topTitle}>加入我们</h1>
        <span className={styles.words}>来参与改变，不做世界的旁观者</span>
      </div>
      </section>
    );
  }
}
