import React, { useState } from "react";
import Layout from "../components/Layouts/Layout";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit() {
    alert(email + " " + password);
  }
  return (
    <Layout>
      <div className="login">
        <div className="login-box">
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <button type="submit" className="form-control">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
