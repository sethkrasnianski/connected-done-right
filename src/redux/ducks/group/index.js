import { handle } from "redux-pack";
import api from "lib/api/group";

export const CREATE_GROUP = "group/CREATE_GROUP";
export const READ_GROUP = "group/READ_GROUP";
export const UPDATE_GROUP = "group/UPDATE_GROUP";
export const DESTROY_GROUP = "group/DESTROY_GROUP";

const initialState = {
  loading: false,
  error: null,
  list: []
};

export const createGroup = group => ({
  type: CREATE_GROUP,
  promise: api.post("/group", group)
});

export const readGroup = id => ({
  type: READ_GROUP,
  promise: api.get(id)
});

export const updateGroup = (id, group) => ({
  type: UPDATE_GROUP,
  promise: api.patch(id, group)
});

export const destroyGroup = id => ({
  type: DESTROY_GROUP,
  promise: api.destroy(id),
  meta: { id }
});

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_GROUP:
      return handle(state, action, {
        start: prevState => ({ ...prevState, loading: true, error: null }),
        finish: prevState => ({ ...prevState, loading: false }),
        failure: prevState => ({ ...prevState, error: payload.message }),
        success: prevState => ({
          ...prevState,
          list: [...prevState.list, payload]
        })
      });
    case READ_GROUP:
    case UPDATE_GROUP:
      return handle(state, action, {
        start: prevState => ({ ...prevState, loading: true, error: null }),
        finish: prevState => ({ ...prevState, loading: false }),
        failure: prevState => ({ ...prevState, error: payload.message }),
        success: prevState => ({
          ...prevState,
          list: Array.isArray(payload)
            ? payload
            : [...prevState.list.filter(g => g.id !== payload.id), payload]
        })
      });
    case DESTROY_GROUP:
      return handle(state, action, {
        start: prevState => ({ ...prevState, loading: true, error: null }),
        finish: prevState => ({ ...prevState, loading: false }),
        failure: prevState => ({ ...prevState, error: payload.message }),
        success: prevState => ({
          ...prevState,
          list: prevState.list.filter(g => g.id !== action.meta.id)
        })
      });
    default:
      return state;
  }
};

export default reducer;
