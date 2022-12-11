export default {
  setUser(state, payload) {
    (state.token = payload.token),
      (state.userId = payload.userId),
      (state.isCoach = payload.isCoach),
      (state.didAutoLogout = false);
  },
  isCoach(state, isCoach) {
    console.log(`is : `, isCoach);
    state.isCoach = isCoach;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  },
};
