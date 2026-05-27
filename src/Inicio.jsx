import { AppRouter } from "./router/AppRouter";

import { Provider } from "react-redux";
import { store } from "./store/store";

export const Inicio = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};
