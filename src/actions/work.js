import * as api from "../api";

export const getWork = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWork();
    dispatch({ Type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createWork = (work) => async (dispatch) => {
  try {
    const { data } = await api.createWork(work);
    dispatch({ Type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateWork = (id, work) => async (dispatch) => {
  try {
    const { data } = await api.updateWork(id, work);
    dispatch({ Type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteWork = (id) => async (dispatch) => {
  try {
    await api.deleteWork(id);
    dispatch({ Type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
