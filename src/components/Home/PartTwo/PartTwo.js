import React, {Component} from 'react';

export default class PartTwo extends Component {

  render() {
    const styles = require('./PartTwo.scss');
    const leftImg = require('./wp.png');
    const leftImgAlt = '北京瑞博科技有限公司';
    return (
      <section className={styles.sectionContainer + ' box-sizing-b-b'}>
        <div className={styles.earthTitleContainer}>
          <h1 className={styles.topTitle}>全球糖尿病现状</h1>
          <div className={styles.bottomBox}>
            <img className={styles.leftImg} src={leftImg} alt={leftImgAlt}/>
            <div className={styles.rightContent + ' box-sizing-b-b'}>
              <h4 className={styles.title}>4.15亿</h4>
              <span className={styles.words}>就联合国和国际糖尿病联盟发布的最新统计数据显示，2015年全球糖尿病患者总人数达4.15亿，预计在2040年达到6.42亿。</span>
              <h4 className={styles.title}>50%定律</h4>
              <span className={styles.words}>50%患者不知已患糖尿病，而已知患者并接受治疗的也只有50%；接受合理治疗并能达到预期的患者则仅占治疗患者6.25%。</span>
              <h4 className={styles.title}>90%</h4>
              <span className={styles.words}>II型糖尿病患者占总糖尿病患者的90%，而其中的90%胰岛素分泌正常。</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
