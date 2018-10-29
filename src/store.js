import { createStore } from 'redux';
import reducers from './reducers/rootReducer';

export default createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension()
);
