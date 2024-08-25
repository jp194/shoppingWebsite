import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Spin() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderStyle: "solid",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Spinner
          className="align-items-center"
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
  );
}
