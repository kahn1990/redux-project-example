import React, {Component, PropTypes} from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

export default class ContentHeader extends Component {
  static propTypes = {
    info: PropTypes.string.isRequired
  };

  render() {
    const {info} = this.props;
    const styles = require('./ContentHeader.scss');

    return (
      <Grid>
      <Row className={styles.contentHeader}>
        <Col xs={12} md={12} className={styles.contentHeaderBox}>
          <h5 className={styles.contentHeaderTitle}>{info ? info : 'no info!'}</h5>
        </Col>
      </Row>
      </Grid>
    );
  }
}
