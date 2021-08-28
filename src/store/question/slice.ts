import { createSlice } from '@reduxjs/toolkit';

// TODO: 設定用のsliceで保持して一元的に管理したい
const TABLE_SIZE = 5;

const createRandomCells = (tableSize: number = TABLE_SIZE): boolean[][] => {
  return Array(tableSize)
    .fill(Array(tableSize).fill(true))
    .map((row) => row.map(() => Math.random() < 0.3));
};

export type QuestionState = {
  cells: boolean[][];
};

const initialState: QuestionState = {
  cells: createRandomCells(),
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    reset: (state) => {
      state.cells = createRandomCells();
    },
  },
});

export const actions = questionSlice.actions;
