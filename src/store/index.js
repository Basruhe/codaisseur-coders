// src/store/index.js
import { createStore } from "redux";
import reducer from "./rootReducer";
const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, enhancer);
export default store;
import { Provider } from "react-redux";
import store from "./store";
// ...
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
