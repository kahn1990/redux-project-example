import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

export default class PageFooterMoudle extends Component {
  static propTypes = {
    info: PropTypes.object.isRequired
  };

  render() {
    const {info} = this.props;
    const styles = require('./PageFooterMoudle.scss');

    return (
      <div>
        <ul className={styles.pagement}>
          <li className={styles.prev}>
            <Link to={info.prevPageIndex}>{info.prevPageWords}</Link>
          </li>
          <li className={styles.nextPage}>
            <Link to={info.lastPageIndex}>{info.lastPageWords}</Link>
          </li>
        </ul>
        <div className={styles.textCenter} md={12}>
          <Link to={info.backHomeIndex} className={styles.btnZero}>返回病例首页</Link>
        </div>
      </div>
    );
  }
}
