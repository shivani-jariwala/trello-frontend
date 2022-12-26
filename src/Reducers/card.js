export const defaultState = {
  cardId: "",
  title: "",
  labels: [],
  members: [],
  watchers: [],
  activities: [],
  checklists: [],
  owner: "",
  description: "",
  date: {
    startDate: null,
    dueDate: null,
    dueTime: null,
    completed: false,
  },
  attachments: [],
  cover: {
    color: null,
    isSizeOne: null,
  },
  colors: [
    { bg: "#61bd4f", hbg: "#519839" },
    { bg: "#f2d600", hbg: "#d9b51c" },
    { bg: "#ff9f1a", hbg: "#cd8313" },
    { bg: "#eb5a46", hbg: "#b04632" },
    { bg: "#c377e0", hbg: "#89609e" },
    { bg: "#0079bf", hbg: "#055a8c" },
    { bg: "#344563", hbg: "#172b4d" },
    { bg: "#ff78cb", hbg: "#c75bad" },
  ],
  pending: false,
};

export default function card(state = defaultState, action) {
  console.log(action);
  switch (action.type) {
    case "SET_PENDING":
      return Object.assign({}, state, {
        pending : action.payload
      });
    case "SET_CARD":
      return Object.assign({}, state, {
        cardId : action.payload._id,
			title : action.payload.title,
			labels : action.payload.labels,
			members : action.payload.members,
			watchers : action.payload.watchers,
			activities : action.payload.activities,
			owner : action.payload.owner,
			listTitle : action.payload.listTitle,
			listId : action.payload.listId,
			boardId : action.payload.boardId,
			description : action.payload.description,
			checklists : action.payload.checklists,
			date : action.payload.date,
			attachments : action.payload.attachments,
			cover : action.payload.cover,
      });
    case "UPDATE_TITLE":
      return Object.assign({}, state, {
        title : action.payload
      });
    case "UPDATE_DESCRIPTION":
      return Object.assign({}, state, {
        description : action.payload
      });
    case "ADD_COMMENT":
      return Object.assign({}, state, {
        activities : action.payload
      });
    case "UPDATE_COMMENT":
    //     const { commentId, text } = action.payload;
	// 		state.activities = state.activities.map((activity) => {
	// 			if (activity._id === commentId) {
	// 				activity.text = text;
	// 			}
	// 			return activity;
	// 		});
    //   return Object.assign({}, state, {
    //     backgroundImageLink: action.payload.background,
    //     isImage: action.payload.isImage,
    //   });
    case "DELETE_COMMENT":
      return Object.assign({}, state, {
        activities : state.activities.filter((act) => act._id !== action.payload)
      });
    // case "UPDATE_START_DUE_DATES":
    //     const { startDate, dueDate, dueTime } = action.payload;
	// 		state.date.startDate = startDate;
	// 		state.date.dueDate = dueDate;
	// 		state.date.dueTime = dueTime;
	// 	if (dueDate === null) state.date.completed = false;
    //   return Object.assign({}, state, {
    //     date.startDate : startDate,
    //     date.dueDate : dueDate,
    //     date.dueTime : dueTime,
    //   });
    // case "UPDATE_DATE_COMPLETED":
    //   return Object.assign({}, state, {
    //     date.completed : action.payload
    //   });
    case "ADD_MEMBERS":
      return Object.assign({}, state, {
        members: action.payload,
      });
    default:
      return state;
  }
}
