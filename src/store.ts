import { configureStore } from '@reduxjs/toolkit';
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { questionSlice } from 'store/question/slice';

export const store = configureStore({
  reducer: {
    question: questionSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// c.f. https://future-architect.github.io/articles/20200501/
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;