import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

export default function Spin(props) {
  const [sec, setSec] = useState(props.time);
  const nav = useNavigate();
  useEffect(() => {
    var id = setInterval(() => {
      setSec((prevSec) => {
        return prevSec - 1;
      });
    }, 1000);

    if (sec === 0) nav("/login");

    return () => {
      clearInterval(id);
    };
  }, [sec]);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderStyle: "solid",
          height: "100vh",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Spinner
          className="align-items-center"
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <div>
          <i>Redirecting in {sec} seconds</i>
        </div>
      </div>
    </>
  );
}
