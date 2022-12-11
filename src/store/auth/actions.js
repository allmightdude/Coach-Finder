export default {
  async login(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "login",
    });

  },

  async signup(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signup",
    });
  },

  async auth(context, payload) {
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOKpkI4zlaIlR1w9L3GCuTm69mrFGzCHo";

    if (payload.mode === "signup") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOKpkI4zlaIlR1w9L3GCuTm69mrFGzCHo";
    }

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        response.message || "Failed to authenticate , check your data"
      );
      throw error;
    }

    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },

  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const isCoach = JSON.parse(localStorage.getItem("isCoach"));
    
    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
        tokenExpiration: null,
        isCoach : isCoach
      });
    }
  },

  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('isCoach');

    context.commit("setUser", {
      token: null,
      userId: null,
      tokenExpiration: null,
      isCoach: false
    });
  },

  isCoach(context , payload){
    localStorage.setItem('isCoach' , JSON.stringify(payload.isCoach));
    context.commit("isCoach", payload.isCoach);
  }
};
