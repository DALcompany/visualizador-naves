import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from '../Reducers'

export const MakeStore = (initialState) => {
	const composeEnhancers =
		typeof window !== 'undefined' &&
			window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
			}) : compose

	const enhancer = composeEnhancers(
		applyMiddleware(reduxThunk),
		// other store enhancers if any
	)

	const store = createStore(reducers, initialState, enhancer)

	return store;
}