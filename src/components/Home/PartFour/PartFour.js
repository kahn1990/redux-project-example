import React, {Component} from 'react';

export default class PartFour extends Component {

  render() {
    const styles = require('./PartFour.scss');
    const researchS = require('./research_S.png');
    const bigdataS = require('./bigdata_S.png');
    const quickS = require('./quick_S.png');
    const intelS = require('./intel_S.png');
    const intel = require('./intel.png');
    const bigdata = require('./bigdata.png');
    const research = require('./research.png');
    const quick = require('./quick.png');
    const circle = require('./circle.png');
    const leftImgAlt = '北京瑞博科技有限公司';
    return (
      <section className={styles.sectionContainer + ' box-sizing-b-b'}>
        <div className={styles.uniqueAdvantageContainer}>
          <h1 className={styles.topTitle}>我们的独特优势</h1>
          <div className={styles.bottomBox}>
            <div className={styles.leftBox + ' ' + styles.moduleBox}>
              <div className={styles.tdList}>
                <div className={styles.titleBox + ' box-sizing-b-b'}>
                  <img className={styles.leftImg} src={researchS} alt={leftImgAlt}/>
                  <h1 className={styles.title + ' box-sizing-b-b color_1'}>多年的专业研究</h1>
                </div>
                <span className={styles.words + ' box-sizing-b-b'}>来自硅谷的中医团队，集成中医学精华而自创天道中医学派，遵循最古老的中医逻辑和最现代的西医科技，综合了中国的饮食、养生传统和美国的现代营养学最新知识，致力于Ⅱ型糖尿病研究近20年。</span>
              </div>
              <div className={styles.tdList}>
                <div className={styles.titleBox + ' box-sizing-b-b'}>
                  <img className={styles.leftImg} src={bigdataS} alt={leftImgAlt}/>
                  <h1 className={styles.title + ' box-sizing-b-b color_2'}>大数据分析</h1>
                </div>
                <span className={styles.words + ' box-sizing-b-b'}>成熟的云端大数据采集、分析平台。通过对海量数据的特殊建模，挖掘具有高洞察力、决策力的信息，在细节上不断迭代、优化产品开发。</span>
              </div>
            </div>
            <div className={styles.centerBox}>
              <img className={styles.centerImg} src={circle} alt={leftImgAlt}/>
              <img className={styles.poImg_1} src={research} alt={leftImgAlt}/>
              <img className={styles.poImg_2} src={quick} alt={leftImgAlt}/>
              <img className={styles.poImg_3} src={bigdata} alt={leftImgAlt}/>
              <img className={styles.poImg_4} src={intel} alt={leftImgAlt}/>
            </div>
            <div className={styles.rightBox + ' ' + styles.moduleBox}>
              <div className={styles.tdList}>
                <div className={styles.titleBox + ' box-sizing-b-b'}>
                  <img className={styles.leftImg} src={quickS} alt={leftImgAlt}/>
                  <h1 className={styles.title + ' box-sizing-b-b color_3'}>快速有效的解决方案</h1>
                </div>
                <span className={styles.words + ' box-sizing-b-b'}>患者病情一般在3-7日内出现大幅扭转，2-5周内可将大多数患者使用的胰岛素以及西药全部撤出，并且维持血糖比在使用胰岛素以及西药条件下更为稳定的状态</span>
              </div>
              <div className={styles.tdList}>
                <div className={styles.titleBox + ' box-sizing-b-b'}>
                  <img className={styles.leftImg} src={intelS} alt={leftImgAlt}/>
                  <h1 className={styles.title + ' box-sizing-b-b color_4'}>智能平台</h1>
                </div>
                <span className={styles.words + ' box-sizing-b-b'}>高系统性、个性化的智能平台，为患者打造定向定量的专属线上、线下服务，帮助患者养成正确的生活方式，摆脱药物依赖，摆脱病痛束缚。</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
