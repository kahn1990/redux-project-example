import React, {Component, PropTypes} from 'react';
import { ContentHeader } from 'components';
import { Grid, Col, Row } from 'react-bootstrap';
/* import { blogGroupBox } from '../../db/jsonData/blogGroup'; */
import { Link } from 'react-router';
import { objToArr } from '../../utils/blogTools';
import * as blogActions from 'redux/modules/blog';

import {connect} from 'react-redux';
/*
  被称为 “Dumb” Component，既其本身对 Redux 完全无知，
  它只知道从 this.props 获取需要的 Action Creator 并且了解其语义，
  适当的时候调用该方法。而 “Dumb” Component 需要展现的外部数据也来自于 this.props。
  如何为 “Dumb” Component 准备 this.props 呢？react-redux 提供的 connect 函数帮助你完成这个功能。
  connect将 state 的某个(些)属性映射到了 Component 的 this.props 属性中，
  同时也把针对特定的Action Creator 的 dispatch 方法传递给了this.props。
  这样在 Component 中仅仅通过 this.props 就可以完成 action dispatching 和 应用程序状态获取的动作。
  如果 connect 函数省掉第二个参数，那么 dispatch方法会被直接传递给 this.props。
*/
@connect(
  state => ({
    setBlog: state.uiData.setBlog.data
  }),
  {...blogActions})

export default class Blog extends Component {

  static propTypes = {
    setBlog: PropTypes.object.isRequired
  };

  render() {

    const styles = require('./Blog.scss');
    const {setBlog} = this.props;
    const blogGroup = objToArr(setBlog);

    return (
      <Grid>
        <ContentHeader info="进则救世，退则救民；不能为良相，亦当为良医。"/>
          <Row>
                {
                  blogGroup.map((val, key) => {
                    return (
                        <Col md={12} className={styles.contentBox} key={key}>
                          <div className={'col-md-2'}>
                            <img className={styles.imgShort} src={require(val.photoUrl)} alt="Image"/>
                          </div>
                          <div className={styles.author + ' col-md-5'}>
                            <div>{val.author}</div>
                            <div>
                              <span>{val.date}</span>
                            </div>
                          </div>
                          <div className={styles.tag + ' col-md-5'}>
                            {val.tag}
                          </div>
                          <div className={styles.smallImgBox + ' col-md-12'}>
                            <img className={styles.smallImg} src={require(val.photoUrl)} alt="Image"/>
                          </div>
                          <div className={styles.title + ' col-md-12'}>
                            {val.title}
                          </div>
                          <div className={styles.text + ' col-md-12'} dangerouslySetInnerHTML={{__html: val.note.substring(0, 150)}}>
                          </div>
                          <Link to={`/blogDetail/${val.id}`}>查看全文</Link>
                        </Col>
                    );
                  })
                }
          </Row>
      </Grid>
    );
  }
}
