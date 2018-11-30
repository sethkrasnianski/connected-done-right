import api from "lib/api";

const createGroup = group => api.post("/group", group);

const readGroup = id => api.get(`/group/${id}`);

const updateGroup = (id, group) => api.patch(`/group/${id}`, group);

const destroyGroup = id => api.destroy(`/group/${id}`);

export default {
  createGroup,
  readGroup,
  updateGroup,
  destroyGroup
};
