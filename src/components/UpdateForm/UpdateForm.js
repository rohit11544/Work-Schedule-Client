import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateWork } from "../../actions/work";

export default function UpdateForm({ uWork }) {
  const [work, setWork] = useState(uWork);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateWork(work._id, work));
    alert("Updated successfully");
  };

  return (
    <>
      {" "}
      <div className="container">
        <center>
          <h1>
            <b>UPDATE YOUR WORK HERE</b>
          </h1>{" "}
        </center>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              required
              onChange={(e) => setWork({ ...work, workTitle: e.target.value })} // using onchange event we are updating work with user input
              value={work.workTitle}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) =>
                setWork({ ...work, workDescription: e.target.value })
              }
              value={work.workDescription}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Deadline
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setWork({ ...work, deadLine: e.target.value })}
              value={work.deadLine}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => submitHandler(e)}
          >
            Updatework
          </button>
        </form>
      </div>
    </>
  );
}
