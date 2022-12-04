export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      `https://coach-app-3d02c-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );
    if (!response.ok) {
      const error = new Error(response.message || "Failed to send requests");
      throw error;
    }

    const responseData = await response.json();
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit("addRequest", newRequest);
  },

  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;

    const response = await fetch(
      `https://coach-app-3d02c-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(response.message || "Failed to fetch requests");
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
        const request = {
            id : key ,
            userEmail : responseData[key].userEmail,
            message : responseData[key].message
        }
        requests.push(request);
    }
    console.log(requests);

    context.commit('setRequests' , requests);
  },
};
