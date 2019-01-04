/**
 * @Date   2019-01-04 
 */

/**
 * 获取url 参数
 */
 export const queryString = () => {
      let _queryString = {};
      //获取从问号 (?) 开始的 URL
      const _query = window.location.search.substr(1);
      //获取参数传递的个数
      const _vars = _query.split('&');

      _vars.forEach((v) => {
           const _pair = v.split('=');
           //object.hasOwnProperty() 判断对象是否包含特定的自身（非继承）属性
           if(!_queryString.hasOwnProperty(_pair[0])){
               //decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码
               _queryString[_pair[0]] = decodeURIComponent(_pair[1]);
           }else if(typeof _queryString[_pair[0]] === 'string'){
               const _arr = [_queryString[_pair[0]], decodeURIComponent(_pair[1])];
               _queryString[_pair[0]] = _arr;
           }else{
               _queryString[_pair[0]].push(decodeURIComponent[_pair[1]]);
           }
      });

      return _queryString;
 }