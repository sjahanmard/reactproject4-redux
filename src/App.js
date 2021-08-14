import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import Posts from "./components/Posts";
import PostForm from "./components/Postform";
import store from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PostForm />
          <hr />
          <Posts />
        </Provider>
      </div>
    );
  }
}

export default App;
