import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import BaseRoutes from "./routing/BaseRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainLayout>
          <BaseRoutes />
        </MainLayout>
      </Router>
    </Provider>
  );
}

export default App;
