/**
 * @Date 2019-01-09
 */

 import React from 'react';
 import ExpandedTable from './ExpandedTable';
 import EditableTable from './EditableTable';
 import BreadcrumbCustom from '../BreadcrumbCustom';
 import FixedTable from './FixedTable';
import { Row, Col, Card } from 'antd';


 export default class AdvancedTables extends React.Component{
     render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="表格" second="高级表格" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="固定列" bordered={false}>
                                <FixedTable />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="可展开" bordered={false}>
                                <ExpandedTable />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="可编辑" bordered={false}>
                                <EditableTable />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
 }