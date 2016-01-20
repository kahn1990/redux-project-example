import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from 'redux/modules/info';

@connect(
    state => ({info: state.info.data}),
    dispatch => bindActionCreators({load}, dispatch))

export default class PartSix extends Component {
  static propTypes = {
    editing: PropTypes.object.isRequired,
    editStart: PropTypes.func.isRequired
  };

  render() {
    const styles = require('./PartSix.scss');
    const imgArr = [require('./6-1.png'), require('./6-2.png'), require('./6-3.png'), require('./6-4.png'), require('./6-5.png'),
      require('./6-6.png'), require('./6-7.png'), require('./6-8.png'), require('./6-9.png'), require('./6-10.png'), require('./6-11.png')
    ];
    const words = require('./config.json');
    const imgGreen = require('./green.png');
    const imgLeft = require('./left.png');
    const imgRight = require('./right.png');
    const imgAlt = '北京瑞博科技有限公司';
    let tdListStyle = 0;
    let costIndex = 8;
    const imgLeftClick = (event) => {
      event.preventDefault();
      const {editStart} = this.props; // eslint-disable-line no-shadow
      if ( costIndex <= 0 ) {
        return false;
      }
      costIndex = costIndex - 1;
      tdListStyle = tdListStyle - 300;
      React.findDOMNode(this.refs.tdListStyle).style.marginLeft = String(tdListStyle) + 'px';
      console.log(tdListStyle );
      return () => editStart(String(event.id));
    };
    const imgRightClick = (event) => {
      event.preventDefault();
      const {editStart} = this.props; // eslint-disable-line no-shadow
      if ( costIndex >= 8 ) {
        return false;
      }
      costIndex = costIndex + 1;
      tdListStyle = tdListStyle + 300;
      React.findDOMNode(this.refs.tdListStyle).style.marginLeft = String(tdListStyle) + 'px';
      return () => editStart(String(event.id));
    };

    return (
      <section className={styles.sectionContainer + ' box-sizing-b-b'}>
        <div className={styles.therapeuticEffectContainer}>
          <h1 className={styles.topTitle}>治疗病例</h1>
          <div className={styles.bottomBox + ' box-sizing-b-b'}>
            <div className={styles.tdBox}>
              <div className={styles.tdBoxList} style={{'marginLeft': String(tdListStyle) + 'px'}} ref="tdListStyle">
                { imgArr.map((item, level) => {
                  return (
                    <div className={styles.tdList + ' box-sizing-b-b'} key={level}>
                      <img className={styles.showImgFull} src={item} alt={imgAlt}/>
                      <div className={styles.tdContent}>
                        <span className={styles.title}>{words[level].title}</span>
                        <span className={styles.words}>{words[level].words}</span>
                        <span className={styles.words + ' ' + styles.bottom20}>{words[level].wordsTwo}</span>
                      </div>
                    </div>
                  );
                }) }
                <div className={styles.tdList + ' box-sizing-b-b displayBlock'}>
                  <img className={styles.showImgFull} src={imgGreen} alt={imgAlt}/>
                  <span className={styles.titleLink}></span>
                </div>
              </div>
            </div>
            <img className={styles.tdLeft} src={imgLeft} alt="左面按钮" onClick={imgLeftClick}/>
            <img className={styles.tdRight} src={imgRight} alt="右面按钮" onClick={imgRightClick.bind(this)}/>
          </div>
        </div>
      </section>
    );
  }
}
