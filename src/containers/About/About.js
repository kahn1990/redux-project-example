import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

export default class About extends Component {

  render() {
    const textImgArr = {
      img: [require('./about1s.jpg'), require('./about2s.jpg'), require('./about3s.jpg')],
      title: ['先进技术', '质量保障', '贴心服务'],
      describe: ['硅谷高新科技与传统中医学的完美结合', '专业致力于科学研究的精英医疗团队', '人性化的看护，只为了您满意的笑容']
    };
    const styles = require('./About.scss');
    return (
      <link href="http://apps.bdimg.com/libs/animate.css/3.1.0/animate.min.css" rel="stylesheet">
    <Grid>
      <Row className={styles.contentHeader}>
        <Col xs={12} md={12} className={styles.contentHeaderBox}>
          <h5 className={styles.contentHeaderTitle}>进则救世，退则救民；不能为良相，亦当为良医。</h5>
        </Col>
      </Row>
      <Row className={styles.contentBase}>
        <Col md={12} className={styles.contentWords}>
          <h2 className={styles.h2}>“</h2>
          <h3 className={styles.subTitle}>出身于美国硅谷高新科技中心的我们，长期秉承着严谨的科学研究作风，致力于研究二型糖尿病的治愈与治疗二十余年。同时传承了中国中医药之精髓，将针灸、中医与高科技相结合，整合出了一套专业、高效的二型糖尿病治疗手段。我们一直为了您真正的健康而努力！</h3>
          <h2 className={styles.h2}>”</h2>
        </Col>
      </Row>
      <Row className={styles.contentImg}>
        { textImgArr.img.map((item, level) => {
          return (
            <Col xs={6} md={4} key={level}>
              <div className={styles.contactBox}>
                <img src={item}/>
                <h5 className={styles.h5}>{textImgArr.title[level]}</h5>
                <p className={styles.p}>{textImgArr.describe[level]}</p>
              </div>
            </Col>
          );
        }) }
      </Row>
    </Grid>
    );
  }
}
