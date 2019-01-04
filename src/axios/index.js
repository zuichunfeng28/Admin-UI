/**
 * @Date 2019-01-04
 * 
 */

 import axios from 'axios';
 import { get } from './tools';
 import * as config from './config';


 export const getPros = () => axios.post('http://api.xitu.io/resources/github',{
      category: 'trending',
      period: 'day',
      lang: 'javascript',
      offset: 0,
      limit: 30
 }).then(function (response) {
      return response.data;
 }).catch(function (error){
       console.error(error);
 });



 export const npmDependencies = () => axios.get('./npm.json').then(res => res.data).catch(error => console.error(error));


 export const weibo = () => axios.get('./weibo.json').then(res => res.data).catch( error => console.error(error));


 const GIT_OAUTH = 'https://github.com/login/oauth';

 export const gitOauthLogin = () => axios.post(`${GIT_OAUTH}/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:8000/&scope=user&state=reactAdmin`);

 export const gitOauthToken = code => axios.post('https://cors-anywhere.herokuapp.com/' + GIT_OAUTH + '/access_token', { ...{client_id: '792cdcd244e98dcd2dee',
           client_secret: '81c4ff9df390d482b7c8b214a55cf24bf1f53059', redirect_uri: 'http://localhost:8000/', state: 'reactAdmin'}, code: code}, { headers: { Accept: 'application/json'}})
           .then(res => res.data).catch(error => console.error(error));


export const gitOauthInfo = access_token => axios({
      method: 'get',
      url: 'https://api.github.com/user?access_token=' + access_token,
}).then(res => res.data).catch(error => console.error(error));


/**
 * easy-mock数据交互
 * 管理员权限获取数据
 */
export const admin = () => get({ url: config.MOCK_AUTH_ADMIN });

/**
 * 访问权限获取数据
 */
export const guest = () => get({ url: config.MOCK_AUTH_VISITOR});