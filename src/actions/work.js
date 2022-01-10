import * as api from "../api";

export const getWork = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWork();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createWork = (work) => async (dispatch) => {
  try {
    const { data } = await api.createWork(work);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateWork = (id, work) => async (dispatch) => {
  try {
    const { data } = await api.updateWork(id, work);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteWork = (id) => async (dispatch) => {
  try {
    await api.deleteWork(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
