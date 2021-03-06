import Vue from 'vue'
export const state = () => ({
  vendors: null
})

export const getters = {
  getVendorData: (state) => state.vendors
}

export const actions = {
  setVendorData({commit, dispatch}, data) {
    commit('SET_VENDOR_DATA', data)
  },
}

export const mutations = {
  SET_VENDOR_DATA(state, data) {
    state.vendors = data
  }
}
