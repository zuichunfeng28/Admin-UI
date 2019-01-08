/**
 * @Date 2019-01-08
 */
import React from 'react';
import { Button } from 'antd/lib/radio';
import { Icon, Table } from 'antd';

const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name', render: text =><span>{text}</span> },
    { title: 'Age', dataIndex: 'age', key: 'age'},
    { title: 'Address', dataIndex: 'address', key: 'address'},
    { title: 'Action', key: 'action', render: (text, record) => (
         <span>
              <Button>Action -- {record.name}</Button>
              <span className="ant-divider"/>
              <Button>Delete</Button>
              <span className="ant-divider"/>
              <Button className="ant-dropdown-link">More actions<Icon type="down"/></Button>
         </span>
    )}
];


const data = [
      { key: '1', name: 'zhangsan', age: 28, address: '北京'},
      { key: '2', name: 'lisi', age: 33, address: '上海'},
      { key: '3', name: 'wanglaowu', age: 44, address: '广州'}
];


const BasicTable = () => (
     <Table columns={columns} dataSource={data}/>
)

export default BasicTable;