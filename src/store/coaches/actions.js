export default {
  async registerCoach(context, coach) {
    const userId = context.rootGetters.userId;
    const newCoach = {
      firstName: coach.firstName,
      lastName: coach.lastName,
      description: coach.description,
      hourlyRate: coach.hourlyRate,
      caption: coach.caption,
      areas: coach.areas,
    };

    const token = context.rootGetters.token;

    let response = await fetch(
      `https://coach-app-3d02c-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${token}`,
      {
        method: "PUT",
        body: JSON.stringify(newCoach),
      }
    );

    if (!response.ok) {
      // handle error
    }
    context.commit("registerCoach", {
      id: userId,
      ...newCoach,
    });
  },

  async loadCoaches(context, payload) {
    if (!context.getters.shouldUpdate && !payload.forceRefresh) {
      return;
    }

    const response = await fetch(
      "https://coach-app-3d02c-default-rtdb.firebaseio.com/coaches.json"
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(response.message || "Failed to Fetch!");
      throw error;
    }

    const coaches = [];
    for (const key in responseData) {
      const newCoach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        caption: responseData[key].caption,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(newCoach);
    }
    context.commit("setCoaches", coaches);
    context.commit("setTimestamp");
  },
};
