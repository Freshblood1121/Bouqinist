import {
  configureStore,
  combineReducers,
  applyMiddleware,
  createStore,
  compose,
} from "@reduxjs/toolkit";
import { booksReducer } from "./books/reducer";
// import { messagesReducer } from "./messages/reducer";
// import { profileReducer } from "./profile/reducer";
// Логгер для отслеживания отправленных action'ов и измененного ими state'а
import logger from "./middleWare/logger";
// Логгер для вычисления времени, затраченного reducer'ами на обработку каждого action'а
import monitorReducerEnhancer from "./enhancers/monitorReducer";
import thunk from "redux-thunk";
// import newMessageIndicator from "./middleWare/newMessageIndicator";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { categoriesReducer } from "./categories/reducer";

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const middlewareEnhancer = applyMiddleware(
  logger,
  thunk
  // newMessageIndicator
);

const persistConfig = {
  key: "Bouqinist",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  enhancers: [middlewareEnhancer, monitorReducerEnhancer],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
