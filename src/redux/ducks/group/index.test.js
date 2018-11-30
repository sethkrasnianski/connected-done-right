import { LIFECYCLE } from "redux-pack";
import { testPackTransform } from "util/test/redux-pack";
import reducer, {
  CREATE_GROUP,
  READ_GROUP,
  UPDATE_GROUP,
  DESTROY_GROUP
} from "./index";

describe("Group reducer", () => {
  const initialState = {
    loading: false,
    error: null,
    list: []
  };

  it("sets loading state when creating a group", () =>
    testPackTransform({
      actionType: CREATE_GROUP,
      packStage: LIFECYCLE.START,
      reducer,
      initialState,
      expectedEndState: {
        ...initialState,
        loading: true
      }
    }));

  it("sets error state when creating a group fails", () =>
    testPackTransform({
      actionType: CREATE_GROUP,
      packStage: LIFECYCLE.FAILURE,
      reducer,
      packPayload: {
        message: "error fetching"
      },
      initialState,
      expectedEndState: {
        ...initialState,
        list: [],
        error: "error fetching"
      }
    }));

  it("sets state when creating a group succeeds", () =>
    testPackTransform({
      actionType: CREATE_GROUP,
      packStage: LIFECYCLE.SUCCESS,
      reducer,
      packPayload: { id: 1, name: "Foo" },
      initialState,
      expectedEndState: {
        ...initialState,
        list: [{ id: 1, name: "Foo" }],
        loading: false
      }
    }));

  it("sets loading state when reading a group", () =>
    testPackTransform({
      actionType: READ_GROUP,
      packStage: LIFECYCLE.START,
      reducer,
      initialState,
      expectedEndState: {
        ...initialState,
        loading: true
      }
    }));

  it("sets error state when reading a group fails", () =>
    testPackTransform({
      actionType: READ_GROUP,
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

  it("sets state when reading groups succeeds", () =>
    testPackTransform({
      actionType: READ_GROUP,
      packStage: LIFECYCLE.SUCCESS,
      reducer,
      packPayload: [{ id: 1, name: "Foo" }, { id: 2, name: "Bar" }],
      initialState,
      expectedEndState: {
        ...initialState,
        list: [{ id: 1, name: "Foo" }, { id: 2, name: "Bar" }],
        loading: false
      }
    }));

  it("sets loading state when updating a group", () =>
    testPackTransform({
      actionType: UPDATE_GROUP,
      packStage: LIFECYCLE.START,
      reducer,
      initialState,
      expectedEndState: {
        ...initialState,
        loading: true
      }
    }));

  it("sets error state when reading a group fails", () =>
    testPackTransform({
      actionType: UPDATE_GROUP,
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

  it("sets state when updating a group succeeds", () =>
    testPackTransform({
      actionType: UPDATE_GROUP,
      packStage: LIFECYCLE.SUCCESS,
      reducer,
      packPayload: { id: 1, name: "Bar" },
      initialState: {
        ...initialState,
        list: [{ id: 1, name: "Foo" }]
      },
      expectedEndState: {
        ...initialState,
        list: [{ id: 1, name: "Bar" }],
        loading: false
      }
    }));

  it("sets loading state when destroying a group", () =>
    testPackTransform({
      actionType: DESTROY_GROUP,
      packStage: LIFECYCLE.START,
      reducer,
      initialState,
      expectedEndState: {
        ...initialState,
        loading: true
      }
    }));

  it("sets error state when destroying a group fails", () =>
    testPackTransform({
      actionType: DESTROY_GROUP,
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

  it("sets state when destroying a group succeeds", () =>
    testPackTransform({
      actionType: DESTROY_GROUP,
      packStage: LIFECYCLE.SUCCESS,
      reducer,
      packPayload: null,
      actionMeta: { id: 2 },
      initialState: {
        ...initialState,
        list: [{ id: 1, name: "Foo" }, { id: 2, name: "Bar" }]
      },
      expectedEndState: {
        ...initialState,
        list: [{ id: 1, name: "Foo" }],
        loading: false
      }
    }));
});
