import { handle } from "redux-pack";
import Auth from "lib/api/auth";

export const LOGIN = "auth/LOGIN";
export const LOGOUT = "auth/LOGOUT";

const initialState = {
  loading: false,
  authenticated: false,
  username: "",
  error: null
};

export const login = (username, password) => ({
  type: LOGIN,
  promise: Auth.login(username, password)
});

export const logout = () => ({
  type: LOGOUT,
  promise: Auth.logout()
});

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return handle(state, action, {
        start: prevState => ({ ...prevState, loading: true, error: null }),
        finish: prevState => ({ ...prevState, loading: false }),
        failure: prevState => ({
          ...prevState,
          authenticated: false,
          error: payload.message,
          username: ""
        }),
        success: prevState => ({
          ...prevState,
          authenticated: true,
          username: payload.username
        })
      });
    case LOGOUT:
      return handle(state, action, {
        start: prevState => ({ ...prevState, loading: true, error: null }),
        finish: prevState => ({ ...prevState, loading: false }),
        failure: prevState => ({ ...prevState, error: payload.message }),
        success: prevState => ({
          ...prevState,
          authenticated: false,
          username: ""
        })
      });
    default:
      return state;
  }
};

export default reducer;
