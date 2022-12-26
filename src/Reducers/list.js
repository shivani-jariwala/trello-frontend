export const defaultState = {
    allLists: [],
	loadingListService: true,
  };
          
  export default function list(state = defaultState, action) {
    console.log(action);
    switch (action.type) {
      case "SET_LOADING":
          return Object.assign({}, state, {
            loadingListService: action.payload,
        });
      case "SUCCESS_CREATING_LIST":
        return Object.assign({}, state, {
          pending: false,
        });
      case "SUCCESS_FETCHING_LIST":
        return Object.assign({}, state, {
          pending: true,
        });
      case "SUCCESS_DELETING_LIST":
        localStorage.setItem("token", action.payload.user.token);
        return Object.assign({}, state, {
          pending: false,
          isAuthenticated: true,
          userInfo: action.payload.user,
          token: action.payload.user.token,
        });
      case "DELETE_CARD":
        localStorage.removeItem("token");
        return Object.assign({}, state, {
          pending: false,
          isAuthenticated: false,
          token: action.payload.user.token,
        });
        case "SUCCESS_CREATING_CARD":
        localStorage.removeItem("token");
        return Object.assign({}, state, {
          pending: false,
          isAuthenticated: false,
          token: action.payload.user.token,
        });
        case "UPDATE_CARD_DRAG_DROP":
        localStorage.removeItem("token");
        return Object.assign({}, state, {
          pending: false,
          isAuthenticated: false,
          token: action.payload.user.token,
        });
        case "UPDATE_LIST_DRAG_DROP":
        localStorage.removeItem("token");
        return Object.assign({}, state, {
          pending: false,
          isAuthenticated: false,
          token: action.payload.user.token,
        });
        case "SET_CARD_TITLE":
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
