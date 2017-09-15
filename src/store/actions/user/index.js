import * as types from '../../constants/actionTypes';
import http from '../../../utils/http'

/*设置常量*/

// 每页个数
const PAGE_SIZE = 10

const fetchUserInfo = (useruuid) => {
  return http.get('/goods/getGoodsList/' + useruuid)
}

export const getUserInfo = (useruuid) => {
  return (dispatch, getState) => {
    return fetchUserInfo(useruuid).then((res) => {
      if (res.status === 200) {
        console.log(res)
        // dispatch(setUserInfo(res.data));
      } else {
        alert(res)
      }
    });
  };
};

export const setUserInfo = (data) => {
  return {type: types.SET_USERINFO, data};
};
