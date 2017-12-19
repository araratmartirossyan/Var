/* eslint-disable */
import * as types from './mutation-types'

export const getUser = ({ commit, dispatch }) => {

  wilddog.auth().onAuthStateChanged(function(user) {
    const currentUser = wilddog.auth().currentUser
    if (currentUser) {
      const user_uid = currentUser.uid
      commit('SET_LOGIN_USER_UID', user_uid)
      const userRef = wilddog.sync().ref().child('users').child(user_uid)
      userRef.once('value').then(data => {
        const userInfo = data.val()
        if (userInfo) {
          commit('USER', userInfo)
          commit('USER_LOGIN', true)
          return {
            ...currentUser,
            ...userInfo
          }
        } else return currentUser
      })
    } else {
      commit('USER_SIGNOUT')
    }
  })
}

export const login = ({ commit, state, rootState }, { form }) => {
  const { email, password } = form
  wilddog.auth().signInWithEmailAndPassword(email, password).then((user) => {
    const userData = { ...user }
    commit('USER', userData)
    commit('USER_LOGIN', true)
  })
  .catch((error) => {
    console.log(error)
  })
}

export const signUp = ({ commit, state }, { form }) => {
  const { email, password, name } = form
  wilddog.auth().createUserWithEmailAndPassword(email, password).then((user) => {
    wilddog.sync().ref('users').child(user.uid)
    .set({
      email: email,
      name: name,
      uid: user.uid,
      created_at: Date.now()
    })
    .then(() => {
      console.log('User created')
    })
    // dispatch('getUser')
  })
  .catch((error) => {
    console.log(error)
  })
}



export const signOut = ({ commit }) => {
  wilddog.auth().signOut(() => {
    commit('USER_SIGNOUT')
    commit('SET_LOGIN_USER_UID', '')
  })
}
