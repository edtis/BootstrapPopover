import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import "./App.css";
const Routes = lazy(() => import("./Routes"));

class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </Provider>
    );
  }
}

export default App;
