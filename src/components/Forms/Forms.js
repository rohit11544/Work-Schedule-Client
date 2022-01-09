import React, { useState } from "react";
import { createWork } from "../../actions/work";
import { useDispatch } from "react-redux";

export default function Forms() {
  const [work, setWork] = useState({
    workTitle: "",
    workDescription: "",
    deadLine: "",
  });
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault(); // it stops refreshing page
    if (
      work.workTitle !== "" &&
      work.workDescription !== "" &&
      work.deadLine !== ""
    ) {
      dispatch(createWork(work)); // dispatching actions
      alert("Work added successfully...");
      setWork({ workTitle: "", workDescription: "", deadLine: "" });
    } else {
      alert("Enter all details!!!");
    }
  };
  return (
    <>
      <div className="container">
        <center>
          <h1>
            <b>ADD YOUR WORK HERE</b>
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
            Addwork
          </button>
        </form>
      </div>
    </>
  );
}
