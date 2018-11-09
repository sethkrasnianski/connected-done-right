import { KEY } from "redux-pack";

// this utility method will make an action that redux pack understands
export function makePackAction(lifecycle, { type, payload, meta = {} }) {
  return {
    type,
    payload,
    meta: {
      ...meta,
      [KEY.LIFECYCLE]: lifecycle
    }
  };
}

// this allows you to do a simple input-output comparison for a
// redux-pack stage.
export const testPackTransform = ({
  reducer,
  actionType,
  packStage,
  packPayload = {},
  actionMeta = {},
  initialState = {},
  expectedEndState = {}
}) => {
  const action = makePackAction(packStage, {
    type: actionType,
    payload: packPayload,
    meta: actionMeta
  });
  const reduction = reducer(initialState, action);
  expect(reduction).toEqual(expectedEndState);
};

export const pickReducer = (reducer, keys) => (state, action) => {
  const newState = reducer(state, action);
  return keys.map(key => newState[key]);
};
