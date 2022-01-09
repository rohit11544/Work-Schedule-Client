import axios from "axios";

const url = "http://localhost:5000/work";
 
export const fetchWork = () => axios.get(url); // read
export const createWork = (newWork) => axios.post(url,newWork); // create
export const updateWork = (id,updateWork) => axios.patch(`${url}/${id}`,updateWork);
export const deleteWork = (id) => axios.delete(`${url}/${id}`);
