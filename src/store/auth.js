export default {
  namespaced: true,
  state() {
    return {
      isAuthenticated: false,
      payload: {
         email: "",
         password: "",
         firstname: "",
         lastname: "",
      }
    };
  },
   mutations: {
      registerUser(state, payload) {
         state.payload = payload;
         localStorage.setItem("payload", JSON.stringify(payload));

      },
      loginUser(state) {
         state.isAuthenticated = true;
       localStorage.setItem("state", JSON.stringify(state));
      }
   }
};
