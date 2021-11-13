import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function UserPage() {
  const firstName = useSelector((state) => state.userFirstName);
  const lastName = useSelector((state) => state.userLastName);

  const dispatch = useDispatch();

  return (
    <>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <button
        onClick={() => {
          dispatch({ type: "SET_USER_FIRST_NAME", payload: "Brian" });
        }}
      >
        First Name
      </button>
      <button
        onClick={() =>
          dispatch({ type: "SET_USER_LAST_NAME", payload: "Tong" })
        }
      >
        Last Name
      </button>
    </>
  );
}
