import React, { Component, PropTypes } from 'react';
import { ContentHeader, PageFooterMoudle } from 'components';
import { Grid, Col, Row } from 'react-bootstrap';
import { caseGroupBox } from '../../db/jsonData/caseGroup';
import { objToArr, backPrevIndexAndLastIndexByArr } from '../../utils/blogTools';


export default class CaseDetail extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  };

  render() {
    const styles = require('./Case.scss');
    const {params} = this.props;
    const nowCid = params.cid;
    const caseGroupToArr = objToArr(caseGroupBox);
    const caseGroup = caseGroupBox[nowCid];
    const caseFirstPageId = caseGroupToArr[0].id;
    const caseFastPageId = caseGroupToArr[caseGroupToArr.length - 1].id;
    const prevAndLastIndexObj = backPrevIndexAndLastIndexByArr(nowCid, caseGroupToArr);
    const prevPageLink = {
      indexs: ( prevAndLastIndexObj.prevPageStatus === false) ? caseFirstPageId : prevAndLastIndexObj.prevPageId,
      words: ( prevAndLastIndexObj.prevPageStatus === false) ? '首页' : '上一篇'
    };
    const lastPageLink = {
      indexs: ( prevAndLastIndexObj.lastPageStatus === false) ? caseFastPageId : prevAndLastIndexObj.lastPageId,
      words: ( prevAndLastIndexObj.lastPageStatus === false) ? '末页' : '下一篇'
    };
    const pageFooterMoudlePostObj = {
      'prevPageIndex': '/caseDetail/' + prevPageLink.indexs,
      'prevPageWords': prevPageLink.words,
      'lastPageIndex': '/caseDetail/' + lastPageLink.indexs,
      'lastPageWords': lastPageLink.words,
      'backHomeIndex': '/case'
    };
    return (
      <Grid>
        <ContentHeader info="我们不懈努力，只为您和您家人的健康"/>
        <Row className={styles.contentBox}>
          <Col md={12} className={styles.CaseDetailBoxTitle}>
              <div className={styles.imgBox}>
                  <img className={styles.imgSrceen} src="http://7xlw89.com1.z0.glb.clouddn.com/img/case/case01.jpg" alt="Image"/>
              </div>
              <h4 className={styles.h4Title}>{caseGroup.title}</h4>
          </Col>
          <Col md={12}>
            <div className={styles.wordsBox}>
                <span className={styles.wordsTitle}>
                  <strong className={styles.zeroColor}>{caseGroup.date}</strong>{caseGroup.addre}
                </span>
                <p className={styles.wordsContent}>{caseGroup.content}</p>
            </div>
            <PageFooterMoudle info={pageFooterMoudlePostObj}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}
