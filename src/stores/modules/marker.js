/* eslint import/no-unresolved: [2, { commonjs: true }] */
import * as types from '../mutation-types'

const state = {
  marker: {}
}

const getters = {
  marker: () => state.marker
}

const mutations = {
  [types.GET_MARKER](sub, { marker }) {
    state.marker = marker
  }
}

const actions = {
  getMarker({ commit, getters }, id) {
    const marker = wilddog.sync().ref().child('points').child(id) // eslint-disable-line
    marker.once('value')
      .then((data) => {
        const marker = data.val()
        commit('GET_MARKER', { marker })
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}
