import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userState {
    users: User[],
}
interface User {
    id: number;
    metamaskAddress: string;
  }
const initialState: userState = {
    users: [],
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload.id)
        },
        updateUser: (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if(index !== -1){
                state.users[index] = action.payload
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser, updateUser } = usersSlice.actions

export default usersSlice.reducer