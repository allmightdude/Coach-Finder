import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  state(){
    return{
      userId : 'c23',
      token : null
    }
  },
  getters,
  mutations,
  actions
}