import { createSlice } from '@reduxjs/toolkit';

const TABLE_SIZE = 6;
const INITIAL_CELLS = Array(TABLE_SIZE)
  .fill(Array(TABLE_SIZE).fill(true))
  .map((row) => row.map(() => Math.random() < 0.3));

export type QuestionState = {
  cells: boolean[][];
};

const initialState: QuestionState = {
  cells: INITIAL_CELLS,
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {},
});
