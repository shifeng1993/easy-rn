import * as types from '../../constants/actionTypes';

/*设置常量*/

// 每页个数
const PAGE_SIZE = 10

const fetchUserInfo = (useruuid) => {
  return http.get('/user/getUserInfo/' + useruuid)
}

export const getUserInfo = (useruuid) => {
  return (dispatch, getState) => {
    return fetchUserInfo(useruuid).then((res) => {
      if (res.status === 200) {
        dispatch(setUserInfo(res.data));
      } else {
        alert(res)
      }
    });
  };
};

export const setUserInfo = (data) => {
  return {type: types.SET_USERINFO, data};
};
