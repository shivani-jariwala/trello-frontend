export const defaultState = {
  id: "",
  title: "",
  backgroundImageLink: "",
  isImage: true,
  lists: [],
  members: [],
  activity: [],
  loading: true,
  description: "",
  activityLoading: false,
};

export default function board(state = defaultState, action) {
  console.log(action);
  switch (action.type) {
    case "SET_LOADING":
      return Object.assign({}, state, {
        loading: action.payload.loading,
      });
    case "SUCCESS_FETCHING_BOARD":
      return Object.assign({}, state, {
        id: action.payload._id,
        title: action.payload.title,
        backgroundImageLink: action.payload.backgroundImageLink,
        isImage: action.payload.isImage,
        lists: action.payload.lists,
        members: action.payload.members,
        activity: action.payload.activity,
        description: action.payload.description,
      });
    case "UPDATE_TITLE":
      return Object.assign({}, state, {
        title: action.payload,
      });
    case "UPDATE_ACTIVITY":
      return Object.assign({}, state, {
        activity: action.payload,
      });
    case "UPDATE_DESCRIPTION":
      return Object.assign({}, state, {
        description: action.payload,
      });
    case "UPDATE_BACKGROUND":
      return Object.assign({}, state, {
        backgroundImageLink: action.payload.background,
        isImage: action.payload.isImage,
      });
    case "ADD_MEMBERS":
      return Object.assign({}, state, {
        members: action.payload,
      });
    default:
      return state;
  }
}
