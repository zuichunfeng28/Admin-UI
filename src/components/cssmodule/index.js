/**
 * @Date 2019-01-17
 */

 import React from 'react';
 import BreadcrumbCustom from '../BreadcrumbCustom';
 import styles from './index.module.less';
import { Row, Col, Card } from 'antd';





 export default class CssModule extends React.Component{
     render(){
         return (
            <div>
                <BreadcrumbCustom first="cssModule"/>
                <Row gutter={16}>
                      <Col md={24}>
                           <Card title="cssModule" bordered={false}>
                                  <div className={styles.header}>
                                        <p>Hello CssModule</p>
                                  </div>
                           </Card>
                      </Col>
                </Row>
            </div>
         );
     }
 }