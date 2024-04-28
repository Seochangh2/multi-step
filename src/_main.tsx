import React from "react"
import ReactDOM from "react-dom/client"

import App from "./_app"

import { Provider } from "react-redux"
import store, { persistor } from "./store"

import "./styles/globals.css"
import { PersistGate } from "redux-persist/integration/react"

async function deferRender() {
  if (import.meta.env.PROD) return

  const { worker } = await import("./mocks/browser")

  return worker.start()
}

void deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  )
})
