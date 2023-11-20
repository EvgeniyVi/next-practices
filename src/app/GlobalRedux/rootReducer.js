'use client'

import { combineReducers } from '@reduxjs/toolkit'
import commonSlice from './Features/common/commonSlice'

export const rootReducer = combineReducers({
  common: commonSlice,
})
