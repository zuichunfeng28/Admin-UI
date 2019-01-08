/**
 * @Date 2019-01-07
 */

 import React from 'react';

 export default class Page extends React.Component{
     render(){
         return (
             <div style={{ height: '100%'}}>
                 { this.props.children}
             </div>
         );
     }
 }