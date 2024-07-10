import { React, useState } from "react";
import Layout from "../components/Layouts/Layout";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, password, phone, email, address }
      );

      console.log(res.data);

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (e) {
      toast.error("Something went wrong");
    }
  }

  return (
    <Layout>
      <ToastContainer />
      <div className="form-container">
        <div className="row no-gutters">
          <div className="col-md-6 ">
            <form onSubmit={handleSubmit}>
              <h2 className="title">Sign up</h2>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  className="form-control"
                  id="phone"
                  placeholder="Phone"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  className="form-control"
                  id="address"
                  placeholder="Address"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <img className="register-img" src="/bag_register.jpg"></img>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
