import React, {Component} from 'react';
import { ContentHeader } from 'components';
import { Grid, Col, Row } from 'react-bootstrap';

export default class Recruitment extends Component {

  render() {
    const styles = require('./Recruitment.scss');
    const textImgArr = {
      img: [
        'http://7xlw89.com1.z0.glb.clouddn.com/img/job/career1.jpg',
        'http://7xlw89.com1.z0.glb.clouddn.com/img/job/career2.jpg',
        'http://7xlw89.com1.z0.glb.clouddn.com/img/job/career3.jpg',
        'http://7xlw89.com1.z0.glb.clouddn.com/img/job/career4.jpg',
        'http://7xlw89.com1.z0.glb.clouddn.com/img/job/career5.jpg',
        'http://7xlw89.com1.z0.glb.clouddn.com/img/job/career6.jpg',
        'http://7xlw89.com1.z0.glb.clouddn.com/img/job/career7.jpg'
      ],
      describe: [
        '硅谷高新科技与传统中医学的完美结合',
        '专业致力于科学研究的精英医疗团队',
        '人性化的看护，只为了您满意的笑容',
        '人性化的看护，只为了您满意的笑容',
        '人性化的看护，只为了您满意的笑容',
        '人性化的看护，只为了您满意的笑容',
        '人性化的看护，只为了您满意的笑容'
      ]
    };

    return (
      <Grid>
        <ContentHeader info="加入梦想团队，协同乘风破浪。"/>
        <Row>
          { textImgArr.img.map((item, level) => {
            return (
              <Col md={12} className={styles.contentBox} key={level}>
                <div className={styles.newsImage}>
                  <img className={styles.lazy} src={item} alt={textImgArr.describe[level]}/>
                </div>
              </Col>
            );
          }) }
        </Row>
      </Grid>
    );
  }
}
