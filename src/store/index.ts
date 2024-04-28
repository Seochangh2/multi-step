import { createStore } from "redux"
import multiStepReducer from "../reducer/reducer"
import { persistStore, persistReducer } from "redux-persist"
import storageSession from "redux-persist/lib/storage/session"
// Redux Persist 구성
const persistConfig = {
  key: "root",
  storage: storageSession, // 세션 스토리지 사용
}
const persistedReducer = persistReducer(persistConfig, multiStepReducer)
const store = createStore(persistedReducer)

// persistor 설정
export const persistor = persistStore(store)
export default store
