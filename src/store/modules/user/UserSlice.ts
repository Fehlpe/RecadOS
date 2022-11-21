import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../..'
import User from '../../../utils/interfaces/InterfaceUser'

const adapter = createEntityAdapter<User>({
   selectId: (parameter) => parameter.uid
});

const usersSlice = createSlice({
   name: 'usersSlice',
   initialState: adapter.getInitialState(),
   reducers: {
    addUser: adapter.addOne,
    removeUser: adapter.removeOne,
    updateUser: adapter.updateOne,
   }
})

export const { selectAll, selectById } = adapter.getSelectors(
   (state: RootState) => state.userSlice
)

export const { addUser, removeUser, updateUser } = usersSlice.actions

export default usersSlice.reducer