import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../..'
import Note from '../../../utils/interfaces/InterfaceNote'

const adapter = createEntityAdapter<Note>({
   selectId: (parameter) => parameter.uid
})

const noteSlice = createSlice({
   name: 'noteSlice',
   initialState: adapter.getInitialState(),
   reducers: {
    addNote: adapter.addOne,
    removeNote: adapter.removeOne,
    updateNote: adapter.updateOne,
   }
})

export const { selectAll, selectById } = adapter.getSelectors(
    (state: RootState) => state.noteSlice
)

export const {addNote, removeNote, updateNote} = noteSlice.actions

export default noteSlice.reducer