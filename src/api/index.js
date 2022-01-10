import axios from "axios";

const url = "https://sr-workschedule.herokuapp.com/work";

export const fetchWork = () => axios.get(url); // read
export const createWork = (newWork) => axios.post(url, newWork); // create
export const updateWork = (id, updateWork) =>
  axios.patch(`${url}/${id}`, updateWork);
export const deleteWork = (id) => axios.delete(`${url}/${id}`);
