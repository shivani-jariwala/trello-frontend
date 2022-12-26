export const defaultState = {
  userInfo: null,
  isAuthenticated: null,
  pending: true,
  loading: false,
  // token: localStorage.getItem("token"),
  token: null,
};
        
export default function user(state = defaultState, action) {
  console.log(action);
  switch (action.type) {
    case "REGISTRATION_START":
        return Object.assign({}, state, {
        pending: true,
      });
    case "REGISTRATION_END":
      return Object.assign({}, state, {
        pending: false,
      });
    case "LOGIN_START":
      return Object.assign({}, state, {
        pending: true,
      });
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.user.token);
      return Object.assign({}, state, {
        pending: false,
        isAuthenticated: true,
        userInfo: action.payload.user,
        token: action.payload.user.token,
      });
    case "LOGIN_FAILURE":
      localStorage.removeItem("token");
      return Object.assign({}, state, {
        pending: false,
        isAuthenticated: false,
        token: action.payload.user.token,
      });
    default:
      return state;
  }
}

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     registrationStart: (state) => {
//       state.pending = true;
//     },
//     registrationEnd: (state) => {
//       state.pending = false;
//     },
//     loginStart: (state) => {
//       state.pending = true;
//     },
//     loginSuccess: (state, action) => {
//       state.pending = false;
//       state.isAuthenticated = true;
//       state.userInfo = action.payload.user;
//       state.token = action.payload.user.token;
//       localStorage.setItem("token", action.payload.user.token);
//     },
//     loginFailure: (state) => {
//       state.pending = false;
//       state.isAuthenticated = false;
//       localStorage.removeItem("token");
//     },
//     loadStart: (state) => {
//       state.pending = true;
//     },
//     loadSuccess: (state, action) => {
//       state.isAuthenticated = true;
//       state.userInfo = action.payload.user;
//       state.token = localStorage.getItem("token");
//       state.pending = false;
//     },
//     loadFailure: (state) => {
//       state.pending = false;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.userInfo = null;
//       state.token = null;
//       localStorage.removeItem("token");
//     },
//     fetchingStart: (state)=>{
//       state.loading = true;
//     },
//     fetchingFinish: (state) => {
//       state.loading = false;
//     },
//     addNewBoard: (state,action) => {
//       state.userInfo.boards.unshift(action.payload);
//     }
//   },
// });

// export const {
//   registrationStart,
//   registrationEnd,
//   loginStart,
//   loginFailure,
//   loginSuccess,
//   loadStart,
//   loadSuccess,
//   loadFailure,
//   logout,
//   fetchingStart,
//   fetchingFinish,
//   addNewBoard
// } = userSlice.actions;
// export default userSlice.reducer;
