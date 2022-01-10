import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import UpdateForm from "./UpdateForm";

export default function FindUpdateForm() {
  const location = useLocation();
  const works = useSelector((state) => state.work);
  return (
    <>
      {works.length === 0 ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <UpdateForm
            uWork={works.filter((w) => w._id === location.search.slice(1))[0]}
          />
        </>
      )}
    </>
  );
}
