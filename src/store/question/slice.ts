import { createSlice } from '@reduxjs/toolkit';

const createRandomCells = (tableSize: number): boolean[][] => {
  return Array(tableSize)
    .fill(Array(tableSize).fill(true))
    .map((row) => row.map(() => Math.random() < 0.3));
};

export type QuestionState = {
  tableSize: number;
  cells: boolean[][];
};

const DEFAULT_TABLE_SIZE = 5;
const initialState: QuestionState = {
  tableSize: DEFAULT_TABLE_SIZE,
  cells: createRandomCells(DEFAULT_TABLE_SIZE),
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    reset: (state) => {
      state.cells = createRandomCells(state.tableSize);
    },
  },
});

export const actions = questionSlice.actions;
