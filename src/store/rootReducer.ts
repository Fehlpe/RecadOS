import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './modules/user/UserSlice';
import noteSlice from './modules/user/NoteSlice';

export default combineReducers({
    userSlice,
    noteSlice
});