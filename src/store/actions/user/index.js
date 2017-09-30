import * as types from '../../constants/actionTypes';

/*设置常量*/

// 每页个数
const PAGE_SIZE = 10;

export const getUserInfo = (useruuid) => {
  return (dispatch, getState) => {
    return http.get('/user/getUserInfo/' + useruuid).then((res) => {
      if (res.status === 200) {
        dispatch(setUserInfo(res.data));
      } else {
        alert(res)
      }
    });
  };
};

export const patchUserInfo = (useruuid, params) => {
  return (dispatch, getState) => {
    params.useruuid = useruuid
    return http.patch('/user/setUserInfo', params).then((res) => {
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

export const setUserUuid = (data) => {
  return {type: types.SET_USERUUID, data};
};

export const setNickName = (data) => {
  return {type: types.SET_NICKNAME, data};
};


