import React, {Component} from 'react';
import { ContentHeader } from 'components';
import { Grid, Col, Row } from 'react-bootstrap';
import { caseGroupBox } from '../../db/jsonData/caseGroup';
import { Link } from 'react-router';
import { objToArr } from '../../utils/blogTools';

export default class Case extends Component {

  render() {
    const styles = require('./Case.scss');
    const caseGroup = objToArr(caseGroupBox);
    return (
      <Grid>
        <ContentHeader info="我们不懈努力，只为您和您家人的健康"/>
          <Row className={styles.contentBox}>
                {
                  caseGroup.map((val, key) => {
                    return (
                        <Col md={3} className={styles.groupContent} key={key}>
                          <Link to={`/caseDetail/${val.id}`}>
                            <figure className={styles.figure}>
                              <img className={styles.imgScreen} src={require(val.photoUrl)} alt="image" original={require(val.photoUrl)}/>
                              <figcaption className={styles.figcaption}>
                                <h3>{val.title}</h3>
                                <h4 dangerouslySetInnerHTML={{__html: val.note.substring(0, 150)}}></h4>
                              </figcaption>
                            </figure>
                          </Link>
                        </Col>
                    );
                  })
                }
          </Row>
      </Grid>
    );
  }
}
