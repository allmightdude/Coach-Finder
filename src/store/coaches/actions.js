export default {
    async registerCoach(context , coach){
        const userId = context.rootGetters.userId;
        const newCoach = {
            firstName : coach.firstName,
            lastName : coach.lastName,
            description : coach.description,
            hourlyRate : coach.hourlyRate,
            areas : coach.areas,
        }

        await context.commit('registerCoach' , {
            id : userId,
            ...newCoach 
        })
    }
}