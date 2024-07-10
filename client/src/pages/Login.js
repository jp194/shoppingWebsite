import React, { useState } from "react";
import Layout from "../components/Layouts/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { useAuth } from "../context/auth";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const [auth, setAuth] = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email: email,
          password: password,
        }
      );

      if (res.data.success) {
        setAuth({ ...auth, user: res.data.user, token: res.data.token });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      } else {
        alert("Invalid Email or Password");
      }
    } catch (e) {
      alert("Something went wrong");
    }
  }
  return (
    <Layout>
      <div className="form-container" style={{ minHeight: "85vh" }}>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} style={{ minHeight: "55vh" }}>
              <h2 className="title">Login</h2>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
              </div>

              <div className="mb-3">
                <button type="submit" className="form-control">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <img className="login-img" src="/bag_register.jpg" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
