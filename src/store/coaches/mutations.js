export default {
    registerCoach(state , coach){
        state.coaches.push(coach);
        console.log(state.coaches);
    },
    setCoaches(state , coaches){
        state.coaches = coaches;
        console.log(coaches);
    },
    setTimestamp(state){
        state.lastFetch = new Date().getTime();
    }
}