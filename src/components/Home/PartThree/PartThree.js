import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from 'redux/modules/info';

@connect(
    state => ({info: state.info.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class PartThree extends Component {

  render() {
    const styles = require('./PartThree.scss');
    const leftImgArr = [
      [require('./001.png'), require('./002.png'), require('./003.png'), require('./004.png')],
      [require('./011.png'), require('./012.png'), require('./013.png'), require('./014.png')]
    ];
    const words = require('./config.json');

    return (
      <section className={styles.sectionContainer + ' box-sizing-b-b'}>
        <div className={styles.contrastContainer}>
          { leftImgArr.map((itemOne, levelOne) => {
            return (
              <div className={( ( levelOne === 0 ) ? styles.leftBox : styles.rightBox ) + ' ' + styles.moduleBox} key={levelOne}>
                <div className={styles.topTitle}>
                  <h1>{words[levelOne].title.wordsOne}</h1>
                  <h4>{words[levelOne].title.wordsTwo}</h4>
                </div>
                <div className={styles.bottomContent + ' box-sizing-b-b'}>
                  { itemOne.map((itemTwo, levelTwo) => {
                    return (
                      <div className={styles.tdList} key={levelTwo}>
                        <img className={styles.leftImg} src={itemTwo} alt="北京瑞博科技有限公司"/>
                        <div className={styles.rightWords + ' box-sizing-b-b'}>
                          <h3>{words[levelOne].content[levelTwo].wordsOne}</h3>
                          <span>{words[levelOne].content[levelTwo].wordsTwo}</span>
                        </div>
                      </div>
                    );
                  }) }
                </div>
              </div>
            );
          }) }
        </div>
      </section>
    );
  }
}
