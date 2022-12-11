export default {
    userId(state){
        return state.userId;
    },
    token (state){
        return state.token;
    },
    isAuthenticated(state){
        return !!state.token;
    },
    isCoach(state){
        console.log(!!state.isCoach);
        return state.isCoach
    }
}