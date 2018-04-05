import { combineReducers } from 'redux';
import { routeReducers } from 'react-router-reducer';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;
