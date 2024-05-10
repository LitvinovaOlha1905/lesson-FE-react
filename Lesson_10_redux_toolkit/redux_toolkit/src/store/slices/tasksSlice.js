import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  list: []
}

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const json = res.json()
  return json
});


const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    delete_task(state, action){
      state.list = state.list.filter(el => el.id !== action.payload)
    },
    delete_all_tasks(state){
      state.list = []
    },
    change_status(state, action){
      const target_task = state.list.find(el => el.id === action.payload);
      target_task.completed = !target_task.completed
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.list = action.payload
        state.status = 'ready'
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = 'error'
      })
  }
})

export default tasksSlice.reducer;
export const { delete_task, delete_all_tasks, change_status } = tasksSlice.actions;
