import { LIFECYCLE } from "redux-pack";
import { testPackTransform } from "util/test/redux-pack";
import reducer, { LOGIN, LOGOUT } from "./index";

describe("Auth reducer", () => {
  const initialState = {
    loading: false,
    authenticated: false,
    username: "",
    error: null
  };

  it("sets loading state when logging in", () =>
    testPackTransform({
      actionType: LOGIN,
      packStage: LIFECYCLE.START,
      reducer,
      initialState,
      expectedEndState: {
        ...initialState,
        loading: true
      }
    }));

  it("sets error state when logging in fails", () =>
    testPackTransform({
      actionType: LOGIN,
      packStage: LIFECYCLE.FAILURE,
      reducer,
      packPayload: {
        message: "error fetching"
      },
      initialState,
      expectedEndState: {
        ...initialState,
        error: "error fetching"
      }
    }));

  it("sets state when login succeeds", () =>
    testPackTransform({
      actionType: LOGIN,
      packStage: LIFECYCLE.SUCCESS,
      reducer,
      packPayload: {
        username: "loretta"
      },
      initialState,
      expectedEndState: {
        ...initialState,
        authenticated: true,
        username: "loretta"
      }
    }));

  it("sets loading state when logging out", () =>
    testPackTransform({
      actionType: LOGOUT,
      packStage: LIFECYCLE.START,
      reducer,
      initialState,
      expectedEndState: {
        ...initialState,
        loading: true
      }
    }));

  it("sets error state when logging out fails", () =>
    testPackTransform({
      actionType: LOGIN,
      packStage: LIFECYCLE.FAILURE,
      reducer,
      packPayload: {
        message: "error fetching"
      },
      initialState,
      expectedEndState: {
        ...initialState,
        error: "error fetching"
      }
    }));

  it("sets state when logging out succeeds", () =>
    testPackTransform({
      actionType: LOGOUT,
      packStage: LIFECYCLE.SUCCESS,
      reducer,
      initialState,
      expectedEndState: {
        ...initialState,
        authenticated: false,
        username: ""
      }
    }));
});
