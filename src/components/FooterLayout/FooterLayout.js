import React, {Component} from 'react';

export default class FooterLayout extends Component {

  render() {
    const styles = require('./FooterLayout.scss');
    const footerLogoImage = require('./logo_reborn2.png');
    const footerLogoImageAlt = '北京瑞博科技有限公司';
    return (
			<footer className={styles.footerLayout + ' box-sizing-b-b'}>
				<img className={styles.leftImg} src={footerLogoImage} alt={footerLogoImageAlt}/>
				<div className={styles.rightBox}>
					<span>北京市海淀区知春路7号致真大厦A座3层</span>
					<span>info@reborn-tech.com</span>
					<span>+86(010)82263430</span>
				</div>
			</footer>
		);
  }
}
