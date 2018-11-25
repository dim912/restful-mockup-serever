/** This is the root reducer which combine other reducers and export
 * This is refered by the store
 */

import { combineReducers } from 'redux'
import postReducer from './postReducer'
import testReducer from './testReducer'
import collectionsReducer from './collectionsReducer'
import uiStateReducer from './uiStateReducer'



export default combineReducers({
    posts: postReducer,
    test: testReducer,
    collections: collectionsReducer,
    uiState: uiStateReducer
})