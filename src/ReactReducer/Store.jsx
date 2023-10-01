import { createStore } from 'redux'
import rootReducers from "./reactreducer";


const store1=createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store1;