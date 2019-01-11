/**
 * @Date 2019-01-10
 */

 import React from 'react';
 import { getBbcNews } from '@/axios';
 import BreadcrumbCustom from '../BreadcrumbCustom';

 const columns = [
     {
         title: '新闻标题',
         dataIndex: 'title',
         width: 100,
         render: (text, record) => <a href={record.url} target="_blank" rel="noopener noreferrer">{text}</a>
     },
     {
         title: '作者',
         dataIndex: 'author',
         width: 80
     },
     {
         title: '发布时间',
         dataIndex: 'publishTime',
         width: 80
     },
     {
         title: '描述',
         dataIndex: 'description',
         width: 200
     }
 ];


 export default class AsynchronousTable extends React.Component{
       state = {
           selectedRowKeys: [],// Check here to configure the default column
           loading: false,
           data: []
       };

       componentDidMount(){
           this.start();
       }

       start = () => {
           this.setState( { loading: true });
           getBbcNews().then(({articles}) => {
               this.setState({
                   data: articles,
                   loading: false
               });
           });
       };


       onSelectedChange = (selectedRowKeys) => {
            console.log('selectedRowKeys changed: ', selectedRowKeys);
            this.setState({ selectedRowKeys });
       };

       render(){
           const { loading, selectedRowKeys } = this.state;
           const rowSelection = {
               selectedRowKeys,
           };
       }
 }