import React, {Component} from 'react';
import { ContentHeader } from 'components';
import { Grid, Col, Row } from 'react-bootstrap';
import { productGroupBox } from '../../db/jsonData/productGroup';
import { objToArr } from '../../utils/blogTools';

export default class Product extends Component {

  render() {
    const styles = require('./Product.scss');
    const productGroup = objToArr(productGroupBox);
    return (
      <Grid>
        <ContentHeader info="我们不懈努力，只为您和您家人的健康"/>
          {
            productGroup.map((val, key) => {
              return (
                <Row className={styles.contentBox} key={key}>
                  <Col className={styles.imgBox} md={4}>
                    <img className={styles.imgScreen} src={require(val.image_url)} alt="Image"/>
                  </Col>
                  <Col md={8} className={styles.textContent}>
                      <h4 className={styles.textTitleName}>{val.name_cn}</h4>
                      <h5 className={styles.zeroColor}>{val.name_en}</h5>
                      <p className={styles.textWordsDec}>{val.desc_cn}</p>
                      <div className={styles.payType}>
                        <div className={styles.payAlipay}>
                          <input className={styles.userPhone} type="hidden" name="userId" value=""/>
                          <input className={styles.productId} type="hidden" name="productId" value={val.product_uid}/>
                          <p className={styles.payAlipayDes}>{val.price_rmb}人民币/{val.unit_cn}</p>
                          <button className={styles.btnCart} disabled="disabled"></button>
                        </div>
                        <div className={styles.payPaypal}>
                          <p className={styles.payAlipayDes}>{val.price_usd}美金/{val.unit_cn}</p>
                          <form className={styles.vertical_align_cell} action="https://www.paypal.com/cgi-bin/webscr" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart"/>
                              <input type="hidden" name="add" value="1"/>
                              <input type="hidden" name="business" value="lotosseller2014@gmail.com"/>
                              <input type="hidden" name="item_name" value="METABOLIC CAPSULE"/>
                              <input type="hidden" name="amount" value={val.price_usd}/>
                              <input type="hidden" name="currency_code" value="USD"/>
                              <input type="hidden" name="return" value="http://localhost/minicartjs.com/?success"/>
                              <input type="hidden" name="cancel_return" value="http://localhost/minicartjs.com/?cancel"/>
                              <input type="hidden" name="continue_shopping" value=""/>
                              <input type="hidden" name="return" value="http://www.xzdiabetes.com/return.html"/>
                              <input type="submit" className={styles.paypalBtn} value=""/>
                            </fieldset>
                          </form>
                        </div>
                      </div>
                  </Col>
              </Row>
              );
            })
          }
      </Grid>
    );
  }
}
