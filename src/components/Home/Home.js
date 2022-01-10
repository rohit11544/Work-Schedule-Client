import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { deleteWork } from "../../actions/work";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const works = useSelector((state) => state.work);
  const dispatch = useDispatch();

  return (
    <>
      {works.length === 0 ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <section className="backgroundcolour">
          <br />
          <center>
            <h1 className="headingcolour">
              <b>ALL WORKS HERE</b>
            </h1>
          </center>

          <div className="container mx-auto mt-4">
            <div className="row">
              {works.map((work) => (
                <>
                  <div className="col-md-4">
                    <div className="card" style={{ width: "25rem" }}>
                      <img
                        src="https://www.irishtimes.com/polopoly_fs/1.3772617.1548667137!/image/image.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{work.workTitle}</h5>
                        <p className="card-text">{work.workDescription}</p>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {work.deadLine}
                        </h6>
                        <Link
                          to={{
                            pathname: `/UpdateForm?${work._id}`,
                          }}
                        >
                          <button class="btn btn-primary">Update</button>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <button
                          class="btn btn-danger"
                          onClick={() => dispatch(deleteWork(work._id))}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          <center>
            <Link to="/Forms">
              <button class="btn btn-success">Add Schedule</button>
            </Link>
          </center>
          <br />
          <br />
          <br />
        </section>
      )}
    </>
  );
}
