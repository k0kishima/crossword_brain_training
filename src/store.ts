import { configureStore } from '@reduxjs/toolkit';
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import rootReducer from 'store/rootReducer';
import { save, load } from 'redux-localstorage-simple';

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: load(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save()),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// c.f. https://future-architect.github.io/articles/20200501/
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
