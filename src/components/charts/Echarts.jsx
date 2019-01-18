import React from 'react';
import EchartsArea from './EchartsArea';
import EchartsPie from './EchartsPie';
import EchartsEffectScatter from './EchartsEffectScatter';
import EchartsForce from './EchartsForce';
import { Row, Col, Card } from 'antd';



export default class Echarts extends React.Component{
    render(){
        return (
            <div className="gutter-example">
                 <Row gutter={16}>
                      <Col className="gutter-row" md={24}>
                           <div className="gutter-box">
                                 <Card title="区域图" bordered={false}>
                                       <EchartsArea />
                                 </Card>
                           </div>
                      </Col>
                 </Row>
                 <Row gutter={16}>
                      <Col className="gutter-row" md={12}>
                           <div className="gutter-box">
                                 <Card title="关系图" bordered={false}>
                                       <EchartsForce />
                                 </Card>
                           </div>
                      </Col>
                      <Col className="gutter-row" md={12}>
                           <div className="gutter-box">
                                 <Card title="饼状图" bordered={false}>
                                       <EchartsPie />
                                 </Card>
                           </div>
                      </Col>
                 </Row>
                 <Row gutter={16}>
                      <Col className="gutter-row" md={24}>
                           <div className="gutter-box">
                                 <Card title="散点图" bordered={false}>
                                       <EchartsEffectScatter />
                                 </Card>
                           </div>
                      </Col>
                 </Row>
            </div>
        );
    }
}