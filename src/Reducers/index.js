/**
 * Redux reducers are defined in this folder
 * Export them from your index file
 *
 * DO NOT call combineReducers here. That is done for you
 * in store/index.js
 *
 *
 */
 import user from './user';
 import boards from './boards';
 import list from './list';
 import board from './board';
 import alert from './alert';
 import card from './card';
 export default {
   user,
   boards,
   list,
   board,
   alert,
   card
 };
 