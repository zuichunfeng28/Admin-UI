/**
 * @Dete 2019-01-05
 */
import React from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import EchartsViews from './EchartsView';
import EchartsProjects from './EchartsProjects';
import headerImg from '@/style/imgs/2.jpg';

export default class Dashboard extends React.Component {
    render(){
        return (
            <div className="gutter-example button-demo" >
                <BreadcrumbCustom />
                <Row gutter={10}>
                     <Col className="gutter-row" md={4}>
                          <div className="gutter-box">
                               <Card bordered={false}>
                                    <div className="clear y-center">
                                        <div className="pull-left mr-m">
                                              <Icon type="heart" className="text-2x text-danger"/>
                                        </div>
                                        <div className="clear">
                                             <div className="text-muted">收藏</div>
                                             <h2>301</h2>
                                        </div>
                                    </div>      
                               </Card>
                          </div>
                          <div className="gutter-box">
                               <Card bordered={false}>
                                    <div className="clear y-center">
                                         <div className="pull-left mr-m">
                                             <Icon type="cloud" className="text-2x"/>
                                         </div>
                                         <div className="clear">
                                              <div className="text-muted">云数据</div>
                                              <h2>30122</h2>
                                         </div>
                                    </div>
                               </Card>
                          </div>
                     </Col>
                     <Col className="gutter-row" md={4}>
                         <div className="gutter-box">
                               <Card bordered={false}>
                                    <div className="clear y-center">
                                         <div className="pull-left mr-m">
                                             <Icon type="camera" className="text-2x text-info"/>
                                         </div>
                                         <div className="clear">
                                              <div className="text-muted">照片</div>
                                              <h2>1002</h2>
                                         </div>
                                    </div>
                               </Card>
                         </div>
                         <div className="gutter-box">
                               <Card bordered={false}>
                                    <div className="clear y-center">
                                         <div className="pull-left mr-m">
                                             <Icon type="mail" className="text-2x text-success"/>
                                         </div>
                                         <div className="clear">
                                              <div className="text-muted">邮件</div>
                                              <h2>702</h2>
                                         </div>
                                    </div>
                               </Card>
                         </div>
                     </Col>
                     <Col className="gutter-row" md={16}>
                          <div className="gutter-box">
                              <Card bordered={false} className={'no-padding'}>
                                  <EchartsProjects />
                              </Card>
                          </div>
                     </Col>
                </Row>
                <Row gutter={10}>
                     <Col className="gutter-row" md={8}>
                         <div className="gutter-box">
                             <Card bordered={false}>
                                 <div className="pb-m">
                                      <h3>任务</h3>
                                      <small>10个已经完成,2个待完成,1个正在进行中</small>
                                 </div>
                                 <span className="card-tool"><Icon type="sync" /></span>
                                 <Timeline>
                                     <Timeline.Item color="green">新版本迭代会</Timeline.Item>
                                     <Timeline.Item color="green">完成网站设计初版</Timeline.Item>
                                     <Timeline.Item color="red">
                                          <p>联调接口</p>
                                          <p>功能验收</p>
                                     </Timeline.Item>
                                     <Timeline.Item color="#108ee9">
                                           <p>登录功能设计</p>
                                           <p>权限验证</p>
                                           <p>页面排版</p>
                                     </Timeline.Item>
                                 </Timeline>
                             </Card>
                         </div>
                     </Col>
                     <Col className="gutter-row" md={8}>
                         <div className="gutter-box">
                             <Card bordered={false}>
                                <div className="pb-m">
                                     <h3>消息栏</h3>
                                </div>
                                <span className="card-tool"><Icon type="sync"/></span>
                                <ul className="list-group no-border">
                                     <li className="list-group-item">
                                          <span className="pull-left w-40 mr-m">
                                              <img src={headerImg} className="img-responsive img-circle" alt="test"></img>
                                          </span>
                                          <div className="clear">
                                               <span className="block">欧阳锋</span>
                                               <span className="text-muted">耶,沙发哟~~</span>
                                          </div>
                                     </li>
                                     <li className="list-group-item">
                                          <span className="pull-left w-40 mr-m">
                                              <img src={headerImg} className="img-responsive img-circle" alt="test"></img>
                                          </span>
                                          <div className="clear">
                                               <span className="block">黄药师</span>
                                               <span className="text-muted">哈哈,抢到第二排</span>
                                          </div>
                                     </li>
                                     <li className="list-group-item">
                                          <span className="pull-left w-40 mr-m">
                                              <img src={headerImg} className="img-responsive img-circle" alt="test"></img>
                                          </span>
                                          <div className="clear">
                                               <span className="block">段皇爷</span>
                                               <span className="text-muted">阿弥陀佛,幸会,幸会 哈哈~~</span>
                                          </div>
                                     </li>
                                     <li className="list-group-item">
                                          <span className="pull-left w-40 mr-m">
                                              <img src={headerImg} className="img-responsive img-circle" alt="test"></img>
                                          </span>
                                          <div className="clear">
                                               <span className="block">洪七</span>
                                               <span className="text-muted">哎呀,糟糕,光顾着吃东西去了，晚点了~~</span>
                                          </div>
                                     </li>
                                </ul>
                             </Card>
                         </div>
                     </Col>
                     <Col className="gutter-row" md={8}>
                           <div className="gutter-box">
                                <Card bordered={false}>
                                      <div className="pb-m">
                                           <h3>访问量统计</h3>
                                           <small>最近7天用户访问量</small>
                                      </div>
                                      <span className="card-tool"><Icon type="sync"/></span>
                                      <EchartsViews />
                                </Card>
                           </div>
                     </Col>
                </Row>
            </div>
        );
    }
}