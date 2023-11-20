import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'dark',
}

const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload
    },
  },
})

export const { changeTheme } = commonSlice.actions
export default commonSlice.reducer
