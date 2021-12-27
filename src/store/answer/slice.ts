import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// TODO: 一元的に管理してUIを介して動的に変更できるようにする
const DEFAULT_TABLE_SIZE = 5;

const allBlankCells = Array(DEFAULT_TABLE_SIZE)
  .fill([])
  .map(() => {
    return Array(DEFAULT_TABLE_SIZE).fill(false);
  });

export type AnswerState = {
  tableSize: number;
  cells: boolean[][];
};

const initialState: AnswerState = {
  tableSize: DEFAULT_TABLE_SIZE,
  cells: allBlankCells,
};

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    updateCell: (state, action: PayloadAction<{ x: number; y: number }>) => {
      const { x, y } = action.payload;
      const newCells = [...state.cells];
      newCells[x][y] = !state.cells[x][y];
      state.cells = newCells;
    },
  },
});

export const actions = answerSlice.actions;
export default answerSlice.reducer;
