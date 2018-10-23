import { createStore } from 'redux';
import reducers from './reducers/routeReducer';

export default createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension()
);
