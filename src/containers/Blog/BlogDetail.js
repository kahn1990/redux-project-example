import React, { Component, PropTypes } from 'react';
import { ContentHeader } from 'components';
import { Grid, Col, Row } from 'react-bootstrap';
import { objToArr, backPrevIndexAndLastIndexByArr } from '../../utils/blogTools';
import { Link } from 'react-router';
/* import * as blogActions from 'redux/modules/blog'; */
import {connect} from 'react-redux';

@connect(
    state => ({
      setBlog: state.uiData.setBlog.data
    })
)

export default class BlogDetail extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    setBlog: PropTypes.object.isRequired
  };

  render() {
    const styles = require('./Blog.scss');
    const {params, setBlog} = this.props;
    const nowBid = params.bid;
    const blogGroupToArr = objToArr(setBlog);
    const blogGroup = setBlog[nowBid];
    const blogFirstPageId = blogGroupToArr[0].id;
    const blogFastPageId = blogGroupToArr[blogGroupToArr.length - 1].id;
    const prevAndLastIndexObj = backPrevIndexAndLastIndexByArr(nowBid, blogGroupToArr);
    const prevPageLink = {
      indexs: ( prevAndLastIndexObj.prevPageStatus === false) ? blogFirstPageId : prevAndLastIndexObj.prevPageId,
      words: ( prevAndLastIndexObj.prevPageStatus === false) ? '首页' : '上一篇'
    };
    const lastPageLink = {
      indexs: ( prevAndLastIndexObj.lastPageStatus === false) ? blogFastPageId : prevAndLastIndexObj.lastPageId,
      words: ( prevAndLastIndexObj.lastPageStatus === false) ? '首页' : '下一篇'
    };
    console.log(blogGroup.photoUrl);
    return (
      <div>
        <Grid>
          <ContentHeader info="唯博文者，进思绪，通事理，立人格，而有所成"/>
          <Row>
            <Col md={12} className={styles.contentBox}>
              <div className={'col-md-2'}>
                <img className={styles.imgShort} src={require(blogGroup.photoUrl)} alt="Image"/>
              </div>
              <div className={styles.author + ' col-md-5'}>
                <div>{blogGroup.author}</div>
                <div>
                  <span>{blogGroup.date}</span>
                </div>
              </div>
              <div className={styles.tag + ' col-md-5'}>
                {blogGroup.tag}
              </div>
              <div className={styles.smallImgBox + ' col-md-12'}>
                <img className={styles.smallImg} src={require(blogGroup.photoUrl)} alt="Image"/>
              </div>
              <div className={styles.title + ' col-md-12'}>
                {blogGroup.title}
              </div>
              <div className={styles.text + ' col-md-12'} dangerouslySetInnerHTML={{__html: blogGroup.note}}>
              </div>
              <ul className={styles.pagement}>
                <li className={styles.prev}>
                  <Link to={`/caseDetail/${prevPageLink.indexs}`}>{prevPageLink.words}</Link>
                </li>
                <li className={styles.nextPage}>
                  <Link to={`/caseDetail/${lastPageLink.indexs}`}>{lastPageLink.words}</Link>
                </li>
              </ul>
              <div className={styles.textCenter} md={12}>
              <Link to={`/case`} className={styles.btnZero}>返回病例首页</Link>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
