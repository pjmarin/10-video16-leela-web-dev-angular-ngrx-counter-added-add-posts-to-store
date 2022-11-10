import { createReducer, on } from '@ngrx/store';
import { initialState, PostsState } from './posts.state';
import { addPost } from './posts.actions';
import { Action } from 'rxjs/internal/scheduler/Action';

const _postsReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {
        let post = { ...action.post };

        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [ ...state.posts, post ]
        };
    }),
);

export function postsReducer(state: PostsState = initialState, action: any) {
  return _postsReducer(state, action);
}