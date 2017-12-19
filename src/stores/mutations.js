/* eslint-disable */
import * as types from './mutation-types'

export default {
  [types.USER_LOGIN](state, login) {
    console.log(login)
    state.login = login
  },
  [types.SET_LOGIN_USER_UID](state, uid) {
    state.login_user_uid = uid
  },
  [types.UPDATE_CREDS](state, form) {
    console.log(form)
    state.credentials = { ...form }
  },
  [types.USER](state, userData) {
    state.user = userData
    let uid = userData.uid
    localStorage.setItem('uid', uid)
  },
  [types.LOGIN_MODEL](state, model) {
    state.signupModel = false
    state.loginModel = model
  },
  [types.USER_SIGNOUT](state) {
    state.login = false
    state.loginModel = false
    state.signupModel = false
    state.user = {}
    localStorage.removeItem('uid')
  }
}
