export default {
    coaches(state){
        return state.coaches;
    },
    hasCoaches(state){
        return state.coaches && state.coaches.length > 0;
    },
    isCoach(_ , getters , _2 , rootGetters){
        const userId = rootGetters.userId;
        const coaches = getters.coaches;

        return coaches.some(coach => coach.id === userId);
    },
    numberOfCoaches(state){
        return state.coaches.length - 1 ;
    },
    shouldUpdate(state){    
        const lastFetch = state.lastFetch;

        if(!lastFetch){
            return true;
        }

        const currentTime = new Date().getTime();
        return (currentTime - lastFetch) / 1000 > 60;
    }
}