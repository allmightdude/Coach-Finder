export default {
  async registerCoach(context, coach) {
    const userId = context.rootGetters.userId;
    const newCoach = {
      firstName: coach.firstName,
      lastName: coach.lastName,
      description: coach.description,
      hourlyRate: coach.hourlyRate,
      areas: coach.areas,
    };

    let response = await fetch(
      `https://coach-app-3d02c-default-rtdb.firebaseio.com/coaches/${userId}.json` , {
        method : "PUT",
        body : JSON.stringify(newCoach)
      }
    );

    let responseData = response.json();

    console.log(responseData);
    if(!response.ok){
        // handle error
    }

    context.commit("registerCoach", {
      id: userId,
      ...newCoach,
    });
  },
};
