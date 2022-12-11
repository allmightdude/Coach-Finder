export default {
    setUser(state , payload){
        state.token = payload.token,
        state.userId = payload.userId,
        state.tokenExpiration = payload.tokenExpiration,
        state.isCoach = payload.isCoach;
    },
    isCoach(state , isCoach){
        console.log(`is : ` , isCoach);
        state.isCoach = isCoach;
    }
}