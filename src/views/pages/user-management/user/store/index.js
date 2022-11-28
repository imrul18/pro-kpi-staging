// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getAllData = createAsyncThunk('appUsers/getAllData', async () => {
  const response = await axios.get('/employees')
  return response
})

export const getData = createAsyncThunk('appUsers/getData', async params => {
  const response = await axios.get(`/employee`, {email: 'admin@example.com', password: '123456'})
  return {
    params,
    data: response.data.users,
    totalPages: response.data.total
  }
})

export const getUser = createAsyncThunk('appUsers/getUser', async id => {
  const response = await axios.get('/api/users/user', { id })
  return response.data.user
})

export const addUser = createAsyncThunk('appUsers/addUser', async (user, { dispatch, getState }) => {
  await axios.post('/apps/users/add-user', user)
  await dispatch(getData(getState().users.params))
  await dispatch(getAllData())
  return user
})

export const deleteUser = createAsyncThunk('appUsers/deleteUser', async (id, { dispatch, getState }) => {
  await axios.delete('/apps/users/delete', { id })
  await dispatch(getData(getState().users.params))
  await dispatch(getAllData())
  return id
})

export const appUsersSlice = createSlice({
  name: 'appUsers',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: [],
    selectedUser: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // .addCase(getAllData.fulfilled, (state, action) => {
      //   state.allData = action.payload
      // })
      // .addCase(getData.fulfilled, (state, action) => {
      //   state.data = action.payload.data
      //   state.params = action.payload.params
      //   state.total = action.payload.totalPages
      // })
      .addCase(getUser.fulfilled, (state, action) => {
        state.allData = action.payload
      })
  }
})

export default appUsersSlice.reducer
