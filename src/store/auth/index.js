import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  state(){
    return{
      userId : 'c24',
      token : null
    }
  },
  getters,
  mutations,
  actions
}