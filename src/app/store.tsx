import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './postsSlice';


const store =  configureStore({
    reducer: {
        postsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),

});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;