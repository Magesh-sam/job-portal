import { Job } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  jobs: [] as Job[],
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob(state, action: PayloadAction<Job>) {
      state.jobs.push(action.payload);
    },
    editJob(state, action: PayloadAction<Job>) {
      const { id } = action.payload;
      const index = state.jobs.findIndex((job) => job.id === id);

      if (index !== -1) {
        state.jobs[index] = action.payload;
      }
    },
    deleteJob(state, action: PayloadAction<string>) {
      const idToDelete = action.payload;
      state.jobs = state.jobs.filter((job) => job.id !== idToDelete);
    },
  },
});

export const { addJob, editJob, deleteJob } = jobsSlice.actions;
export default jobsSlice.reducer;
