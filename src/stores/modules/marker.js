/* eslint import/no-unresolved: [2, { commonjs: true }] */
import * as types from '../mutation-types'

const state = {
  marker: {},
  hongbao: ''
}

const getters = {
  marker: () => state.marker,
  getHongbao: () => state.hongbao
}

const mutations = {
  [types.GET_MARKER](sub, { marker }) {
    state.marker = marker
  },
  [types.SET_HONGBAO](sub, { success }) {
    state.hongbao = success
  }
}

const actions = {
  getMarker({ commit, getters }, id) {
    if (id) {
      const marker = wilddog.sync().ref(`points/${id}`) // eslint-disable-line
      marker.once('value')
        .then((data) => {
          const marker = data.val()
          commit('GET_MARKER', { marker })
        })
        .catch((err) => {
          console.log('err', err)
        })
    } else console.error('did not send marker id (getMarker)')
  },
  setHongbao({ commit }, id, userId) {
    if (id && userId) {
      const marker = wilddog.sync().ref(`points/${id}/users`) // eslint-disable-line
      marker.push({ id, userId })
      .then((data) => {
        console.log(data)
        const success = data.val()
        commit('SET_HONGBAO', { success })
      })
      .catch(err => console.log(err))
    } else console.error('did not send marker id or userId (setHongbao)')
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}
