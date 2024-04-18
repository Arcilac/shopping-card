import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./src/app/store"
import "./index.css"
import App from "./src/App"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
)
