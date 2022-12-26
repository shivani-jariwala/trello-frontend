/* Redux actions are defined here
function action(payload) {
  return {
    type: 'ACTION_NAME',
    payload,
  };
}
*/

export function registrationStart() {
  return {
    type: "REGISTRATION_START",
    payload: null,
  };
}

export function registrationEnd() {
  return {
    type: "REGISTRATION_END",
    payload: null,
  };
}

export function loginStart() {
  return {
    type: "LOGIN_START",
    payload: null,
  };
}

export function loginSuccess(info) {
  return {
    type: "LOGIN_SUCCESS",
    payload: {
        info
    },
  };
}

export function loginFailure() {
  return {
    type: "LOGIN_FAILURE",
    payload: null,
  };
}

export function startFetchingBoards() {
  return {
    type: "START_FETCHING_BOARDS",
    payload: null,
  };
}

export function successFetchingBoards() {
  return {
    type: "SUCCESS_FETCHING_BOARDS",
    payload: null,
  };
}

export function failFetchingBoards() {
  return {
    type: "FAIL_FETCHING_BOARDS",
    payload: null,
  };
}

export function startCreatingBoard() {
  return {
    type: "START_CREATING_BOARDS",
    payload: null,
  };
}

export function successCreatingBoard() {
  return {
    type: "SUCCESS_CREATING_BOARDS",
    payload: null,
  };
}

export function failCreatingBoard() {
  return {
    type: "FAIL_CREATING_BOARDS",
    payload: null,
  };
}

export function setLoading(info) {
  return {
    type: "SET_LOADING",
    payload: info,
  };
}

export function successFetchingBoard(info) {
  return {
    type: "SUCCESS_FETCHING_BOARD",
    payload: info,
  };
}

export function updateTitle() {
  return {
    type: "UPDATE_TITLE",
    payload: null,
  };
}

export function updateActivity() {
  return {
    type: "UPDATE_ACTIVITY",
    payload: null,
  };
}

export function updateDescription() {
  return {
    type: "UPDATE_DESCRIPTION",
    payload: null,
  };
}

export function updateBackground() {
  return {
    type: "UPDATE_BACKGROUND",
    payload: null,
  };
}

export function addMembers() {
  return {
    type: "ADD_MEMBERS",
    payload: null,
  };
}

export function successCreatingList() {
  return {
    type: "SUCCESS_CREATING_LIST",
    payload: null,
  };
}

export function successFetchingLists(info) {
  return {
    type: "SUCCESS_FETCHING_LIST",
    payload: info,
  };
}

export function successDeletingList() {
  return {
    type: "SUCCESS_DELETING_LIST",
    payload: null,
  };
}

export function deleteCard() {
  return {
    type: "DELETE_CARD",
    payload: null,
  };
}

export function successCreatingCard() {
  return {
    type: "SUCCESS_CREATING_CARD",
    payload: null,
  };
}

export function updateCardDragDrop() {
  return {
    type: "UPDATE_CARD_DRAG_DROP",
    payload: null,
  };
}

export function updateListDragDrop(info) {
  return {
    type: "UPDATE_LIST_DRAG_DROP",
    payload: info,
  };
}

export function setCardTitle() {
  return {
    type: "SET_CARD_TITLE",
    payload: null,
  };
}

export function setPending() {
  return {
    type: "SET_PENDING",
    payload: null,
  };
}

export function setCard() {
  return {
    type: "SET_CARD",
    payload: null,
  };
}

export function updateTitle() {
  return {
    type: "UPDATE_TITLE",
    payload: null,
  };
}

export function updateDescription() {
  return {
    type: "UPDATE_DESCRIPTION",
    payload: null,
  };
}

export function addComment() {
  return {
    type: "ADD_COMMENT",
    payload: null,
  };
}

export function updateComment() {
  return {
    type: "UPDATE_COMMENT",
    payload: null,
  };
}

export function openAlert(info) {
  return {
    type: "OPEN_ALERT",
    payload: info,
  };
}

export function closeAlert() {
  return {
    type: "CLOSE_ALERT",
    payload: null,
  };
}


